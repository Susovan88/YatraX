import { body, validationResult } from 'express-validator';
import User from '../models/userModel.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import BacklistToken from "../models/backListTokenModel.js"


export const registerUser = async (req, res) => {
  // Check validation errors from express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { fullname, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user instance
    const user = new User({
      fullname,
      email,
      password: hashedPassword,
    });

    // Save user to DB
    await user.save();

    // Generate JWT Token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie('authToken', token);

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
      token
    });

  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const loginUser = async (req, res) => {
  // Check validation errors from express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email }).select('+password'); // Include password field for comparison
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT Token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie('authToken', token);

    res.status(200).json({
      message: 'Login successful',
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
      token
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}   


export const getProfile = async (req, res) => {
  try {
    const user = req.user; // User is set by authUser middleware
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });

  } catch (error) {
    console.error("Get profile error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export const logOut=async (req, res) => {
  try {
        
    BacklistToken.create({
      token: req.cookies.authToken, // Store the token in blacklist
      createdAt: new Date()
    });
    res.clearCookie('authToken'); // Clear the auth token cookie

    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}