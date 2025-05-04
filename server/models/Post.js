const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: String,
  url: String,
  author: String,
  points: { type: Number, default: 0 },
  timeAgo: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
}, { timestamps: true });

module.exports = mongoose.model("Post", PostSchema);
