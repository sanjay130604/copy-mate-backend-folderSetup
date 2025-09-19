const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected route example
router.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "Welcome to your profile!", user: req.user });
});

module.exports = router;
