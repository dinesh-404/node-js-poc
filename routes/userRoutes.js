const express = require("express");
const { createUser, loginUser, currentUser } = require("../controller/userController");
const validateToken = require("../middleware/tokenValidator");

const router = express.Router();

router.post("/register", createUser)

router.post("/login", loginUser)

router.post("/current", currentUser)

module.exports = router