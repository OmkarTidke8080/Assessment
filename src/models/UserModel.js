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
  role: {
    type: String,
    enum: ["user", "manager"],
    required: true,
    default: "user",
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
