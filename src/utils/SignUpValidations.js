import { body, validationResult } from "express-validator";

const validateUser = [
  body("FirstName")
    .isString()
    .trim()
    .withMessage("First Name should contain only characters")
    .notEmpty()
    .withMessage("First Name is required")
    .isLength({ max: 30 })
    .withMessage("First Name length should be less than 30 characters")
    .matches(/^[A-Za-z\s]*$/)
    .withMessage("First Name should not contain special characters"),

  body("LastName")
    .isString()
    .trim()
    .withMessage("Last Name should contain only characters")
    .notEmpty()
    .withMessage("Last Name is required")
    .isLength({ max: 30 })
    .withMessage("Last Name length should be less than 30 characters")
    .matches(/^[A-Za-z\s]*$/)
    .withMessage("Last Name should not contain special characters"),

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
    .withMessage("User Name is required")
    .isLength({ max: 30 })
    .withMessage("User Name length should be less than 30 characters")
    .matches(/^[A-Za-z0-9_]*$/) // Allow alphanumeric and underscores
    .withMessage("User Name should not contain special characters"),

  body("Password")
    .isString()
    .trim()
    .withMessage("Password should be a string")
    .notEmpty()
    .withMessage("Password cannot be empty")
    .isLength({ min: 8, max: 16 })
    .withMessage(
      "Password should contain at least 8 and a maximum of 16 characters"
    ),
];

export default validateUser;
