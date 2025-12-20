import { Routes, Route } from "react-router-dom";

import Index from "./Components/Index";
import Adopt from "./Components/Adopt";
import Adoption from "./Components/Adoption";
import Donate from "./Components/Donate";
import Shopping from "./Components/Shopping";
import Album from "./Components/Album";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Video from "./Components/video"; // baad me

function App() {
  
    <Routes>
      HOME ROUTE
       <Route path="/" element={<Index />} />

      {/* OTHER PAGES */}
      <Route path="/Adopt" element={<Adopt />} /> 
      <Route path="/Adoption" element={<Adoption />} />
      <Route path="/Donate" element={<Donate />} />
      <Route path="/Shop" element={<Shopping />} />
      <Route path="/Album" element={<Album />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
    // </Routes>
  // );
}

export default App;
