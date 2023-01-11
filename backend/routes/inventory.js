const express = require("express");
const Inventory = require("../models/inventoryModel");

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
router.post("/", async (req, res) => {
  const { title, copies, releaseDate } = req.body;

  try {
    // Creates a new document with 3 properties
    const inventory = await Inventory.create({ title, copies, releaseDate });
    // Sends the inventory document in json format and a status of 200 to say everything is ok
    res.status(200).json(inventory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }

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
