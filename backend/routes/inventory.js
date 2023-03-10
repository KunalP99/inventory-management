const express = require("express");

const {
  getInventory,
  getGame,
  createGame,
  deleteGame,
  updateGame,
} = require("../controllers/inventoryController");
const router = express.Router();

// GET all games
router.get("/", getInventory);

// GET a single game
router.get("/:id", getGame);

// POST a new game
router.post("/", createGame);

// DELETE a game
router.delete("/:id", deleteGame);

// UPDATE a game
router.patch("/:id", updateGame);

module.exports = router;
