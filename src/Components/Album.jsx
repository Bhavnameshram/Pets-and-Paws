import React from 'react'
import AlbumCard from "./AlbumCards";
import Card from "./Card";
import piro from "../assets/catsssss.jpg";
import rabit from "../Assets/rabitt.jpg";
import image from "../Assets/image.png";
import pinkrabit from "../Assets/pinkrabit.jpg";
import Bcat from "../Assets/browncat.jpg";
import wcat from "../Assets/whitecat.jpg";
import Ycat from "../Assets/yellowcat.jpg";
import birds from "../Assets/birdi.jpg";
import Bdog from "../Assets/breaddog.jpg";
import cdog from "../Assets/chotudog.jpg";
import bdog from "../Assets/bluedog.jpg";
import snow from "../Assets/showdog.jpg";

function Album() {
  return (
   <>
   {/* above section is here */}
    <div className='h-[50%] w-screen bg-[#f5e4b3] p-5'>
      <h1 className='h-[5vh] w-[15%] bg-[#f5cf7b] text-center border-[#5c3f36] border-3 rounded-2xl align-middle ml-[42%]'> HAPILY EVER AFTER</h1>
      <div className='text-center text-6xl text-[#5c3f36] color-[#5c3f36] mt-3'>OUR FAMILY ALBUM</div>
      <div className='text-center text-2xl text-[#5c3f36] color-[#5c3f36] mt-2 align-center ml-[15%] mr-[15%]'>Browse through heart warming updates from our community. Every chirp,purr and hop tells a story of love found</div>
    </div>
    // steffi


     <Album/>
    <div className="h-[350vh] w-screen bg-[#f5e4b3] flex justify-center">
      {/* Card container */}
      <div className="flex gap-10 p-10 flex-wrap justify-center">
        
        <AlbumCard
          img={piro}
          name="Piro"
          date="Adopted on: 12 Jan 2024"
          story="Piro has brought endless joy to our lives. He is a lovely cat. very playful and affectionate."
        />

        <AlbumCard
        img={rabit}
          name="Bruno"
          date="Adopted on: 18 Feb 2024"
          story="Bruno is playful and full of love. He has become an inseparable part of our family."
        />

        <AlbumCard
          img={image}
          name="Rocky"
          date="Adopted on: 5 Mar 2024"
          story="Rocky makes every day brighter. His loyalty and affection are unmatched."
        />
        <AlbumCard
          img={pinkrabit}
          name="Luna"
          date="Adopted on: 22 Apr 2024"
          story="Luna is a bundle of joy and energy. She has filled our home with happiness."
        />
        <AlbumCard
          img={Bcat}
          name="Milo"
          date="Adopted on: 30 May 2024"
          story="Milo has a heart full of love. He is the perfect companion."
        />
        <AlbumCard
          img={wcat}
          name="Bella"
          date="Adopted on: 15 Jun 2024"
          story="Bella is the sweetest companion. She has brought so much joy into our lives."
        />
        <AlbumCard
          img={Ycat}
          name="Charlie"
          date="Adopted on: 1 Jul 2024"
          story="Charlie fills our home with happiness. His playful nature is infectious."
        />
        <AlbumCard
          img={birds}
          name="Daisy"
          date="Adopted on: 10 Aug 2024"
          story="Daisy's playful spirit is contagious. She has brought so much joy to our family."
        />
        <AlbumCard
        img={Bdog}
          name="Max"
          date="Adopted on: 25 Sep 2024"
          story="Max is our loyal and loving friend. He completes our family."
        />
        <AlbumCard
          img={cdog}
          name="Sadie"
          date="Adopted on: 5 Oct 2024"
          story="Sadie brings warmth to our hearts. She is a wonderful addition to our family."
        />
        <AlbumCard
        img={bdog}
          name="Oliver"
          date="Adopted on: 15 Nov 2024"
          story="Oliver's antics keep us entertained. He is a joy to have around."
        />
        <AlbumCard
        img={snow}
          name="Molly"
          date="Adopted on: 28 Dec 2024"
          story="Molly is a true blessing in our lives. Her loving nature is heartwarming."
        />
        
        <Card />

      </div>
   
    
 
    </div>
    </>

  )
}

export default Album
