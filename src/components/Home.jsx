import React from "react";
import Button from "../layouts/Button";
import img from "../assets/img/hero1.jpg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import Location from "./Location";

// import Link  from "react-router-dom";
const Home = () => {
  const backgroundColor = `bg-brightColor`;
  // const navigate = useNavigate();
  return (
    <div className=" min-h-screen lg:min-h-[90vh] flex flex-col justify-center lg:flex-row items-center md:mx-32 mx-5">
      <div className=" flex flex-col text-center lg:text-start  lg:gap-8">
        <div className="flex ">

          {/*<button className="bg-red-500 px-3 py-2 text-white rounded" onClick={()=>{navigate("/contact")}}>Book now</button>*/}
          <Link to="contact" 
          className="bg-blue-500 px-3 py-3 text-white rounded mr-12 lg:mb-5"
           spy={true} 
           smooth={true} 
           duration={500} 
           style={{ marginBottom: "40px" }}
           >
            <Button title="Book Now" backgroundColor={backgroundColor} />
          </Link>
          <Link
            to="customer-id"
            className="bg-blue-500 px-3 py-3 text-white rounded"
            spy={true}
            smooth={true}
            duration={500}
            style={{ marginBottom: "40px" }}
          >
            <Button title="Customer ID" backgroundColor={backgroundColor} />
          </Link>
        </div>


        <h1 className=" font-semibold text-5xl leading-tight" style={{ fontFamily: 'italic' }}>
          Visit the  best  place for Prewedding & manymore
        </h1><br></br>
        <p>
          Beautiful and best place near pune. If you are looking to shoot in outdoor nature and  backwater destinations that we have to offer. "Your dream prewedding shoot awaits, and we're here to make it a reality".
        </p>
      </div>
      <div className=" mt-10 lg:mt-0 w-full lg:w-4/5">

        <img className=" rounded-xl shadow-[0_50px_100px_rgba(51,_153,_204,_0.7)]"
          src={img} alt="img" />
      </div>
      <div>

      </div >
    </div>
  );
}

export default Home;

