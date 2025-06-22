import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import main from './config/mongoDB.js';
import userRouter from './Routers/userRoutes.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

main().then(()=>{  // connect mongodb
    console.log("-> -> mongodb is connected with server!!!")
}).catch(err=> console.log("err: ",err));


// Routes
app.use('/api/users', userRouter);

app.listen(PORT, () => {
    console.log(` --> Server is running on http://localhost:${PORT}`);
});
