import jwt from "jsonwebtoken";
import Captain from "../models/captainModel.js";
import BlacklistToken from "../models/backListTokenModel.js";



export const authCaptain = async (req, res, next) => {
  let token;

  // Check Authorization header first
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
  }

  // Fallback to cookie if no token in header
  if (!token && req.cookies.authToken) {
    token = req.cookies.authToken;
  }

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  console.log("Token from request:", token);

  const isBlackList = await BlacklistToken.findOne({ token });
  if (isBlackList) {
    return res.status(401).json({ message: "Token is blacklisted." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.captain = await Captain.findById(decoded.captainId);
    req.authToken=token;
    return next();
  } catch (err) {
    console.error("Token verification failed:", err);
    return res.status(401).json({ message: "Token is not valid" });
  }
};   