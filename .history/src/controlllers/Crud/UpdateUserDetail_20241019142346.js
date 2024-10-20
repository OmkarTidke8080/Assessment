import User from "../../models/UserModel.js";
import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";
// import { dirname } from "path";


export const updateUser = async (req, res) => {
  const userEmail = req.params.email;

  try {
    const user = await User.findOne({ Email: userEmail });

    if (!user) {
      console.log("User not found");
      return res.status(404).json({ msg: "User not found" });
    }

    const updatedFields = {};
    if (req.body.FirstName) updatedFields.FirstName = req.body.FirstName;
    if (req.body.LastName) updatedFields.LastName = req.body.LastName;
    if (req.body.UserName) updatedFields.UserName = req.body.UserName;

    // Handle file uploads
    const aadhaarFile = req.files["AadhaarCard"]
      ? req.files["AadhaarCard"][0]
      : null;
    const panFile = req.files["PanCard"] ? req.files["PanCard"][0] : null;

    // Handle Aadhaar card upload
    if (aadhaarFile) {
      const oldAadhaarPath = user.documents.AadhaarCard;
      // Only delete if the file is different
      if (oldAadhaarPath && oldAadhaarPath !== aadhaarFile.path) {
        fs.unlinkSync(oldAadhaarPath); // Delete old file
      }
      // Save new Aadhaar file path
      updatedFields.documents = {
        ...updatedFields.documents,
        AadhaarCard: aadhaarFile.path,
      };
    }
 
    // Handle PAN card upload
    if (panFile) {
      const oldPanPath = user.documents.PanCard;
      // Only delete if the incoming file is different
      if (oldPanPath && oldPanPath !== panFile.path) {
        fs.unlinkSync(oldPanPath); // Delete old file if it's different
      }
      // Save new PAN file path
      updatedFields.documents = {
        ...updatedFields.documents,
        PanCard: panFile.path,
      };
    }

    // Update the user document only if there are new fields or document updates
    if (Object.keys(updatedFields).length > 0) {
      const updatedUser = await User.findOneAndUpdate(
        { Email: userEmail },
        { $set: updatedFields },
        { new: true }
      );

      return res.status(200).json({
        success: true,
        message: "User updated successfully",
        userDetails: updatedUser,
      });
    } else {
      return res.status(400).json({ msg: "No fields to update." });
    }
  } catch (error) {
    console.error("Error: ", error);
    return res.status(500).json({ error: error.message });
  }
};


export default updateUser;
