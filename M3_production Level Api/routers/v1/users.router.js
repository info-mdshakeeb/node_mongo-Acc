const express = require("express");
const router = express.Router();

router
    .route('/')

    .get((req, res) => {
        res.send("i am user");
    })
    .post((req, res) => {
        const { id } = req.params
        res.send(`${id} - is here`)
    })

module.exports = router;