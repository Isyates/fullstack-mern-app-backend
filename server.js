// Dependencies
require('dotenv').config()
const PORT = process.env.PORT || 3002
const express = require('express')
const app = express()


// Routes
app.get('/', (req,res) => {
    res.send('Hello')
})


// Listener
app.listen(PORT,()=> console.log(`listening on port ${PORT}.`))