const express = require("express");
const userControllers = require("../../controllers/user.controller");
const router = express.Router();

router
    .route('/')
    .get(userControllers.getUserData)
    .post(userControllers.saveUserData)

router
    .route(`/:id`)
    .get(userControllers.saveAUserData)

module.exports = router;