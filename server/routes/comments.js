const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");

router.post("/", async (req, res) => {
  const { text,author, timestamp } = req.body;
  if (!text || !author || !timestamp) return res.status(400).json({ error: "Comment text is required" });

  try {
    const newComment = new Comment({ text, author,
      timestamp: new Date(timestamp),});

    await newComment.save();

    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ error: "Failed to save comment" });
  }
});

router.get("/", async (req, res) => {
  const comments = await Comment.find().sort({ createdAt: -1 });
  res.json(comments);
});

module.exports = router;
