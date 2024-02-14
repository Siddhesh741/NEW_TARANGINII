import React,  { useState, useEffect } from "react";
import { Bs0Circle, Bs1SquareFill, Bs2CircleFill, BsFacebook, BsWhatsapp } from "react-icons/bs";
import { Ri4KFill, RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-scroll";
import { Link as ScrollLink,animateScroll as scroll } from 'react-scroll';
import '../components/Footer.css';

const Footer = ({ Rating, backgroundColor }) => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

  const checkScrollTop = () => {
    if (window.pageYOffset > 100) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="bg-darkBackground text-white">
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15133.120213301532!2d73.8367341461935!3d18.516242458490296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c12c701716d9%3A0xb1164911dc038a4c!2sDeccan%20Bus%20stop!5e0!3m2!1sen!2sin!4v1706288504711!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">

          <a className=" hover:text-brightColor transition-all cursor-pointer">
            <a a href="https://www.instagram.com/taranginiiagrofarms?igsh=b3J5OHVzcGFwbTVh"
              target="_blank">
              <h1 className=" font-semibold text-xl pb-4">Taranginii agro farm</h1>
            </a>
          </a>


          <p className=" text-sm">
            With Sets by nature Paradise you can experience new sets around you and photography also services. We provide the best prewedding
            destinations that we have to offer physically managed by<a href="https://www.instagram.com/samgirrahul?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank">
  
              <a className=" hover:text-brightColor transition-all cursor-pointer">
              <h6 className=" text-3x2 text-lightweight leading-tight text-xl pb-4">Rahul Samgir</h6>
            </a>
            </a>
          </p>
        </div>
        <div>

          <a className=" hover:text-brightColor transition-all cursor-pointer">
            <div id="destination"></div>
            <ScrollLink
              to="destination"
              spy={true}
              smooth={true}
              duration={500}
            >
              <button style={{ backgroundColor: backgroundColor }}>
                < h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">
                  Destination
                </h1>
              </button>
            </ScrollLink> </a>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer">
              <div id="destination"></div>
              <ScrollLink
                to="destination"
                spy={true}
                smooth={true}
                duration={500}
              >
                <button style={{ backgroundColor: backgroundColor }}>
                  Backwater Sets
                </button>
              </ScrollLink>


            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer">
              <div id="destination"></div>
              <ScrollLink
                to="destination"
                spy={true}
                smooth={true}
                duration={500}
              >
                <button style={{ backgroundColor: backgroundColor }}>
                  Night-Light Sets
                </button>
              </ScrollLink>


            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer">
              <div id="destination"></div>
              <ScrollLink
                to="destination"
                spy={true}
                smooth={true}
                duration={500}
              >
                <button style={{ backgroundColor: backgroundColor }}>
                  All Sets Package
                </button>
              </ScrollLink>

            </a>
          </nav>
        </div>
        <div>
          <a className=" hover:text-brightColor transition-all cursor-pointer">
            <div id="about"></div>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              <button style={{ backgroundColor: backgroundColor }}>

                <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">About</h1>
              </button>
            </ScrollLink>

          </a>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer">
              <div id="contact"></div>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                <button style={{ backgroundColor: backgroundColor }}>
                  Contact
                </button>
              </ScrollLink>

            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer">
              <div id="review"></div>
              <ScrollLink
                to="review"
                spy={true}
                smooth={true}
                duration={500}
              >
                <button style={{ backgroundColor: backgroundColor }}>
                  Review
                </button>
              </ScrollLink>
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer">
              <div id="TermsCondition"></div>
              <ScrollLink
                to="TermsCondition"
                spy={true}
                smooth={true}
                duration={500}
              >
                <button style={{ backgroundColor: backgroundColor }}>
                  Terms & Conditions
                </button>
              </ScrollLink>
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Follow Us</h1>
          <nav className=" flex flex-col md:items-center gap-2">
            <Bs0Circle
              size={25}
              className="hover:text-brightColor transition-all cursor-pointer"
            />
            <BsWhatsapp
              size={25}
              className=" hover:text-brightColor transition-all cursor-pointer"
            />
            <div>
              
              <a className=" hover:text-brightColor transition-all cursor-pointer">
              <a href="https://www.instagram.com/sets_by_nature_paradise?igsh=MXdsZWF0em0zcHFoZA=="
                target="_blank">
                <BsInstagram className="icon" />
              </a>
              </a>
            </div>

          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            {new Date().getFullYear()} @copyright developed by
            <a a href="https://www.instagram.com/taranginiiagrofarms?igsh=b3J5OHVzcGFwbTVh"
              target="_blank">
            <span className=" text-brightColor"> Taranginii Agro Farm ™️  </span> </a>| All rights reserved !!!
          </p>
        </p>
      </div>
      {showScroll && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          {/* You can use any arrow icon of your choice here */}
          <span><h3>&#11014;</h3></span>
        </div>
      )}

    </div>
    
  );
};


export default Footer;
