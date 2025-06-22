import mongoose from "mongoose";
import env from "dotenv";
env.config();

const mongoUrl=process.env.MONGO_URL;

const main=async()=>{
    await mongoose.connect(`${mongoUrl}/YatraX`);
}
export default main;

