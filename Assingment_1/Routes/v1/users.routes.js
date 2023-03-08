const express = require('express');
const usersRoute = require('../../controller/user.controller');
const router = express.Router();
// Importing the controller

router.route('/random')
    .get(usersRoute.getRandomUser)

router.route('/all')
    .get(usersRoute.getAllUsers)

router.route("/save")
    .post(usersRoute.saveUser)

router.route('/update/:id')
    .patch(usersRoute.updateUser)

router.route('/bulk-update')
    .patch(usersRoute.multipleUserUpdate)

router.route('/delete/:id')
    .delete(usersRoute.deleteUser)

module.exports = router;