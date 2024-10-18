import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  UserName: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  documents: [
    {
      AadhaarCard: { type: String },
      url: { type: String },
    },
    {
      PanCard: { type: String },
      url: { type: String },
    },
  ],
  ole: {
    type: String,
    enum: ["user", "manager"], // Restrict role to 'user' or 'manager'
    required: true,
    default: "user", // Default role is 'user'
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
