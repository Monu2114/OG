import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  flair: { type: String },
  description: { type: String, required: true },
  rating: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
});

export default mongoose.models.Comment ||
  mongoose.model("Comment", commentSchema);
