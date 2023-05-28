import React from 'react'
import icon from '../icons/Icon.png'
import clock from '../icons/clock.png'
import ads from '../icons/ads.png'
import book from '../icons/book.png'
import live from '../icons/live.png'
import Form from './Form'
function Feed() {


  return (
    <div className="w-full flex px-20  justify-between pt-4" >
      <div className='w-40% text-white mt-4'>
        <h1 className='text-4xl font-relway font-semibold'>Access curated courses worth </h1>
        <h1 className='text-4xl items-center font-relway font-semibold mb-6'>₹ <span className='line-through decoration-red-600 font-extrabold mr-1'>18,500 </span>
          at just <span className='text-[#0096FF]'>₹99</span> per year!
        </h1>
        <div className='space-y-6 '>
          <h1 className='flex text-xl gap-2 font-roboto tracking-wide'><img src={book} alt='img' className='w-8 mr-10' /> <span className='text-[#0096FF]'>100+</span> Job relevant courses </h1>
          <h1 className='flex text-xl gap-2 font-roboto tracking-wide'><img src={clock} alt='img' className='w-8 mr-10' /> <span className='text-[#0096FF]'>20,000+</span> Hours of content</h1>
          <h1 className='flex text-xl gap-2 font-roboto tracking-wide'><img src={live} alt='img' className='w-8 mr-10' /> <span className='text-[#0096FF]'>Exclusive</span> webinar access</h1>
          <h1 className='flex text-xl gap-2 font-roboto tracking-wide'><img src={icon} alt='img' className='w-8 mr-10' /> Scholarship worth <span className='text-[#0096FF]'> ₹94,500</span></h1>
          <h1 className='flex text-xl gap-2 font-roboto tracking-wide'><img src={ads} alt='img' className='w-8 mr-10' /> <span className='text-[#0096FF]'>Ad Free </span> learning experience</h1>
        </div>
      </div>
      <div className='w-50%  items-center text-black'>
        <Form />
      </div>
    </div>
  )
}

export default Feed
