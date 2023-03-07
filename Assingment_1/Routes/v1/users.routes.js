const express = require('express');
const usersRoute = require('../../controller/user.controller');
const router = express.Router();
// Importing the controller

router.route('/')
    .get(usersRoute.getRandomUser)
    .post()
    .put()
    .delete()

module.exports = router;