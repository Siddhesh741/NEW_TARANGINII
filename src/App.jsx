import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import Destination from "./components/Destination";
import About from "./components/About";
import Contact from "./components/Contact";
import Location from "./components/Location";
import Footer from "./components/Footer";
import Review from "./components/Review";
import TermsCondition from "./components/TermsCondition";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Book from "./components/Book";
import GalleryPage from "./components/GalleryPage";
//import NavbarSecondary from "./components/NavbarSecondary";
//import './App.css'
//import Signup from "./components/Signup";

const App = () => {

  return (
    <div>
      <Navbar />
    
      <Router>
        <Routes>

          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={Book} />
          <Route path="/home" element={Home} />
          {/* <Route path="/location" element={<Location/>} />  */}

        </Routes>
      </Router>

      <main>
        <div id="home">
          <Home />
         
        </div>

        <div id="features">
          <Features />
        </div>

        <div id="destination">
          <Destination />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="contact">
          <Contact />
        </div>

         <div id="location">  
         <Location />  
         </div> 

        <div id="GalleryPage">
          <GalleryPage />
        </div>

        <div id="review">
          <Review />
        </div>

        <div id="TermsCondition">
          <TermsCondition />
        </div>


      </main>
     <Footer />
    </div>
  );
};

export default App;
