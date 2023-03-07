const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const userApi = require('./Routes/v1/users.routes');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/users', userApi)

// Server

app.listen(port, () => console.log(`Server running on port ${port}`));