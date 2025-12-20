import React from 'react'

function Adoption() {
  return (
    <div className='h-screen w-screen bg-[#f5cf7b] flex items-center justify-center'>
     <div className='h-152 w-140  bg-gray-100 shadow-lg rounded-lg pb-13 p-5 pt-1'>
<h1 className='text-black justify-center items-center font-bold flex pt-4 text-2xl'>Pet Adoption Form</h1>
<p className='flex justify-center items-center font-bold text-xs'>Please fill this form to adopt your new best friend 🐶🐱</p>
<br></br>
<label className=' text-black font-bold text-sm p-2  pt-4'>Full Name</label>
<input type='text' placeholder='Enter Full Name ' className='border-2 w-2/6 mb-2 gap-2 text-black px-1 py-1 text-sm rounded '></input>
<label className=' text-black font-bold text-sm p-3 pt-4'>Email</label>
<input type='text' placeholder='Enter Email ' className='border-2 w-2/6 gap-2  text-black px-1 py-1 text-sm rounded '></input>
<br></br>
<br></br>
<label className=' text-black font-bold text-sm pt-4 p-2 '>Phone No</label>
<input type='Phone Number' placeholder='Enter Phone Number ' className='border-2 w-2/6 mb-2 gap-2 text-black px-1 py-1 text-sm rounded '></input>
<label className=' text-black font-bold text-sm pt-4 p-3'>City</label>
{/* <input type='city' placeholder='Enter City' className='border-2 w-2/6 gap-2 text-black px-1 py-1 text-sm rounded '></input> */}
<select class="border px-3 py-2 text-sm rounded px-1 py-1 w-2/6 bg-gray-50">
      <option>Choose</option>
      <option>Nagpur</option>
      <option>Himachal pradesh</option>
      <option>Odisha</option>
      <option>Delhi</option>
      <option>Mumbai</option>
      <option>Indore</option>
</select>
<br></br>
<br></br>
<label className=' text-black font-bold text-sm pt-4 p-2'>Type Pet</label>
{/* <input type='Type Pet' placeholder='Select Pet ' className='border-2 w-2/6 gap-2 text-black px-1 py-1 text-sm rounded '></input> */}
<select classname="border px-3 py-2 text-sm rounded px-1 py-1 w-2/6 bg-gray-50">
      <option>Choose</option>
      <option>Dog</option>
      <option>Cat</option>
      <option>parrot</option>
      <option>Mouse</option>
      <option>cow</option>
</select>
<label className=' text-black font-bold text-sm pt-6 p-3'>Pet age </label>
{/* <input type='Age' className='border-2 w-2/6 gap-2 text-black px-1 py-1 text-sm rounded '></input> */}
<select class="border px-3 py-2 text-sm rounded px-1 py-1 w-2/6 bg-gray-50">
 <option>Choose Pet Age</option>
  <option>Puppy / Kitten (0–1 year)</option>
  <option>Young (1–3 years)</option>
  <option>Adult (3–7 years)</option>
  <option>Senior (7+ years)</option>
</select>
<br></br>
<br></br>
<label className=' text-black font-bold text-sm pt-4 '>Full Address</label>
<input type='text'  className='border-2  w-6/6 gap-2 text-black px-2 py-9 text-sm rounded flex'></input>
<label className=' text-black font-bold text-sm  pt-4 '>Why do you want to adopt a pet</label>
<input type='text'  className='border-2  w-6/6 gap-2 text-black px-2 py-4 text-sm rounded flex'></input>
<br></br>
<p className='flex font-bold text-xs justify-center items-center'>I confirm that all details are correct and i will take responsibility for the adopted pet.</p>    
<br></br>
<button type="submit" className="w-full bg-amber-700 text-white font-bold py-1 rounded-xl transition duration-300">Submit Adoption Request</button>
<p className='font-bold flex justify-center items-center pb-2'>Your information will be kept confidential</p>
</div>
</div>
  )
}

export default Adoption
