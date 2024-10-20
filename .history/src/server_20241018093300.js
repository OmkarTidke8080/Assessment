import express from "express";
import connectDB from "./db/db.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/UserRouter.js";
import nodemailer from "nodemailer";
import { isAuthenticated } from "./middleware/auth.js";
import bcrypt from "bcrypt"
import User from "./models/UserModel.js";
import dotenv from "dotenv";

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

app.post("/request-otp", isAuthenticated, async (req, res) => {
  const { Email } = req.body;

  const user = await User.findOne({ Email: Email });
  if (!user) {
    return res.status(404).send("User not found");
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore[Email] = otp; 

  transporter.sendMail(
    {
      from: "omkartidke2016@gmail.com",
      to: Email,
      subject: "Password Reset OTP",
      text: `Your OTP for password reset is: ${otp}`,
    },
    (error, info) => {
      console.log(error);
      if (error) {
        return res.status(500).send("Error sending OTP");
      }
      res.send("OTP sent to your email");
    }
  );
});

app.post("/verify-otp", isAuthenticated, (req, res) => {
  const { Email, otp } = req.body;

  if (otpStore[Email] && otpStore[Email] === otp) {
    delete otpStore[Email]; // OTP valid, remove it
    res.send("OTP verified, you can reset your password");
  } else {
    res.status(400).send("Invalid OTP");
  }
});

app.post("/reset-password", isAuthenticated,ses);
