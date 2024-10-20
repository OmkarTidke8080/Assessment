import express from "express";
import SignUp from "../controlllers/SignUp.js";
import SignIn from "../controlllers/SignIn.js";
import { isAuthenticated, isManager } from "../middleware/auth.js";
import { uploadMiddleware } from "../middleware/multer.js";
import logout from "../controlllers/logout.js";
import { refresh } from "../controlllers/refreshToken.js";
import getUserDetails from "../controlllers/Crud/getuser.js";
import updateUser from "../controlllers/Crud/UpdateUserDetail.js";
import deleteUser from "../controlllers/Crud/deleteUser.js";
// import fileUpload from "../controlllers/uploadFiles.js";
import getAllUsers from "../controlllers/Crud/getAllUsers.js";
import validateUser from "../utils/SignUpValidations.js";
import validateSignIn from "../utils/SignInValidations.js";
// import { storage } from "../storage/storage.js";

const router = express.Router();
// const upload = multer({ storage });

router.post("/signUp", uploadMiddleware,validateUser, SignUp);

// router.post(   
//   "/uploadDocuments/:email",
//   isAuthenticated,
//   upload.fields([{ name: "AadhaarCard" }, { name: "PanCard" }]),
//   fileUpload
// );

router.post("/signIn", validateSignIn, SignIn);
router.get("/protected", isAuthenticated, (req, res) => {
  res.json({ success: true, msg: "Welcome user!!", Email: req.Email });
});

router.post("/refresh", refresh);

router.post("/signOut", isAuthenticated, logout);

/////////////// Crud Operations Routes /////////////////////////////
router.get("/getAllUsers", isAuthenticated, isManager, getAllUsers);
router.get("/userDetails/:email", isAuthenticated, isManager, getUserDetails);
router.put("/userUpdate/:email", isAuthenticated, updateUser);
router.delete("/deleteUser/:email", isAuthenticated, isManager, deleteUser);

export default router;
