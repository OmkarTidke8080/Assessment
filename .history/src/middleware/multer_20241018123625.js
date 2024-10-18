// import { CloudinaryStorage } from "multer-storage-cloudinary";
// import cloudinary from "cloudinary";
// import multer from "multer";
// import dotenv from "dotenv";
// dotenv.config();

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_KEY,
//   api_secret: process.env.CLOUDINARY_SECRET,
// });

// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "Assessment",
//     allowed_formats: ["jpeg", "png", "jpg", "pdf"],
//   },
// });

// // Create the multer instance with the Cloudinary storage
// const upload = multer({ storage });

// export { upload };

// import multer from "multer";
// import path, { dirname } from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// const parentDir = path.join(__dirname, "..", "public"); 

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, parentDir);
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });
// export { upload };



import multer from "multer";

// provides utilities for working with file
import path, { dirname } from "path";

// converts url module to local file path
import { fileURLToPath } from "url";

//
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// set directory where to save the file
const parentDir = path.join(__dirname, "..", "public");


// cofigure storage destionation for upload file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, parentDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    "image/jpg",
    "image/jpeg",
    "image/png",
    "application/pdf",
  ];
  if (!allowedTypes.includes(file.mimetype)) {
    return cb(new Error("Only .png, .jpg, and .pdf files are allowed!"), false);
  }
  cb(null, true);
};

const upload = multer({ storage, fileFilter });

export { upload };
