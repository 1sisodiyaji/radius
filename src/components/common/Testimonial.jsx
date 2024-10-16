import React from 'react' 
import CardTestimonial from './CardTestimonial'
const Testimonial = () => {
  return (
    <>
    <h1 className='text-center text-6xl py-12 font-semibold'>Testimonials</h1>
    <h6 className='text-center'>People Love this!</h6>
     <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 p-3 max-w-7xl mx-auto">
        <div className="col-span-1"><CardTestimonial text= {'" Your product bring so much value. love it !! "'} Name = {'Alex Trner'} /></div>
        <div className="col-span-1"><CardTestimonial text= {'" The Product was sent from heaven! "'} Name = {'Dolly parton'} /></div>
        <div className="col-span-1"><CardTestimonial text= {'" 100% Happiness "'} Name = {'James Blake'} /></div>
      </div> 
 
    </>
  )
}

export default Testimonial