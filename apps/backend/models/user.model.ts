import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
    unique: true,
  },
  linkedinAccessToken: {
    type: String,
    unique: true,
  },
  xAccessToken: {
    type: String,
    unique: true,
  },
  linkedinProfileId: {
    type: String,
    unique: true,
  },
  xUserId: {
    type: String,
    unique: true,
  },
});

export const UserModel = mongoose.model("User", userSchema);
