import { verifyRefresh } from "../middleware/auth.js";
import jwt from "jsonwebtoken"

// provides refresh token
export const refresh = async (req, res) => {
  const { Email } = req.body;
  const refreshToken = req.headers.cookie.split("; ")[1].split("=")[1];

  // call the middle ware to check valid token
  const isValid = verifyRefresh(Email, refreshToken);
  if (!isValid) {
    return res
      .status(401)
      .json({ success: false, error: "Invalid token,try login again" });
  }
  const accessToken = jwt.sign({ Email: Email }, "accessSecret", {
    expiresIn: "10m",
  });
  res.cookie("accessToken", accessToken, {
    maxAge: 24 * 60 * 60 * 1000,
  });
  return res.status(200).json({ success: true, accessToken });
};
