const express = require("express");
const userRoute = require("../../controller/user.controller");
const router = express();


router.route('/')
    .get(userRoute.getAllUsers);


module.exports = router;


