import React from 'react'

function Adoption() {
  return (
    <div className='h-screen w-screen bg-[#f5cf7b] flex items-center justify-center'>
     <div className='h-140 w-140  bg-gray-100 shadow-lg rounded-lg pb-13'>
<h1 className='text-black justify-center items-center font-bold flex pt-4 text-2xl'>Pet Adoption Form</h1>
<p className='flex justify-center items-center font-bold text-xs'>Please fill this form to adopt your new best friend 🐶🐱</p>
<br></br>
<label className=' text-black font-bold text-sm p-3 pt-4'>Full Name</label>
<input type='text' placeholder='Enter Full Name ' className='border-2 w-2/6 mb-2 gap-2 text-black px-1 py-1 text-sm rounded '></input>
<label className=' text-black font-bold text-sm p-3 pt-4'>Email</label>
<input type='text' placeholder='Enter Email ' className='border-2 w-2/6 gap-2 text-black px-1 py-1 text-sm rounded '></input>
<br></br>
<br></br>
<label className=' text-black font-bold text-sm p-3 pt-4'>Phone No</label>
<input type='text' placeholder='Enter Phone Number ' className='border-2 w-2/6 mb-2 gap-2 text-black px-1 py-1 text-sm rounded '></input>
<label className=' text-black font-bold text-sm p-3 pt-4'>City</label>
<input type='text' placeholder='Enter City' className='border-2 w-2/6 gap-2 text-black px-1 py-1 text-sm rounded '></input>
<br></br>
<br></br>
<label className=' text-black font-bold text-sm p-3 pt-4'>Type Pet</label>
<input type='text' placeholder='Select Pet ' className='border-2 w-2/6 gap-2 text-black px-1 py-1 text-sm rounded '></input>
<label className=' text-black font-bold text-sm p-3 pt-4'>Pet age </label>
<input type='text' placeholder='Select Age' className='border-2 w-2/6 gap-2 text-black px-1 py-1 text-sm rounded '></input>
<br></br>
<br></br>
<label className=' text-black font-bold text-sm p-3 pt-4 '>Full Address</label>
<input type='text'  className='border-2  w-6/6 gap-2 text-black px-2 py-9 text-sm rounded flex'></input>
<label className=' text-black font-bold text-sm p-3 pt-4 '>Why do you want to adopt a pet</label>
<input type='text'  className='border-2  w-6/6 gap-2 text-black px-2 py-4 text-sm rounded flex'></input>
 <br></br>
 <p className='flex font-bold text-xs justify-center items-center'>I confirm that all details are correct and i will take responsibility for the adopted pet.</p>    
     <button type='submit'placeholder='Submit Adoption Request'  className='bg-black text-white justify-center items-center flex px-4'>Submit</button>
     <p className='font-bold flex justify-center items-center '>Your information will be kept confidential</p>
     </div>
    </div>
  )
}

export default Adoption
