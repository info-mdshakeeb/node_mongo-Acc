const express = require('express');
const usersRoute = require('../../controller/user.controller');
const router = express.Router();
// Importing the controller

router.route('/random')
    .get(usersRoute.getRandomUser)

router.route('/all')
    .get(usersRoute.getAllUsers)
module.exports = router;