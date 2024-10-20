import User from "../../models/UserModel.js";

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
    if (req.body.Email) updatedFields.Email = req.body.Email;



    //  const aadhaarFile = req.files["AadhaarCard"]
    //    ? req.files["AadhaarCard"][0]
    //    : null;
    //  const panFile = req.files["PanCard"] ? req.files["PanCard"][0] : null;

    //  // Create a documents object to store file paths
    //  userData.documents = {};

    //  if (aadhaarFile) {
    //    userData.documents.AadhaarCard = aadhaarFile.path; // Save Aadhaar file path
    //  }
    //  if (panFile) {
    //    userData.documents.PanCard = panFile.path; // Save PAN file path
    //  }

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
