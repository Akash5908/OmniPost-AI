import mongoose from "mongoose";

export const connectDB = async () => {
  const url = process.env.MONGODB_URI!;
  try {
    await mongoose.connect(url);
    console.log("Database connection established ✅");
  } catch (error) {
    console.log("Database connection failed ❌");
  }
};
