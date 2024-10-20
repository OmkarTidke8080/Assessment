import express from "express";
import connectDB from "./db/db.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/UserRouter.js";
import nodemailer from "nodemailer";
import { isAuthenticated } from "./middleware/auth.js";
import bcrypt from "bcrypt"
import User from "./models/UserModel.js";
import dotenv from "dotenv";
import { resetPassword, verifyOtp } from "./controlllers/otpHandler.js";

dotenv.config();

const app = express();
app.use(express.json());


app.use(cookieParser());
app.use("/api/user", userRoute);

const PORT = 3000;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening at PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });


let otpStore = {}; 

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "omkartidke2016@gmail.com",
    pass: "wkbg zuzx xfwa dmil",
  },
});

app.post("/request-otp", isAuthenticated,request)

app.post("/verify-otp", isAuthenticated, verifyOtp);

app.post("/reset-password", isAuthenticated,resetPassword);
