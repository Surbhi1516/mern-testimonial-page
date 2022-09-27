import { useEffect, useState } from 'react';
import './App.css';
import TestimonialCard from './TestimonialCard';
// import { testimonials } from './testimonials'
import axios from 'axios';

function App() {

  const [testimonials, setTestimonials] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get('/api/testimonials')
    console.log(data)
    setTestimonials(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className='app pt-2 bg-gray-100'>
        <h2 className='text-3xl my-2 font-semibold  md:text-4xl text-teal-600'>Testimonials</h2>
        <TestimonialCard data={testimonials} />
      </div>
    </>
  );
}

export default App;


// {
//   "src": "logo192.png",
//   "type": "image/png",
//   "sizes": "192x192"
// },
// {
//   "src": "logo512.png",
//   "type": "image/png",
//   "sizes": "512x512"
// }