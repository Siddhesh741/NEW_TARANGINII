import React from "react";
import { Bs0Circle, Bs1SquareFill, Bs2CircleFill, BsFacebook, BsWhatsapp } from "react-icons/bs";
import { Ri4KFill, RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-scroll";
import { Link as ScrollLink } from 'react-scroll';

const Footer = ({ Rating, backgroundColor }) => {
  return (
    <div className="bg-darkBackground text-white">
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
            <span className=" text-brightColor"> Taranginii Agro Farm ™️  </span> </a>| All
            rights reserved !!!
          </p>
        </p>
      </div>
    </div>
  );
};


export default Footer;
