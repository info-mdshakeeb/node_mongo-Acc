const express = require("express");
const userControllers = require("../../controllers/user.controller");
const router = express.Router();

router
    .route('/')
    .get(userControllers.getUserData)
    .post(userControllers.saveUserData)

module.exports = router;