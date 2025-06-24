import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import main from './config/mongoDB.js';
import userRouter from './Routers/userRoutes.js';
import captainRouter from './Routers/captainRoutes.js';
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares...
app.use(cors({
    origin:'*',
    credentials: true,
    allowedHeaders: ['Content-Type', 'authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


main().then(()=>{  // connect mongodb...
    console.log("-> -> mongodb is connected with server!!!")
}).catch(err=> console.log("err: ",err));


// Routes
app.use('/api/users', userRouter); // for users...
app.use('/api/captains', captainRouter); // for captains...



app.listen(PORT, () => {
    console.log(` --> Server is running on http://localhost:${PORT}`);
});
