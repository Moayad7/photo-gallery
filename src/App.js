import React from 'react'
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './Pages/Home/Home';
import Gallery from './Pages/Gallery/Gallery';
import Slider from './Pages/Slider/Slider';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Navbar_items from './components/navbar/Navbar_items';
import Footer from './components/footer/Footer';


const App = () => {
  return (
      <Router>
        <div className='container'>
          <Navbar/>
          <Routes>
            <Route path={"/" || "photo-gallery"} element={<Home/>}/>
            <Route path="gallery" element={<Gallery/>}/>
            <Route path="slider" element={<Slider/>}/>
          </Routes>
          <Footer/>
        </div>
      </Router>
  );
}



export default App;
