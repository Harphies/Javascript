const router = require("express").Router();
const User = require("../model/User");

// Register new users
router.get("/register", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const createdUser = await user.save();
    res.json(createdUser);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

module.exports = router;
