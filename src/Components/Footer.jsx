import React from 'react'
import { MdOutlinePets } from "react-icons/md"
import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";

function Footer() {
  return (
    <>

<footer className="bg-[#e6b565] text-[#4A2C16] ">

  
  <div className="px-6 py-12 grid grid-cols-1 justify-evenly md:grid-cols-4 gap-8">

    
    <div>
      <h2 className="text-2xl font-extrabold mb-3 flex gap-2 items-center">Paws & Pet <MdOutlinePets /></h2>
      <p className="text-[14px] ">
        Paws & Pet is dedicated to giving love, care, and forever homes to pets.
        Adopt, donate, and help us make their lives better.
      </p>
    </div>

    {/* Links */}
    <div>
      <h3 className="font-bold mb-3">Quick Links</h3>
      <ul className="space-y-2 text-[14px]">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Adopt a Pet</li>
        <li className="cursor-pointer">Donate</li>
        <li className="cursor-pointer">Shop</li>
        <li className="cursor-pointer">About Us</li>
        <li className=" cursor-pointer">Contact</li>
      </ul>
    </div>

    {/* Services page */}
    <div>
      <h3 className="font-bold mb-3">Our Services</h3>
      <ul className="space-y-2 text-[14px]">
        <li>Pet Adoption</li>
        <li>Pet Donation</li>
        <li>Pet Accessories</li>
        <li>Food & Care</li>
        <li>Rescue Support</li>
      </ul>
    </div>

{/* contact section */}
    
    <div>
      <h3 className="font-bold mb-3">Contact Us</h3>
      <ul className="space-y-2 text-[14px]">
        <li>Location - Nagpur, India</li>
        <li>Contact - +91 1234567890</li>
        <li>Email - pawspet@gmail.com</li>
        <li>Time - Mon – Sat : 9 AM - 6 PM</li>
      </ul>
    </div>

  </div>

  {/* Quote */}
  <div className="text-center px-6 py-4 text-[14px] font-medium bg-[#D9A441]">
     “Adopt, don’t shop. They deserve to be loved too.”
  </div>

  {/* Social Icons */}
  <div className="flex justify-center py-2 gap-6 text-4xl">
    <span className="cursor-pointer hover:scale-110 transition"><a href="https://www.instagram.com/adoptapet/?hl=en"><FaInstagram /></a></span>
    <span className="cursor-pointer hover:scale-110 transition"><a href="https://www.facebook.com/adoptapet"><RiFacebookCircleLine /></a></span>
  </div>

  <div className="text-center text-[14px] py-3 bg-[#B8743B] text-white">
    © 2025 Paws & Pet. All Rights Reserved.
  </div>

</footer>

    </>
  )
}

export default Footer