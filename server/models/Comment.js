const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  author: {type: String},
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  timestamp: Date,

});

module.exports = mongoose.model("Comment", CommentSchema);
