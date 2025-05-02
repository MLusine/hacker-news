const express = require("express");
const Post = require("../models/Post");
const router = express.Router();

router.get("/", async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

router.post("/", async (req, res) => {
  const { title, url, author } = req.body;
  const post = new Post({ title, url, author });
  await post.save();
  res.status(201).json(post);
});

module.exports = router;
