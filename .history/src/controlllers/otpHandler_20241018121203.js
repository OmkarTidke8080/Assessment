import User from "../models/UserModel.js";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt"


let otpStore = {};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "omkartidke2016@gmail.com",
    pass: "wkbg zuzx xfwa dmil",
  },
});


// send otp request to specified mail
export const optRequest = async(req,res) =>{
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
}


// verifies the 
export const verifyOtp = async(req,res) =>{
const { Email, otp } = req.body;

if (otpStore[Email] && otpStore[Email] === otp) {
  delete otpStore[Email]; 
  res.send("OTP verified, you can reset your password");
} else {
  res.status(400).send("Invalid OTP");
}
}

export const resetPassword = async (req,res) =>{
  const { Email, newPassword } = req.body;

  const user = await User.findOne({ Email: Email });
  if (!user) {
    return res.status(404).send("User not found");
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  user.Password = hashedPassword;

  await user.save();
  res.send("Password has been reset successfully");
}