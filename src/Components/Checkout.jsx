import React from "react";

function Checkout({ item }) {
  const price = Number(item.price);
  const discount = 24;
  const platformFee = 7;
  const total = price - discount + platformFee;

  return (
    <div className="w-[360px] bg-[#fde7a5] rounded-xl shadow-md p-5 font-sans">

      {/* Product */}
      <div className="flex gap-4">
        <img
          src={item.img}
          alt={item.name}
          className="w-20 h-20 rounded-lg object-cover"
        />

        <div className="flex flex-col">
          <h3 className="font-bold text-sm">{item.name}</h3>
          <p className="font-semibold">₹{item.price}</p>

          <select className="border rounded px-2 py-1 mt-2 w-16">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>

      <hr className="my-4" />

      {/* Price Details */}
      <h4 className="font-bold mb-2 text-sm">Price Details</h4>

      <div className="flex justify-between text-sm mb-1">
        <span>Price (1 item)</span>
        <span>{price}</span>
      </div>

      <div className="flex justify-between text-sm mb-1">
        <span>Discount</span>
        <span className="text-green-600">{discount}</span>
      </div>

      <div className="flex justify-between text-sm mb-3">
        <span>Platform Fee</span>
        <span>{platformFee}</span>
      </div>

      <hr />

      <div className="flex justify-between font-bold mt-3">
        <span>Total Amount</span>
        <span>{total}</span>
      </div>

      <p className="text-green-600 text-sm mt-1">
        You’ll save {discount - platformFee} on this order!
      </p>

      <button className="w-full bg-yellow-400 mt-4 py-2 rounded-lg font-bold hover:bg-yellow-500">
        Continue
      </button>
    </div>
  );
}

export default Checkout;
