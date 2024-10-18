import User from "../../models/UserModel.js";


// 
export const getUserDetails = async (req, res) => {
  try {
    const { email } = req.params;

    const userDetails = await User.findOne({ Email: email });

    if (!userDetails) {
      return res.status(404).json({
        msg: "User not found",
      });
    }

    return res.status(200).json({
      msg: "User details fetched successfully",
      userDetails,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Server error",
      error: error.message,
    });
  }
};

export default getUserDetails;
