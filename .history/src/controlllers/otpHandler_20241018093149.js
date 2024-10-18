import User from "../models/UserModel.js";


let otpStore = {};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "omkartidke2016@gmail.com",
    pass: "wkbg zuzx xfwa dmil",
  },
});
export const optRequest = async(req,res) =>{

}

export const verifyOtp = async(req,res) =>{

}

export const resetPassword = async (req,res) =>{

}