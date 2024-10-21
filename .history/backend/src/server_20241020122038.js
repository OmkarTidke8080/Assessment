import express from "express";
import connectDB from "./db/db.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/UserRouter.js";
import { isAuthenticated } from "./middleware/auth.js";
import dotenv from "dotenv";
import cors from "cors";
import {
  optRequest,
  resetPassword,
  verifyOtp,
} from "./controlllers/otpHandler.js";
import validateRequestOTP from "./utils/requestOtpValidations.js";
import validateVerifyOtp from "./utils/verifyOtpValidation.js";
import validateResetPassword from "./utils/resetPassword.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

// CORS setup
const allowedOrigins = ["http://localhost:5173"];
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, 
  }));

////////// base route //////////
app.use("/api/user", userRoute);

// database connection and server creation code
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is listening at PORT: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

//////////////// OTP  Routes  /////////////////////////
app.post("/request-otp", isAuthenticated, validateRequestOTP, optRequest);
app.post("/verify-otp", isAuthenticated, validateVerifyOtp, verifyOtp);
app.post(
  "/reset-password",
  isAuthenticated,
  validateResetPassword,
  resetPassword
);
