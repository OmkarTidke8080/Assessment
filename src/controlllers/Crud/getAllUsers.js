import User from "../../models/UserModel.js";



// get all users present in the database ( manager access only)
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users

    if (!users || users.length === 0) {
      return res.status(404).json({
        msg: "No users found",
      });
    }

    return res.status(200).json({
      msg: "Users retrieved successfully",
      users, 
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error retrieving users",
      error: error.message,
    });
  }
};

export default getAllUsers;
