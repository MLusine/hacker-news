const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });

    const formatted = posts.map(post => ({
      ...post._doc,
      timeAgo: formatTimeAgo(post.createdAt),
    }));

    res.json(formatted);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

function formatTimeAgo(date) {
  const diff = Math.floor((Date.now() - new Date(date)) / (1000 * 60));
  if (diff < 60) return `${diff} minutes ago`;
  if (diff < 1440) return `${Math.floor(diff / 60)} hours ago`;
  return `${Math.floor(diff / 1440)} days ago`;
}

module.exports = router;
