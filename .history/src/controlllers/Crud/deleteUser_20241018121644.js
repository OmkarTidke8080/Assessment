import User from "../../models/UserModel.js";


// 
export const deleteUser = async (req,res) =>{
  const userEmail = req.params.email;

    try {
         const user = await User.findOne({ Email: userEmail });

         if (!user) {
           console.log("User not found");
           return res.status(404).json({ msg: "User not found" });
         }

         const deletedUser = await User.findOneAndDelete(
           { Email: userEmail },
         );

         return res.status(200).json({
           success: true,
           message: "User deleted successfully",
           userDetails: deletedUser,
         });
    } catch (error) {
        console.error("Error: ", error);
        return res.status(500).json({ error: error.message });
    }
}

export default deleteUser;