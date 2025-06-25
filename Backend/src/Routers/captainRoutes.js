import express from 'express';
import { body, validationResult } from 'express-validator';
import { getCaptainProfile, loginCaptain, logoutCaptain, registerCaptain } from '../controllers/captainControllers.js';
import { authCaptain } from '../middlewares/authCaptain.js';

const captainRouter = express.Router();

captainRouter.post('/register',[
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

    body('vehicle.color')
        .notEmpty().withMessage('Vehicle color is required')    
        .isLength({ min: 3 }).withMessage('Vehicle color must be at least 3 characters long'),

    body('vehicle.plate')
        .notEmpty().withMessage('Vehicle plate is required')
        .isLength({ min: 3 }).withMessage('Vehicle plate must be at least 3 characters long'),

    body('vehicle.capacity')
        .notEmpty().withMessage('Vehicle capacity is required')
        .isInt({ min: 1 }).withMessage('Vehicle capacity must be at least 1'),

    body('vehicle.vehicleType') 
        .notEmpty().withMessage('Vehicle type is required')
        .isIn(['car', 'motorcycle', 'auto', 'bus']).withMessage('Invalid vehicle type'),
],registerCaptain);

captainRouter.post('/login',[
    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email address'),
    
    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
],loginCaptain);


captainRouter.get("/profile",authCaptain,getCaptainProfile);


captainRouter.delete("/logout", authCaptain,logoutCaptain);




export default captainRouter;