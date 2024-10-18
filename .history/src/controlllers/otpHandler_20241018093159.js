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

export const verifyOtp = async(req,res) =>{

}

export const resetPassword = async (req,res) =>{

}