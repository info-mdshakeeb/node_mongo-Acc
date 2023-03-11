const express = require("express");
const cors = require("cors");
const userApi = require("./routes/v1/users.router.js");
const { connectToServer } = require("./utilities/mongodb.js");
require("dotenv").config()
const app = express();
const Port = process.env.PORT || 3212312

//middleware :
app.use(express.json());
app.use(cors());

//database Connection :
connectToServer((err) => {
    if (!err) {
        app.listen(Port, () => {
            console.log(`Example app listening on port ${Port}`);
        });
    } else {
        console.log(err);
    }
});
//define routes :

app.use('/api/v1/users', userApi)

process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
        process.exit(1);
    });
});
