const express = require("express");
const jwt = require("jsonwebtoken");
const authenticateToken = require("../middleware/authenticateToken");

const router = express.Router();
const SECRET_KEY = process.env.JWT_SECRET;

// Dummy user database
const users = [
  { id: 1, username: "john", password: "123456" },
  { id: 2, username: "alice", password: "abcdef" },
];

// Login route
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: "1h" });
  res.json({ token });
});

// Protected route
router.get("/dashboard", authenticateToken, (req, res) => {
  res.json({ message: "Welcome to your dashboard!", userId: req.user.userId });
});

module.exports = router;
