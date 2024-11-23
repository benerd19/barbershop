require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 4000
const users = require('./routes/users.routes')

app.use(express.json())
app.use(cors())
app.use('/users', users)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
