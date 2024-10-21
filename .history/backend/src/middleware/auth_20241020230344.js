import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";

// this middleware generate access and refresh token
export const generateAccessToken = async (Email) => {
  const accessToken = jwt.sign({ Email: Email }, "accessSecret", {
    expiresIn: "15m",
  });
  const refreshToken = jwt.sign({ Email: Email }, "refreshSecret", {
    expiresIn: "30m",
  });

  return { accessToken, refreshToken };
};


// checks is user is Authenticated
export const isAuthenticated = async (req, res, next) => {
  try {
    let token = "";
    // if(req.headers.cookie)
    // {
    //      token = req.headers.cookie.split("; ")[0].split("=")[1];
    // }

    if (req.headers.cookie) {
      const cookies = req.headers.cookie.split("; ");
      const accessTokenCookie = cookies.find((row) =>
        row.startsWith("accessToken=")
      );
      if (accessTokenCookie) {
        token = accessTokenCookie.split("=")[1];
      }
    }
    
    if (!token) {
      return res.status(404).json({ success: false, msg: "Token not found" });
    }

    

    const decoded = jwt.verify(token, "accessSecret");
    req.email = decoded.email;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, msg: error.message });
  }
};


// verify refresh token
export const verifyRefresh = async (Email, token) => {
  try {
    const decoded = jwt.verify(token, "refreshSecret");
    return decoded.Email === Email;
  } catch (error) {
    console.error(error);
    return false;
  }
};

// check if signed user role is manager (Access controll middleware)
export const isManager = async (req, res, next) => {
  try {
    let token = "";
    if (req.headers.cookie) {
      token = req.headers.cookie.split("; ")[0].split("=")[1];
    }

    if (!token) {
      return res.status(401).json({ msg: "Access token is missing" });
    }

    const decoded = jwt.verify(token, "accessSecret"); 
    const user = await User.findOne({ Email: decoded.Email });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    if (user.role !== "manager") {
      return res.status(403).json({ msg: "Access denied. Not a manager." });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      msg: "Server error",
      error: error.message,
    });
  }
};

