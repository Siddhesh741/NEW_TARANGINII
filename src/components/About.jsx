import React from "react";
import img from "../assets/img/about.jpg";
import Button from "../layouts/Button";
import { Link } from "react-scroll";

const About = () => {
  const backgroundColor = `bg-white`;
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:flex-row items-center md:px-32 px-5 bg-darkBackground gap-10">
      <div className=" w-full lg:w-2/4 space-y-5">
        <h1 className=" font-semibold text-4xl text-start text-white leading-tight">
          At Taranginii agro Farm, we are ready to provide you with the best prewedding experience in your life!
        </h1>

        < p className=" text-1xl  text-lightweight text-start text-white leading-tight">
          "Your dream prewedding shoot awaits, and we're here to make it a reality"
        </p>
        <div className=" flex flex-row gap-10"></div>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Now" backgroundColor={backgroundColor} />
        </Link>
      </div>
      <div className=" w-full lg:w-2/4">
      <div className=" rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
        <img className=" rounded-2xl" src={img} alt="img" />
      </div>
    </div>
    </div>
  );
};

export default About;
