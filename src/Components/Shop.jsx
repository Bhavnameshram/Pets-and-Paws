import React,{useState} from 'react'

function Shop() {
  const [qty, setQty] = useState(1);

  const product = {
    name: "Purepet Adult Mackerel Food",
    image:
      "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8",
    price: 199,
    discount: 24,
    platformFee: 7,
  };

  const price = product.price * qty;
  const discount = product.discount * qty;
  const total = price - discount + product.platformFee;
  const saved = discount - product.platformFee;
  return (
    <>
      <div className="min-h-screen bg-[#F6D78B] flex justify-center p-4">
      <div className="bg-[#FFF3C7] w-full max-w-md rounded-xl shadow-md p-4">

        {/* PRODUCT INFO */}
        <div className="flex gap-3">
          <img
            src={product.image}
            className="w-28 h-32 object-cover rounded-lg"
          />

          <div className="flex-1">
            <h2 className="font-bold text-sm">{product.name}</h2>
            

            <div className="flex items-center gap-2 mt-2">
              <span className="text-lg font-bold">₹{product.price}</span>
            </div>
          </div>

          {/* QTY */}
          <select
            value={qty}
            onChange={(e) => setQty((e.target.value))}
            className="border rounded px-2 h-8"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option> 
          </select>
        </div>

        {/* PRICE DETAILS */}
        <div className="mt-9 border-t pt-4">
          <h3 className="font-bold mb-3">Price Details</h3>

          <div className="flex justify-between text-sm mb-2">
            <span>Price ({qty} item)</span>
            <span>₹{price}</span>
          </div>

          <div className="flex justify-between text-sm mb-2 text-green-700">
            <span>Discount</span>
            <span>- ₹{discount}</span>
          </div>

          <div className="flex justify-between text-sm mb-2">
            <span>Platform Fee</span>
            <span>₹{product.platformFee}</span>
          </div>

          <hr className="my-3 mt-9"/>

          <div className="flex justify-between font-bold text-lg">
            <span>Total Amount</span>
            <span>₹{total}</span>
          </div>

          <div className="bg-green-100 text-green-700 text-sm p-2 rounded mt-3">
           You’ll save ₹{saved} on this order!
          </div>
        </div>

        {/* CONTINUE BUTTON */}
        <button className="mt-9 w-full bg-[#F1C40F] text-black font-bold py-3 rounded-lg">
          Continue
        </button>
      </div>
    </div>
    </>
  )
}

export default Shop
