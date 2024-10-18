// import User from "../models/UserModel.js";
// import cloudinary from "cloudinary"; // Ensure cloudinary is imported

// // File upload handler
// export const fileUpload = async (req, res) => {
//   const userEmail = req.params.email;
//   console.log("User Email:", userEmail);

//   try {
//     const user = await User.findOne({ Email: userEmail });
//     if (!user) {
//       return res.status(404).json({ msg: "User not found" });
//     }

//     const fileUploads = [];

//     if (req.files.AadhaarCard) {
//       const aadhaarResult = await cloudinary.uploader.upload(
//         req.files.AadhaarCard[0].path,
//         { folder: "Documents" }
//       );
//       fileUploads.push({ type: "AadhaarCard", url: aadhaarResult.secure_url });
//       console.log("Aadhaar upload result:", aadhaarResult);
//     }

//     // Upload PanCard if present
//     if (req.files.PanCard) {
//       const panResult = await cloudinary.uploader.upload(
//         req.files.PanCard[0].path,
//         { folder: "Documents" }
//       );
//       fileUploads.push({ type: "PanCard", url: panResult.secure_url });
//       console.log("PanCard upload result:", panResult);
//     }

//     // Combine new uploads with existing documents
//     const updatedDocuments = [...user.documents, ...fileUploads];

//     // Update user with the new document URLs
//     const updatedUser = await User.findOneAndUpdate(
//       { Email: userEmail },
//       { $set: { documents: updatedDocuments } },
//       { new: true }
//     );

//     res.status(200).json({
//       msg: "Documents uploaded successfully",
//       updatedUser,
//     });
//   } catch (error) {
//     console.error("Error in fileUpload:", error);
//     res.status(400).json({
//       msg: error.message,
//     });
//   }
// };

// export default fileUpload;
import User from "../models/UserModel.js";

export const fileUpload = async (req,res) =>{

  // accepts email of user whose documents to be uploaded
    const userEmail = req.params.email;
    try {
      const user = await User.findOne({ Email: userEmail });
      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }
     res.status(200).json({
      msg: "Documents uploaded successfully",
    });
  } catch (error) {
    console.error("Error in fileUpload:", error);
    res.status(400).json({
      msg: error.message,
    });
  }
}


export default fileUpload;