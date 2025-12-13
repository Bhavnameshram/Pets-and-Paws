import React from "react";

const pets = [
  { name: "Bunboy", weight: "3kg", img: "https://placedog.net/300/300?id=1" },
  { name: "Happy Eater", weight: "5kg", img: "https://placedog.net/300/300?id=2" },
  { name: "Crafty Finest", weight: "7kg", img: "https://placedog.net/300/300?id=3" },
  { name: "Smokey Caten", weight: "9kg", img: "https://placedog.net/300/300?id=4" },
  { name: "Snowy", weight: "4kg", img: "https://placedog.net/300/300?id=5" },
  { name: "Buddy", weight: "6kg", img: "https://placedog.net/300/300?id=6" },
  { name: "Rocky", weight: "8kg", img: "https://placedog.net/300/300?id=7" },
  { name: "Coco", weight: "5kg", img: "https://placedog.net/300/300?id=8" },
  { name: "Bunboy", weight: "3kg", img: "https://placedog.net/300/300?id=1" },
  { name: "Happy Eater", weight: "5kg", img: "https://placedog.net/300/300?id=2" },
  { name: "Crafty Finest", weight: "7kg", img: "https://placedog.net/300/300?id=3" },
  { name: "Smokey Caten", weight: "9kg", img: "https://placedog.net/300/300?id=4" },
  { name: "Snowy", weight: "4kg", img: "https://placedog.net/300/300?id=5" },
  { name: "Buddy", weight: "6kg", img: "https://placedog.net/300/300?id=6" },
  { name: "Rocky", weight: "8kg", img: "https://placedog.net/300/300?id=7" },
  { name: "Coco", weight: "5kg", img: "https://placedog.net/300/300?id=8" },
  { name: "Bunboy", weight: "3kg", img: "https://placedog.net/300/300?id=1" },
  { name: "Happy Eater", weight: "5kg", img: "https://placedog.net/300/300?id=2" },
  { name: "Crafty Finest", weight: "7kg", img: "https://placedog.net/300/300?id=3" },
  { name: "Smokey Caten", weight: "9kg", img: "https://placedog.net/300/300?id=4" },
  { name: "Snowy", weight: "4kg", img: "https://placedog.net/300/300?id=5" },
  { name: "Buddy", weight: "6kg", img: "https://placedog.net/300/300?id=6" },
  { name: "Rocky", weight: "8kg", img: "https://placedog.net/300/300?id=7" },
  { name: "Coco", weight: "5kg", img: "https://placedog.net/300/300?id=8" },
];

export default function Adopt() {
  return (
    <div className="bg-[#F5C977] min-h-screen font-sans">

      {/* Header */}
      <header className="flex justify-between items-center px-10 py-4 bg-[#E9B75F]">
        <h1 className="text-2xl font-bold">🐾 paws and pet</h1>
        <nav className="space-x-6 font-semibold">
          <a href="#">Adopt</a>
          <a href="#">Donate</a>
          <a href="#">Shop</a>
          <a href="#">About Us</a>
          <a href="#">Feedback</a>
        </nav>
      </header>
      

      {/* Donate Your Pet Section */}
      <section className="flex flex-wrap justify-center items-center gap-10 px-10 py-12">
        <div className="max-w-sm text-left">
          <h2 className="text-3xl font-bold mb-4">
            They Deserved <br /> to be loved too.
          </h2>
        </div>

        <div className="bg-[#FCE6B4] p-6 rounded-xl shadow-lg w-96">
          <h3 className="text-xl font-bold mb-4 text-center">Donate Your Pet</h3>

          <input className="w-full mb-3 p-2 rounded" placeholder="Pet Name" />
          <input className="w-full mb-3 p-2 rounded" placeholder="Breed" />
          <input className="w-full mb-3 p-2 rounded" placeholder="Gender" />
          <textarea className="w-full mb-3 p-2 rounded" placeholder="Description" />

          <button className="w-full bg-[#B86B2E] text-white py-2 rounded hover:bg-[#9c5622]">
            Submit Donation
          </button>
        </div>
      </section>

      {/* Meet Section */}
      <h2 className="text-center text-2xl font-bold mb-6">
        Meet Your New Best Friend!
      </h2>

      {/* Pet Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-10">
        {pets.map((pet, index) => (
          <div
            key={index}
            className="bg-[#FCE6B4] p-4 rounded-xl shadow-md text-center"
          >
            <img
              src={pet.img}
              alt={pet.name}
              className="rounded-lg mb-3"
            />
            <h3 className="font-bold">{pet.name}</h3>
            <p className="text-sm text-gray-700">{pet.weight}</p>
            <button className="mt-3 bg-[#B86B2E] text-white px-4 py-1 rounded hover:bg-[#9c5622]">
              Adopt Me
            </button>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-16 px-10 py-10 bg-[#E9B75F] grid md:grid-cols-2 gap-8">
        <div className="bg-[#FCE6B4] p-6 rounded-xl shadow">
          <h3 className="font-bold text-lg mb-2">Our Story & Mission</h3>
          <p className="text-sm">
            Our mission is to connect loving homes with pets, providing a kind
            and caring environment. Join our community and spread love.
          </p>
        </div>

        <div className="bg-[#FCE6B4] p-6 rounded-xl shadow">
          <h3 className="font-bold text-lg mb-2">Send Us Your Feedback</h3>
          <input className="w-full mb-3 p-2 rounded" placeholder="Email" />
          <textarea className="w-full mb-3 p-2 rounded" placeholder="Message" />
          <button className="bg-[#B86B2E] text-white px-4 py-2 rounded">
            Send Comment
          </button>
        </div>
      </footer>
    </div>
  );
}
