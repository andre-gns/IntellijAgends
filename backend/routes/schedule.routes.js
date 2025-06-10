const express = require("express");
const router = express.Router();
const scheduleController = require("../controllers/scheduleController");
const userController = require("../controllers/userController");

router.get("/", scheduleController.getSchedules);

module.exports = router;
