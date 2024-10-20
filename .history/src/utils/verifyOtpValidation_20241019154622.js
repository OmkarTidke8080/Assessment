import { body, validationResult } from "express-validator";

const validateVerifyOtp = [
  body("Email")
    .isEmail()
    .withMessage("Email is not valid")
    .notEmpty()
    .withMessage("Email is required"),

  body("Otp")
    .isString()
    .trim()
    .withMessage("OTP should be in String ")
    .notEmpty()
    .withMessage("OTP cannot be empty")
];

export default validateVerifyOtp;
