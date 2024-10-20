import { body, validationResult } from "express-validator";

const validateUser = [
 

  body("Email")
    .isEmail()
    .withMessage("Email is not valid")
    .notEmpty()
    .withMessage("Email is required"),

  body("UserName")
    .isString()
    .trim()
    .withMessage("User Name should contain only characters")
    .notEmpty()
    .withMessage("User Name is reuired")
    .isLength({ max: 30 })
    .withMessage("User Name length should be less than 30 characters")
    .matches(/^[A-Za-z\s]*$/)
    .withMessage("User Name should not contain special characters"),

  body("Password")
    .isString()
    .trim()
    .withMessage("Password should be in String ")
    .notEmpty("Password cannot be empty")
    .isLength({ min: 8, max: 16 })
    .withMessage(
      "Passsword should contain atleast 8 and maximum 16 characters"
    ),
];

export default validateUser;
