import React from 'react'

function Donate() {
  return (
    <>
    <div className='h-screen w-screen bg-[#f5cf7b] flex items-center justify-center'>
        <div className='h-140 w-140  bg-gray-100 shadow-lg rounded-lg pb-13 p-5 pt-1'>
<h1 className='text-black justify-center items-center font-bold flex pt-4 p-5 text-2xl'>Donation Form</h1>

<label className=' text-black font-bold text-sm  pt-4'>Full Name</label>
<input type='text' placeholder='Enter Full Name ' className='border-2 w-6/6 mb-2 gap-2 flex text-black px-1 py-1 text-sm rounded '></input>
<label className=' text-black font-bold text-sm pt-4'>Email</label>
<input type='text' placeholder='Enter Email ' className='border-2 w-6/6 gap-2 flex text-black px-1 py-1 text-sm rounded '></input>
<label className=' text-black font-bold text-sm pt-4'>Phone Number</label>
<input type='text' placeholder='Enter Phone Number ' className='border-2 w-6/6 mb-2 gap-2 flex text-black px-1 py-1 text-sm rounded '></input>
<label className=' text-black font-bold text-sm  pt-4'>Donation Amount</label>
<input type='Number' placeholder='Enter Donate Amount' className='border-2 w-6/6 mb-2 gap-2 flex text-black px-1 py-1 text-sm rounded '></input>
<label className=' text-black font-bold text-sm  pt-4'>Custom Amount</label>
<input type='text' placeholder='Custom Amount' className='border-2 w-6/6 mb-2 gap-2 flex text-black px-1 py-1 text-sm rounded '></input>
<label className=' text-black font-bold text-sm  pt-4'>Message</label>
<input type='text' className='border-2 w-6/6  px-2 py-7  text-black px-1 py-1 text-sm rounded '></input>

<br></br>
<br></br>
<button type="submit"className="w-full  bg-amber-700 text-white py-2 rounded-lg font-semibold  transition">Donate Now</button>
        </div>
    </div>  
    </>
  )
}

export default Donate
