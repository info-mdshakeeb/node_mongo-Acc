const express = require('express')
const cors = require('cors');
const userRouter = require('./routers/v1/users.router');
const port = 3100;
const app = express()

//middleware
app.use(express.json())
app.use(cors())

app.use('/api/v1/user', userRouter)

//for all other route
app.all("*", (req, res) => {
    res.send("no route found")
})
app.listen(port, console.log(`connect port - ${port}`))