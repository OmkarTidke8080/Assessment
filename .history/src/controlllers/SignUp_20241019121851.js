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

  const userData = req.body;
  console.log()

  try {
    console.log(req.files); // Log files to see if they are present

    // Handle uploaded files
    const aadhaarFile = req.files["AadhaarCard"]
      ? req.files["AadhaarCard"][0]
      : null;
    const panFile = req.files["PanCard"] ? req.files["PanCard"][0] : null;

    // Create a documents object to store file paths
    userData.documents = {};

    if (aadhaarFile) {
      userData.documents.AadhaarCard = aadhaarFile.path; // Save Aadhaar file path
    }
    if (panFile) {
      userData.documents.PanCard = panFile.path; // Save PAN file path
    }

    userData.Password = await bcrypt.hash(userData.Password, saltRounds);

    const existingUser = await User.findOne({ Email: userData.Email });
    if (existingUser) {
      return res.status(400).json({
        msg: "User with this email already exists",
      });
    }

    const user = new User(userData);
    const tokens = await generateAccessToken(req.body.Email);

    res.cookie("accessToken", tokens.accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000,
      secure: true,
      sameSite: "Strict",
    });
    res.cookie("refreshToken", tokens.refreshToken, {
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


// import User from "../models/UserModel.js";
// import { validationResult } from "express-validator";
// import bcrypt from "bcrypt";
// const saltRounds = 10;
// import { generateAccessToken } from "../middleware/auth.js";

// export const SignUp = async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   const userData = req.body;

//   try {
//     userData.Password = await bcrypt.hash(userData.Password, saltRounds);

//     const existingUser = await User.findOne({ Email: userData.Email });
//     if (existingUser) {
//       return res.status(400).json({
//         msg: "User with this email already exists",
//       });
//     }

//     const user = new User(userData);
//     const tokens = await generateAccessToken(req.body.Email);

//     res.cookie("accessToken", tokens.accessToken, {
//       httpOnly: true,
//       maxAge: 60 * 60 * 1000,
//       secure: true,
//       sameSite: "Strict",
//     });
//     res.cookie("refreshToken", tokens.refreshToken, {
//       httpOnly: true,
//       maxAge: 24 * 60 * 60 * 1000,
//       secure: true,
//       sameSite: "Strict",
//     });

//     await user.save();

//     return res.status(200).json({
//       msg: "User sign-up successful",
//       user,
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       msg: "Internal server error",
//       error: error.message,
//     });
//   }
// };

// export default SignUp;
