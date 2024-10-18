import mongoose from "mongoose";
import { configDotenv } from "dotenv";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `mongodb://localhost:27017/Assessment`
    );
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error while connecting to the database:", error);
    process.exit(1); 
  }
};

export default connectDB;
