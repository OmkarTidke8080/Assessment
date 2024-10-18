import User from "../models/UserModel.js";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
const saltRounds = 10;
import { generateAccessToken } from "../middleware/auth.js";

export const SignUp = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  console.log(erro)

  const userData = req.body;

  
  try {
    userData.Password = await bcrypt.hash(userData.Password, saltRounds);

    const existingUser = await User.findOne({ Email: userData.Email });
    if (existingUser) {
      return res.status(400).json({
        msg: "User with this email already exists",
        existingUser,
      });
    }

    const user = new User(userData);
    const tokens = await generateAccessToken(req.body.Email);

    const accessToken = tokens.accessToken;
    const refreshToken = tokens.refreshToken;

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000,
      secure: true,
      sameSite: "Strict",
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      secure: true,
      sameSite: "Strict",
    });

    await user.save();

    return res.status(200).json({
      msg: "User sign-up successful",
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: "Internal server error",
      error: error.message,
    });
  }
};

export default SignUp;
