import express from "express";
import connectDB from "./db/db.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/UserRouter.js";
import { isAuthenticated } from "./middleware/auth.js";
import dotenv from "dotenv";
import { optRequest, resetPassword, verifyOtp } from "./controlllers/otpHandler.js";

dotenv.config();

const app = express();
app.use(express.json());


app.use(cookieParser());

////////// base route //////////
app.use("/api/user", userRoute);



// database connection and 
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is listening at PORT: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

  ////////////////// Reset password handling routes ////////////////////

app.post("/request-otp", isAuthenticated, optRequest);

app.post("/verify-otp", isAuthenticated, verifyOtp);

app.post("/reset-password", isAuthenticated,resetPassword);
