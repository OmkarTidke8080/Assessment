import { body, validationResult } from "express-validator";

const validateRequestOTP = [
  body("Email")
    .isEmail()
    .withMessage("Email is not valid")
    .notEmpty()
    .withMessage("Email is required"),

 
];

export default validateRequestOTP;
