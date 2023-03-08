const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const userApi = require('./Routes/v1/users.routes');

// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use('/api/v1/users', userApi);


//for all other route
app.all("*", (req, res) => { res.send("no route found") })
// Server
app.listen(port, () => console.log(`Server running on port ${port}`));
// Error
process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
        process.exit(1);
    })
})