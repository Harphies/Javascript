const express = require("express");
const router = express.Router();
const Posts = require("./model/Model");

router.get("/", async (req, res) => {
  try {
    const newPost = await Posts.find();
    res.json(newPost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/post", async (req, res) => {
  const newPost = new Posts({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savePost = await newPost.save();
    res.json(savePost);
  } catch (err) {
    res.json({ message: err });
  }
});

// get a specific item
router.get("/:postId", async (req, res) => {
  try {
    const post = await Posts.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// delete
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Posts.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Posts.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
