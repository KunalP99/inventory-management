const express = require("express");

const router = express.Router();

// GET all games
router.get("/", (req, res) => {
  res.json({ message: "GET all games" });
});

// GET a single game
router.get("/:id", (req, res) => {
  res.json({ message: "GET a single game" });
});

// POST a new game
router.post("/", (req, res) => {
  res.json({ message: "POST a new game" });
});

// DELETE a game
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a game" });
});

// UPDATE a game
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE a game" });
});

module.exports = router;
