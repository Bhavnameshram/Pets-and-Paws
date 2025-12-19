import React from "react";
import Album from "./Components/Album.jsx";
import AlbumCard from "./Components/AlbumCards.jsx";
import piro from "./Assets/catsssss.jpg";
import rabit from "./Assets/rabitt.jpg";
import dog from "./Assets/image.png";
import Rabit from "./Assets/pinkrabit.jpg";
import Bcat from "./Assets/browncat.jpg";
import wcat from "./Assets/whitecat.jpg";
import Ycat from "./Assets/yellowcat.jpg";
import birds from "./Assets/birdi.jpg";
import Bdog from "./Assets/breaddog.jpg";
import cdog from "./Assets/chotudog.jpg";
import bdog from "./Assets/bluedog.jpg";
import snow from "./Assets/showdog.jpg";

function App() {

  return (
    <>
     <Album/>
    <div className="h-[300vh] w-screen bg-[#f5e4b3] flex justify-center">
      {/* Card container */}
      <div className="flex gap-10 p-10 flex-wrap justify-center">
        
        <AlbumCard
          img={piro}
          name="Piro"
          date="Adopted on: 12 Jan 2024"
          story="Piro has brought endless joy to our lives."
        />

        <AlbumCard
        img={rabit}
          name="Bruno"
          date="Adopted on: 18 Feb 2024"
          story="Bruno is playful and full of love."
        />

        <AlbumCard
          img={dog}
          name="Rocky"
          date="Adopted on: 5 Mar 2024"
          story="Rocky makes every day brighter."
        />
        <AlbumCard
          img={Rabit}
          name="Luna"
          date="Adopted on: 22 Apr 2024"
          story="Luna is a bundle of joy and energy."
        />
        <AlbumCard
          img={Bcat}
          name="Milo"
          date="Adopted on: 30 May 2024"
          story="Milo has a heart full of love."
        />
        <AlbumCard
          img={wcat}
          name="Bella"
          date="Adopted on: 15 Jun 2024"
          story="Bella is the sweetest companion."
        />
        <AlbumCard
          img={Ycat}
          name="Charlie"
          date="Adopted on: 1 Jul 2024"
          story="Charlie fills our home with happiness."
        />
        <AlbumCard
          img={birds}
          name="Daisy"
          date="Adopted on: 10 Aug 2024"
          story="Daisy's playful spirit is contagious."
        />
        <AlbumCard
        img={Bdog}
          name="Max"
          date="Adopted on: 25 Sep 2024"
          story="Max is our loyal and loving friend."
        />
        <AlbumCard
          img={cdog}
          name="Sadie"
          date="Adopted on: 5 Oct 2024"
          story="Sadie brings warmth to our hearts."
        />
        <AlbumCard
        img={bdog}
          name="Oliver"
          date="Adopted on: 15 Nov 2024"
          story="Oliver's antics keep us entertained."
        />
        <AlbumCard
        img={snow}
          name="Molly"
          date="Adopted on: 28 Dec 2024"
          story="Molly is a true blessing in our lives."
        />
        
        <album />

      </div>
    </div>
    </>
  );
}

export default App;

