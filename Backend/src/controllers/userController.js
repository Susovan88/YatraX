import { body, validationResult } from 'express-validator';
import User from '../models/userModel.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const registerUser = async (req, res, next) => {
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
    next(error); // Pass errors to global error handler
  }
};


