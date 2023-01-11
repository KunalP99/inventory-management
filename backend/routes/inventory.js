const express = require("express");
const {
  getInventory,
  getGame,
  createGame,
} = require("../controllers/inventoryController");
const router = express.Router();

// GET all games
router.get("/", getInventory);

// GET a single game
router.get("/:id", getGame);

// POST a new game
router.post("/", createGame);

// DELETE a game
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a game" });
});

// UPDATE a game
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE a game" });
});

module.exports = router;
