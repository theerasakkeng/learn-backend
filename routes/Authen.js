const express = require("express");
const router = express.Router();

router.get("/Register", async (req, res) => {
  res.json("register");
});

router.get("/Login", async (req, res) => {
  res.json("login");
});

module.exports = router;
