import User from "../../models/UserModel.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
      // Delete existing Aadhaar file if it exists
      if (oldAadhaarPath) {
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
      // Delete existing PAN file if it exists
      if (oldPanPath) {
        fs.unlinkSync(oldPanPath); // Delete old file
      }
      // Save new PAN file path
      updatedFields.documents = {
        ...updatedFields.documents,
        PanCard: panFile.path,
      };
    }

    // // If no new files were provided, retain existing document paths
    // if (!aadhaarFile && !panFile) {
    //   updatedFields.documents = user.documents; // Keep existing documents
    // }

    // Update the user document with the new fields
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
  } catch (error) {
    console.error("Error: ", error);
    return res.status(500).json({ error: error.message });
  }
};

export default updateUser;
