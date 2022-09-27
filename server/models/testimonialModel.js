const mongoose = require('mongoose')

const testimonialSchema = mongoose.Schema({
  name: String,
  designation: String,
  avatar: String,
  message: String,
  rating: Number
}
)

module.exports = mongoose.model('Testimonial', testimonialSchema)