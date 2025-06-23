import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import BacklistToken from "../models/backListTokenModel.js";

export const authUser = async (req, res, next) => {
  let token;

  // Check Authorization header first
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
  }

  // Fallback to cookie if no token in header
  if (!token && req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  console.log("Token from request:", token);

  const isBackList=await BacklistToken.findOne({token});
  console.log("isBackList: ",isBackList);
  if(isBackList){
    return res.status(401).json({ message: "Token is blacklisted." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.userId);
    next();
  } catch (err) {
    console.error("Token verification failed:", err);
    return res.status(401).json({ message: "Token is not valid" });
  }
};
