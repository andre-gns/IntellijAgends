const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/serviceController");

router.get("/", serviceController.getServices);
router.post("/", serviceController.createService);
// router.get("/", serviceController.listServices);

module.exports = router;
