

import multer from "multer";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const parentDir = path.join(__dirname, "..", "public");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, parentDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).fields([
  { name: "AadhaarCard", maxCount: 1 },
  { name: "PanCard", maxCount: 1 },
]);

const uploadMiddleware = (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      return res
        .status(400)
        .json({ msg: "Error uploading files", error: err.message });
    }
    next(); // Call the next middleware if successful
  });
};

export { uploadMiddleware };


// import multer from "multer";

// // path module provides utilities for working with file
// // dirname used to get directory name of path
// import path, { dirname } from "path";

// // used to convert file url to locla path
// import { fileURLToPath } from "url";

// // gets current files url and convert to local file path
// const __filename = fileURLToPath(import.meta.url);

// //used to get directory name of current file
// const __dirname = dirname(__filename);

// // construct path to public folder
// const parentDir = path.join(__dirname, "..", "public");

// // configures storage for multer to disk storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, parentDir);
//   },

//   // function ro set name of uploaded file
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const allowedTypes = [
//     "image/jpg",
//     "image/jpeg",
//     "image/png",
//     "application/pdf",
//   ];

//   // : Checks if the uploaded file's MIME type is not in the allowed types.
//   if (!allowedTypes.includes(file.mimetype)) {
//     return cb(new Error("Only .png, .jpg, and .pdf files are allowed!"), false);
//   }
//   // If the MIME type is allowed, it calls the callback with null (no error) and true to accept the file
//   cb(null, true);
// };

// const upload = multer({ storage, fileFilter });

// export { upload };
