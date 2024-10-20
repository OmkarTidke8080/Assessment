
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



