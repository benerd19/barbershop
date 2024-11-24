require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 4000
const users = require('./routes/users.routes')
const barbershops = require('./routes/barbershop.routes')
const barbers = require('./routes/barber.routes')
const services = require('./routes/service.routes')

app.use(express.json())
app.use(cors())
app.use('/users', users)
app.use('/barbershops', barbershops)
app.use('/barbers', barbers)
app.use('/services', services)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
