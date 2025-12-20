import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Index from "./Components/Index.jsx";
import Adopt from "./Components/Adopt.jsx";
import Adoption from "./Components/Adoption.jsx";
import Donate from "./Components/Donate.jsx";
import Shopping from "./Components/Shopping.jsx";
import Album from "./Components/Album.jsx";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";
// import Video from "./Components/Video.jsx";


function App() {
  
    
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Adopt" element={<Adopt />} />
        <Route path="/Adoption" element={<Adoption />} />
        <Route path="/Donate" element={<Donate />} />
        <Route path="/Shop" element={<Shopping />} />
        <Route path="/Album" element={<Album />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </>
  );
 
}

export default App;
