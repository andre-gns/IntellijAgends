const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("API IntellijAgends funcionando!");
});

module.exports = router;
