import React from 'react'
import logo from '../assets/logo.2.png'
import hero from '../assets/hero1.png'
import photo from '../assets/photo.png'
import { RiAccountPinCircleLine } from "react-icons/ri";


function Home() {
   return (
  <>
 
    <div className='bg-[#f5cf7b] min-h-screen font-sans'>
      {/* Navbar */}
      <div className='bg-[#e6b565] flex items-center justify-between px-8 py-4'>
         <div className='flex items-center gap-3'> 
          <img src={logo} alt='logo' className='w-15 h-15' />
          <span className='font-bold text-lg'>paws & pet</span>
        </div>

        <ul className='flex gap-6 font-medium'>
          <li className='cursor-pointer'>Adopt</li>
          <li className='cursor-pointer'>Donate</li>
           <li className='cursor-pointer'>Shop</li>
          <li className='cursor-pointer'>About us</li>
          <li className='cursor-pointer'>Feedback</li>
          <li className='cursor-pointer'><RiAccountPinCircleLine className="text-4xl"/> </li>
        </ul>
      </div>

      {/* Hero Section */}
      <div className='flex items-center justify-between px-12 py-12'>
        {/* Left Text */}
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold leading-snug'>
            They <br />
            Deserved <br />
            to be <br />
            loved <br />
            too.
          </h1>

        </div>

        {/* Center Text */}
        <h2 className='text-8xl font-bold font-[cursive]'>
          paws & pet
        </h2>

        {/* Right Image */}
        <img src={hero} alt='dog' className='w-56' />
      </div>

      {/* Offer Section */}
      <div className='bg-[#fde7a5] mx-12 rounded-xl p-6 flex items-center gap-6'>
        <img src={photo} alt='dog' className='w-25 h-30' />

        <div>
          <h3 className='text-2xl font-bold'>
            Premium Merchandise for your loved ones
          </h3>
          <p className='font-semibold'>
            Get 50% off on your 1<sup>st</sup> order
          </p>
        </div>
      </div>
    </div>



  
  </>
    );
}

export default Home
