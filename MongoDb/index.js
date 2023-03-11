const express = require('express');
const cors = require('cors');
const userApi = require('./routes/v1/user.route');
const app = express();
const port = 4312;

//middleware 
app.use(express.json());
app.use(cors());

app.use('/api/v1/users', userApi)

app.listen(port, console.log(`i am running port - ${port}`)
)