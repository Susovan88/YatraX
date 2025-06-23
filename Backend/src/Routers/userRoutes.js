import express from 'express';
import { body, validationResult } from 'express-validator';
import { getProfile, loginUser, logOut, registerUser } from '../controllers/userController.js';
import { authUser } from '../middlewares/authUser.js';

const userRouter = express.Router();

userRouter.post('/register', [
  body('fullname.firstname')
    .notEmpty().withMessage('First name is required')
    .isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
  
  body('fullname.lastname')
    .notEmpty().withMessage('Last name is required')
    .isLength({ min: 3 }).withMessage('Last name must be at least 3 characters long'),

  body('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Invalid email address'),

  body('password')
    .notEmpty().withMessage('Password is required')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),

],registerUser);

userRouter.post("/login",[
  body('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Invalid email address'),

  body('password')
    .notEmpty().withMessage('Password is required')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
],loginUser);


userRouter.get("/profile",authUser,getProfile);

userRouter.delete("/logout",logOut);

export default userRouter;


