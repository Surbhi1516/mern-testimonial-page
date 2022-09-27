const asyncHandler = require('express-async-handler')
const Testimonial = require('../models/testimonialModel')


// @desc testimonials
// @route GET api/testimonials
const getTestimonials = asyncHandler(async (req, res) => {
  const testimonials = await Testimonial.find()
  res.status(200).json(testimonials)
})



module.exports = {
  getTestimonials
}