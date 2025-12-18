import React from 'react'

function Feedback() {
  return (
   <>
   {/* above section is here */}
    <div className='h-[600vh] w-screen bg-[#f5e4b3] p-5'>
      <h1 className='h-[5vh] w-[15%] bg-[#ffcc80] text-center border-[#5c3f36] border-3 rounded-2xl align-middle ml-[42%]'> HAPILY EVER AFTER</h1>
      <div className='text-center text-6xl text-[#5c3f36] color-[#5c3f36] mt-3'>OUR FAMILY ALBUM</div>
      <div className='text-center text-2xl text-[#5c3f36] color-[#5c3f36] mt-2 align-center ml-[15%] mr-[15%]'>Browse through heart warming updates from our community. Every chirp,purr and hop tells a story of love found</div>


     {/* here is the gallery section */}
     <div className='border-3 border-[#5c3f36] rounded-2xl w-[20vw] h-[60vh] p-3 flex flex-col items-center bg-amber-50'>
      {/* for the pet photo */}
      <div className='border-3 border-[#5c3f36] rounded-2xl w-[90%] h-[50%]'></div>

      <div className='text-center text-[3vh] text-[#5c3f36] color-[#5c3f36] mt-3'>PIRO</div>
      <div className='text-center text-[2vh] text-[#5c3f36] color-[#5c3f36] mt-1'>Adopted on: 12th Jan 2024</div>
      <div className='text-center text-[2.5vh] text-[#5c3f36] color-[#5c3f36] mt-1'>"Piro has brought endless joy to our lives. His playful antics and loving nature make every day brighter!"</div>
     </div>


     {/* this section is for the share your story button */}
      <div className='h-[30vh] w-[45vw] gap flex flex-col items-center border-3 border-[#5c3f36] rounded-2xl justify-center text-center p-10  bg-[#ffffff] ml-[25%]'>
        <p className='text-[5vh] text-[#5c3f36]'>Have a Story to Tell</p>   
        <p className='text-[3vh]'>We love to hear how your furry friend is doing! Share your update and join the gallery of happy tails.</p>
        <button className='h-[9vh] text-[3vh] w-[15vw] bg-[#ffcc80] border-3 border-[#5c3f36] rounded-2xl'>Share Your Story</button>
      </div>
    </div>
   </>
  )
}

export default Feedback
