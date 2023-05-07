const express = require('express')
var cors = require('cors')
require('dotenv').config()

// import Connection from './database/db.js'
const Connection = require('./database/db')
  
const app = express()
const port = 5000


app.use(cors())
app.use(express.json())


// dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD); 

// Available routes
app.use('/api/auth', require('./Routes/Auth_Route'))
app.use('/api/foods', require('./Routes/Food_Route'))


app.listen(port, () => {
    console.log(`Server is running on the port ${port}`)
})