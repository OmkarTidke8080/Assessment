import express from "express";
import SignUp from "../controlllers/SignUp.js";
import SignIn from "../controlllers/SignIn.js";
import { isAuthenticated, isManager } from "../middleware/auth.js";
import { upload } from "../middleware/multer.js";
import logout from "../controlllers/logout.js";
import { refresh } from "../controlllers/refreshToken.js";
import getUserDetails from "../controlllers/Crud/getuser.js";
import updateUser from "../controlllers/Crud/UpdateUserDetail.js";
import deleteUser from "../controlllers/Crud/deleteUser.js";
import fileUpload from "../controlllers/uploadFiles.js";
import getAllUsers from "../controlllers/Crud/getAllUsers.js";
import validateUser from "../utils/SignUpValidations.js";
import validateSignIn from "../utils/SignInValidations.js"
// import { storage } from "../storage/storage.js";

const router = express.Router();
// const upload = multer({ storage });

// sign up user
router.post("/signUp",validateUser, SignUp);

// upload documents
router.post(
  "/uploadDocuments/:email",
  isAuthenticated,
  upload.fields([{ name: "AadhaarCard" }, { name: "PanCard" }]),
  fileUpload
);

// Sign in route
router.post("/signIn",validateSignIn, SignIn);

// used to check is user is authenticated
router.get("/protected", isAuthenticated, (req, res) => {
  res.json({ success: true, msg: "Welcome user!!", Email: req.Email });
});


// used for fetching token if access token is expired
router.post("/refresh", refresh);


// sign out route
router.post("/signOut", isAuthenticated, logout);

/////////////// Crud Operations Routes /////////////////////////////
router.get("/getAllUsers", isAuthenticated, isManager, getAllUsers);
router.get("/userDetails/:email", isAuthenticated, getUserDetails);
router.put("/userUpdate/:email", isAuthenticated, updateUser);
router.delete("/deleteUser/:email", isAuthenticated, isManager, deleteUser);

export default router;
