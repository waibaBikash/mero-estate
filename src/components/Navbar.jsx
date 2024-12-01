import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
         <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            <img src={assets.logo} alt="" />
            <ul> 
               <a href="#header" className='cursor-pointer hover:text-gray-400 '>Home</a>
               <a href="#header" className='cursor-pointer hover:text-gray-400 '>About</a>
               <a href="#header" className='cursor-pointer hover:text-gray-400 '>Projects</a>
               <a href="#header" className='cursor-pointer hover:text-gray-400 '>Testimonial</a>
            </ul>
              <button className='hidden md:block bg-white px-8 py-2 rounded-full cursor-pointer '>Sign Up</button>
         </div>
    </div>
  )
}

export default Navbar