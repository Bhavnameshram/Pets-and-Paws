import React from "react";
// logo img
import logo2 from "../assets/logo2.png";
import { RiAccountPinCircleLine } from "react-icons/ri";


import belt from "../assets/belt.jpg";
import bolscracher from "../assets/bolscracher.jpg";
import bone from "../assets/bone.jpg";
import bonemat from "../assets/bonemat.jpg";
import bowl from "../assets/bowl.jpg";
import catbowl from "../assets/catbowl.jpg";
import cbone from "../assets/cbone.jpg";
import kholder from "../assets/kholder.jpg";
import Cage from "../assets/cage1.jpg";
import steps from "../assets/steps.jpg";
import rbelt  from "../assets/rbelt.jpg";
import LuxuriousCage from "../assets/luxuriousCage.jpg";
import catbed from "../assets/catbed.jpg";
import birdbag from "../assets/birdbag.jpg";
import  birdswing from "../assets/birdswing.jpg";
const pets = [
  {

    name: "Belt",
    price: "299",
    img: belt,
    description: "sturdy & stylish belt for your pet",
  },
  {
    name: "Bolscracher",
    price: "1299",
    img: bolscracher,
    description: "interactive scracher for your cat",
  },
  {
    name: "Bone",
    price: "199",
    img: bone,
    description: "durable & plastic free toy bone",
  },
  {
    name: "Bonemat",
    price: "349",
    img: bonemat,
    description: "cool and pet friendly mat",
  },
  {
    name: "Bowl",
    price: "500",
    img: bowl,
    description: "durable & stylish bowl for your pet",
  },
  {
    name: "Catbowl",
    price: "699",
    img: catbowl,
    description: "attractive & stylish bowl for cat",
  },
  {
    name: "Cloth bone",
    price: "249",
    img: cbone,
    description: "colorful & fun toy bone for your cat",
  },
  {
    name: "Key Holder",
    price: "299",
    img: kholder,
    description: "modern & sleek key holder for pet lovers",
  },
  {
    name: "Cage",
    price: "999",
    img: Cage,
    description: "spacious & comfortable cage for your bird",

  },
  {
    name: "Steps",
    price: "399",
    img: steps,
    description: "fun to playsteps for your pet",
  },
  {
    name: "Rabbit belt",
    price: "349",
    img: rbelt,
    description: "cute & comfy belt for your pet"
  },
  {
    name: "Luxurious Cage",
    price: "2999",
    img: LuxuriousCage,
    description: "durable & luxury cage for cute birds",
  },
  {
    name: "Cat Bed",
    price: "3999",
    img: catbed,
    description: "comfortable & stylish bed for your cat",
  },
  {
    name: "Bird Bag",
    price: "1999",
    img: birdbag,
    description: "durable & stylish bag for your bird",
  },
  {
    name: "Bird Swing",
    price: "499", 
    img: birdswing,
    description: "fun & engaging swing for your bird",
  },  
];

export default function Shop() {
  return (
    <div className="min-h-screen bg-[#F5Cf7b] font-sans">
      {/* Header */}
      <nav className='bg-[#e6b565] flex items-center justify-between px-8 py-4 sticky top-0 shadow-md'>
         <div className='flex items-center gap-3'> 
          <img src={logo2} alt='logo' className='w-15 h-15' />
          <span className='font-bold text-lg'>paws & pet</span>
        </div>

        <ul className='flex gap-6 font-medium'>
          <li className='cursor-pointer'>Adopt</li>
          <li className='cursor-pointer'>Donate</li>
           <li className='cursor-pointer'>Shop</li>
          <li className='cursor-pointer'>About us</li>
          <li className='cursor-pointer'>Feedback</li>
          <li className='cursor-pointer'><RiAccountPinCircleLine className="text-4xl" /></li>
        </ul>
      </nav>

      {/* Title */}
      <h2 className="text-center text-3xl font-bold my-10">
        Everything Your Pet Loves 
      </h2>

      {/* Square Cards */}
      <section className="flex flex-wrap justify-center gap-6 px-10">
        {pets.map((pet, index) => (
          <div
            key={index}
            className="w-64 h-90 bg-[#fde7a5] rounded-2xl shadow-lg
                       flex flex-col items-center p-4
                       hover:scale-105 transition-transform"
          >
            {/* Square Image */}
            <img
              src={pet.img}
              alt={pet.name}
              className="w-full h-48 object-cover rounded-xl"
            />

            <h3 className="mt-3 text-lg font-bold">{pet.name}</h3>
            <p className="text-sm text-gray-800 font-bold">
              {" "}
              {pet.description}
            </p>
            <p className="text-lg text-gray-800 font-bold">
              price: {pet.price}
            </p>

            <button className="mt-auto bg-[#B86B2E] text-white px-5 py-2 rounded-full hover:bg-[#9c5622] transition">
              Buy Now
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
