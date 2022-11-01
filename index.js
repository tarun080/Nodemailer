require("dotenv").config();
const express = require("express");
const app = express();
const db = require('./db/db')
const userRoute = require('./routes/routes')
app.use(express.json());

app.use('/api/v1', userRoute)

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));