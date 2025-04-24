const express = require("express");
const router = express.Router();

const {
  showNewForm,
  createEst,
} = require("../controllers/establishmentController");

router.get("/new", showNewForm);
router.post("/", createEst);

module.exports = router;
