import { body, validationResult } from "express-validator";

const validateSignIn = [

  body("Email")
    .isEmail()
    .withMessage("Email is not valid")
    .notEmpty()
    .withMessage("Email is required"),

  body("Password")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Password should be in String ")
    .notEmpty("Password cannot be empty")
    .isLength({ min: 8, max: 16 })
    .withMessage(
      "Passsword should contain atleast 8 and maximum 16 characters"
    ),
];

export default validateSignIn;