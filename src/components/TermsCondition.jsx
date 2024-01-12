import React from "react";
import img from "../assets/img/term.jpg";


const Features = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row items-center md:mx-32 mx-5 gap-14">
      <div className=" w-full lg:w-2/4">
        <div className=" space-y-4">
          <h1 className=" text-4xl font-medium text-center md:text-start leading-tight">
          Under the night sky, with a glass of wine in hand, our love sparkles like the constellations above💕
          </h1>
          <p>
          Veer Dam situated near Pune is known for its serene backwater surrounded by lush greenery and backwater with sunset.Veer Dam backwater offers a picturesque and secluded location for a memorable night under the stars. Remember to plan your shoot during suitable weather conditions to make the most of this enchanting setting.
          </p>
        </div>

        <div className="w-full lg:w-3/5 mt-10 lg:ml-14">
          <img
            className=" rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.9)]"
            src={img}
            alt="img"
          />
        </div>
      </div>

      

      <div className=" w-full lg:w-2/4 space-y-10">
      <div className="flex flex-row gap-5 ">
        <h1 className="font-bold text-end text-3xl">📢  Terms & Conditions  📢</h1>
      </div>
        <div className=" flex flex-row gap-5">
          <div className="flex flex-col items-left gap-5 ">
            <h1 className=" font-semibold text-xl">•  Photoshoot Time will be 4:00 PM to 9:30 PM</h1>
            <h1 className=" font-semibold text-xl">•  50% Advance payment is mandatory while booking photoshoot slot.</h1>
            <h1 className=" font-semibold text-xl">•  100% payment is mandatory before start of photoshoot.</h1>
            <h1 className=" font-semibold text-xl">•  Any damage to property or photoshoot set by customer or photographer should be compensated by them.</h1>
            <h1 className=" font-semibold text-xl">•  We believe in policy that Customer is KING and KING never Bargains.</h1>

          </div>
        </div>

        


      </div>
    </div>
  );
};

export default Features;
