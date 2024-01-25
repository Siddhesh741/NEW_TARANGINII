import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import Destination from "./components/Destination";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Review from "./components/Review";
import TermsCondition from "./components/TermsCondition";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Book from "./components/Book";
//import './App.css'

//import Location from "./components/Location";
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
          {/* <div className="resposive-map">

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.4362403781647!2d74.06888677496612!3d18.14380728287821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2f94fd6d09a07%3A0xc94caf885abb7570!2sTarangini%20Farms!5e0!3m2!1sen!2sin!4v1705411514834!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div> */}
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

        {/* <div id="location">  */}
        {/* <Location />  */}
        {/* </div>  */}

        <div id="review">
          <Review />
        </div>

        <div id="TermsCondition">
          <TermsCondition />
        </div>


      </main>
      {/* <address id='address'> 
        Taranginii Agro farm Samgirwadi <br /> <br />
        Behind ZP school Samgirwadi Veer Tal-Purandar,Dist-Pune
      </address>*/}

      <Footer />
    </div>
  );
};

export default App;
