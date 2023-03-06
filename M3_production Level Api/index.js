const express = require('express')
const app = express()
const cors = require('cors')
const port = 3100;


//middleware
app.use(express.json())
app.use(cors())

