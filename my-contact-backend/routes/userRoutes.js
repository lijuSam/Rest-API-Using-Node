const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  res.json({ message: "Register the user" });
});

router.post("/login", (req, res) => {
  res.json({ message: "logine In User" });
});

router.get("/currentuser", (req, res) => {
  res.json({ message: "Current User Details" });
});

module.exports = router;
