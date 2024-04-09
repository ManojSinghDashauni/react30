import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clicker from "./components/Clicker";
import DigitalClock from "./components/DigitalClock";
import FeedData from "./components/FeedData";
import ImageGal from "./components/ImageGal";
import NavBar from "./components/NavBar";
import Quote from "./components/Quote";
import SID from "./components/SID";
import Home from "./components/Home";
import Features from "./components/Features";
import Pricing from "./components/Pricing";



function App() {
  return (
    <div>
    <BrowserRouter>
      <header>
      {/* <SID/> */}
      {/* <Clicker/> */}
      {/* <DigitalClock/> */}
      {/* <FeedData/> */}
      {/* <ImageGal/> */}
      {/* <Quote/> */}
        <NavBar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
      </Routes>
      </header>
    </BrowserRouter>
    </div>
  );
}

export default App;
