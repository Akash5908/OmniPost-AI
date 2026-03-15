import mongoose, { Schema } from "mongoose";

export const Platforms = {
  Linkedin: "linkedin",
  X: "x",
};

export const Status = {
  Linkedin: "linkedin",
  X: "x",
};

const postSchema = new Schema({
  userId: {
    type: String,
    ref: "User",
    required: true,
  },
  baseContent: {
    type: String,
    required: true,
  },
  platforms: [
    {
      platform: Object.values(Platforms),
      status: Object.values(Status),
      transformedContent: { type: String, required: true },
      platformPostId: { type: String },
      error: { type: String },
    },
  ],
  scheduledAt: { type: Date, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

export const PostModel = mongoose.model("Post", postSchema);
