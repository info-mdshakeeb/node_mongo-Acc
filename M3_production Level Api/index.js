const express = require('express')
const cors = require('cors');
const userRouter = require('./routers/v1/users.router');
const viewCount = require('./middleware/viewCount');
const rateLimit = require('express-rate-limit');
const limiter = require('./middleware/limiter');
const port = 3100;
const app = express()

//middleware
app.use(express.json())
app.use(cors())



app.use(limiter)
app.use(viewCount)

app.use('/api/v1/user', userRouter)

//for all other route
app.all("*", (req, res) => {
    res.send("no route found")
})
app.listen(port, console.log(`connect port - ${port}`))