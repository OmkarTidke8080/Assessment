import User from "../models/UserModel.js";
import cloudinary from "cloudinary"; // Ensure cloudinary is imported
import { configDotenv } from "dotenv";

configDotenv();


cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

// File upload handler
export const fileUpload = async (req, res) => {
  const userEmail = req.params.email;

  try {
    const user = await User.findOne({ Email: userEmail });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const fileUploads = [];

    // Function to handle file uploads
    const handleFileUpload = async (file, type) => {
      const uploadResult = await cloudinary.uploader.upload(file.path, {
        folder: "Documents",
        public_id: `${userEmail}_${type}`, // Ensures the file name is unique
      });
      return { type, url: uploadResult.secure_url, name: file.originalname }; 
    };

    // Check and upload AadhaarCard
    if (req.files.AadhaarCard) {
      const aadhaarUpload = await handleFileUpload(
        req.files.AadhaarCard[0],
        "AadhaarCard"
      );
      fileUploads.push(aadhaarUpload);
    }

    // Check and upload PanCard
    if (req.files.PanCard) {
      const panUpload = await handleFileUpload(req.files.PanCard[0], "PanCard");
      fileUploads.push(panUpload);
    }

    const existingDocumentsMap = {};
    user.documents.forEach((doc) => {
      existingDocumentsMap[doc.type] = doc; 
    });

    fileUploads.forEach((upload) => {
      existingDocumentsMap[upload.type] = {
        url: upload.url,
        name: upload.name,
      }; 
    });

    const updatedDocuments = Object.keys(existingDocumentsMap).map((type) => ({
      type,
      url: existingDocumentsMap[type].url,
      name: existingDocumentsMap[type].name,
    }));

    const updatedUser = await User.findOneAndUpdate(
      { Email: userEmail },
      { $set: { documents: updatedDocuments } },
      { new: true }
    );

    res.status(200).json({
      msg: "Documents uploaded successfully",
      updatedUser,
    });
  } catch (error) {
    console.error("Error in fileUpload:", error);
    res.status(400).json({
      msg: error.message,
    });
  }
};



export default fileUpload;



// import User from "../models/UserModel.js";

// export const fileUpload = async (req,res) =>{

//   // accepts email of user whose documents to be uploaded
//     const userEmail = req.params.email;
//     try {
//       const user = await User.findOne({ Email: userEmail });
//       if (!user) {
//         return res.status(404).json({ msg: "User not found" });
//       }
//      res.status(200).json({
//       msg: "Documents uploaded successfully",
//     });
//   } catch (error) {
//     console.error("Error in fileUpload:", error);
//     res.status(400).json({
//       msg: error.message,
//     });
//   }
// }


// export default fileUpload;