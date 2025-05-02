const express = require("express");
const Comment = require("../models/Comment");
const Post = require("../models/Post");

const router = express.Router();

router.post("/", async (req, res) => {
  const { postId, author, text } = req.body;
  const comment = new Comment({ postId, author, text });
  await comment.save();

  await Post.findByIdAndUpdate(postId, { $push: { comments: comment._id } });

  res.status(201).json(comment);
});

router.get("/:postId", async (req, res) => {
  const { postId } = req.params;
  const comments = await Comment.find({ postId });
  res.json(comments);
});

module.exports = router;
