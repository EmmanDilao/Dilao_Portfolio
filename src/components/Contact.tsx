import React from 'react'
import Navbar from './Navbar'
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='md:rounded-x1 bg-gray-600 md:m-7 flex-1 p-7'>
      <Navbar/>
      <div className='mt-7'>
        <h1 className='text-white font-bold text-3x1 mb-2'>Contact Me</h1>
        <hr className="border-3 text-yellow-500 w-12 rounded-4x1" />
        <div className='mt-10'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125082.43939223459!2d122.6795589433501!3d11.564311764184994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a5f2f3cf236e69%3A0x8c05808ace5e3a57!2sRoxas%20City%2C%20Capiz!5e0!3m2!1sen!2sph!4v1742355329193!5m2!1sen!2sph" width="600" height="450" loading="lazy" className='w-full rounded-2x1'></iframe>
        </div>
        <div className='mt-10'>
          <h1 className='text-white font-bold text-2x1 mb-2'>Contact Form</h1>
          <div className='grid grid-cols-2 gap-3 md:gap-7 my-7'>
            <input type="text" placeholder='Full Name' className='text-white font-semibold border-2 p-3 rounded-x1 bg-gray-800'/>
            <input type="email" placeholder='Email Address' className='text-white font-semibold border-2 p-3 rounded-x1 bg-gray-800'/>
          </div>
          <textarea rows={4} cols={50} placeholder='Your Message' className='text-white font-semibold border-2 p-3 rounded-x1 bg-gray-800 w-full'></textarea>
          <div className='flex justify-end mt-7'>
            <button className='flex gap-3 items-center px-4 py-3 rounded-x1 font-semibold bg-gray-800 text-yellow-600 border border-gray-300 cursor-pointer'><FaPaperPlane/> Send Message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
