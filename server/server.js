const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')

connectDB()

const port = process.env.PORT || 8000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/testimonials', require('./routes/testimonialsRoutes'))



app.listen(port, () => {
  console.log(`server running on port ${port}`)
})