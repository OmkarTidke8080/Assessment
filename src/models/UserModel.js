import mongoose from "mongoose";

const DocumentSchema = new mongoose.Schema({
  type: { type: String, required: true }, // Type of document (AadhaarCard, PanCard, etc.)
  url: { type: String, required: true }, // URL of the uploaded document
  name: { type: String, required: true }, // Original name of the document
});

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
  documents: [DocumentSchema], // Use the DocumentSchema for documents
  role: {
    type: String,
    enum: ["user", "manager"],
    required: true,
    default: "user",
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
