require("dotenv").config();

const express = require("express");
const app = express();

// Middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the app" });
});

// Runs server on port 3000 from .env file so the PORT number will remain private
app.listen(process.env.PORT, () => console.log("Listening on port 3000"));
