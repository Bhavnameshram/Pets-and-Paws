import React from 'react'

function Footer() {
  return (
    <>

<footer className="bg-[#E7BC6E] text-[#4A2C16] mt-16">

  {/* Top Footer */}
  <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

    {/* Brand / About */}
    <div>
      <h2 className="text-2xl font-extrabold mb-3">Paws & Pet 🐾</h2>
      <p className="text-sm leading-relaxed">
        Paws & Pet is dedicated to giving love, care, and forever homes to pets.
        Adopt, donate, and help us make their lives better.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="font-bold mb-3">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">Adopt a Pet</li>
        <li className="hover:underline cursor-pointer">Donate</li>
        <li className="hover:underline cursor-pointer">Shop</li>
        <li className="hover:underline cursor-pointer">About Us</li>
        <li className="hover:underline cursor-pointer">Contact</li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h3 className="font-bold mb-3">Our Services</h3>
      <ul className="space-y-2 text-sm">
        <li>Pet Adoption</li>
        <li>Pet Donation</li>
        <li>Pet Accessories</li>
        <li>Food & Care</li>
        <li>Rescue Support</li>
      </ul>
    </div>

    
    <div>
      <h3 className="font-bold mb-3">Contact Us</h3>
      <ul className="space-y-2 text-sm">
        <li>📍 Nagpur, India</li>
        <li>📞 +91 98765 43210</li>
        <li>✉ pawspet@gmail.com</li>
        <li>🕒 Mon – Sat : 9 AM – 6 PM</li>
      </ul>
    </div>

  </div>

  {/* Quote */}
  <div className="text-center px-6 py-4 text-sm font-medium bg-[#D9A441]">
    ❤️ “Adopt, don’t shop. They deserve to be loved too.”
  </div>

  {/* Social Icons */}
  <div className="flex justify-center gap-6 py-4">
    <span className="cursor-pointer hover:scale-110 transition">🐶</span>
    <span className="cursor-pointer hover:scale-110 transition">📘</span>
    <span className="cursor-pointer hover:scale-110 transition">📸</span>
    <span className="cursor-pointer hover:scale-110 transition">💬</span>
  </div>

  <div className="text-center text-sm py-3 bg-[#B8743B] text-white">
    © 2025 Paws & Pet. All Rights Reserved.
  </div>

</footer>
    </>
  )
}

export default Footer