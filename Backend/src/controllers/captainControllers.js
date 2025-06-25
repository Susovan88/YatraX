import { body, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";
import Captain from '../models/captainModel.js';
import BacklistToken from "../models/backListTokenModel.js";


export const registerCaptain =async (req, res) => {
  // Check validation errors from express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { fullname, email, password, vehicle } = req.body;

    if(!fullname || !email || !password || !vehicle) {
      return res.status(400).json({ message: "All fields are required" });  
    }

    const isExistingCaptain = await Captain.findOne({ email });
    if (!isExistingCaptain) {    
      return res.status(400).json({ message: "Captain with this email already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new captain instance
    const newCaptain = new Captain({
      fullname,
      email,
      password:hashedPassword, // Password should be hashed before saving in production
      vehicle,
    });

    // Save captain to the database
    await newCaptain.save();

    // Generate JWT Token   
    const token = jwt.sign({ captainId: newCaptain._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Set the token in a cookie
    res.cookie('authToken', token);

    res.status(201).json({
      message: 'Captain registered successfully',
      captain: {
        _id: newCaptain._id,
        fullname: newCaptain.fullname,
        email: newCaptain.email,
        vehicle: newCaptain.vehicle,
      },
      token,
    });

  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}


export const loginCaptain = async (req, res) => {
  // Check validation errors from express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, password } = req.body;

    // Find captain by email
    const captain = await Captain.findOne({ email }).select('+password');;
    if (!captain) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, captain.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate JWT Token
    const token = jwt.sign({ captainId: captain._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Set the token in a cookie
    res.cookie('authToken', token);

    res.status(200).json({
      message: 'Captain logged in successfully',
      captain: {
        _id: captain._id,
        fullname: captain.fullname,
        email: captain.email,
        vehicle: captain.vehicle,
      },
      token,
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};  

export const getCaptainProfile = async (req, res) => {
  try {
    const captainId = req.captain._id;

    // Find captain by ID
    const captain = await Captain.findById(captainId).select('-password');
    if (!captain) {
      return res.status(404).json({ message: "Captain not found" });
    }
    res.status(200).json({
      message: 'Captain profile retrieved successfully',
      captain,
    });
  } catch (error) {
    console.error("Profile retrieval error:", error);
    res.status(500).json({ message: "Internal server error" });
  } 
}


export const logoutCaptain = async (req, res) => {
  try {
    // Store the token in blacklist
    await BacklistToken.create({
      token: req.authToken,
      createdAt: new Date()
    });

    // Clear the auth token cookie
    res.clearCookie('authToken');

    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}