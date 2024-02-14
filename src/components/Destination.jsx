import React from "react";
import img1 from "../assets/img/dest11.jpg";
import img2 from "../assets/img/dest22.jpg";
import img3 from "../assets/img/dest3333.jpg";

import DestinationCard from "../layouts/DestinationCard";

const Destination = () => {
  return (
    
    <div className=" min-h-screen flex flex-col justify-center md:mx-32 mx-5">
      <h1 className=" font-medium text-center text-4xl lg:mt-0 mt-16  rounded-xl shadow-[0_10px_50px_rgba(10,_1,_184,_0.5)]">
        Most Popular Set
      </h1>

      <div className=" flex flex-col lg:flex-row gap-5 mt-14">
        
        <DestinationCard
          img={img1}
          
          title="Backwater Sets"
          para=" Veer Dam's scenic beauty during sunset offers a captivating blend of nature's splendor, making it an ideal spot for those seeking the serene and breathtaking moments its a mesmerizing experience."
        />
        <DestinationCard
          img={img2}
          title="Night-Light Sets"
          para="Capturing the enchantment of night sets with couples is a delicate dance of shadows and the lights. The interplay between artificial illumination and the serene night sky creates a mesmerizing canvas."
        />
        <DestinationCard
          img={img3}
          title="Out Door shoot"
          para="Elevate pre-wedding photography to new heights with captivating outdoor drone shots, weaving a story that unfolds against the breathtaking backdrop of rustic villages."
        />
      </div>
    </div>
  );
};

export default Destination;
