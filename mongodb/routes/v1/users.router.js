const express = require('express');
const userRoute = require('../../controller/user.controller');

const Router = express();
Router.route('/')
    .get(userRoute.getUsers)



module.exports = Router;