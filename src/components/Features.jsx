import React from "react";
import img from "../assets/img/feature11.jpg";
import pic1 from "../assets/img/service.png";
import pic2 from "../assets/img/user.png";
import pic3 from "../assets/img/wallet.png";
import pic4 from "../assets/img/user1.png";

const Features = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row items-center md:mx-32 mx-5 gap-14">
      <div className=" w-full lg:w-2/4">
        <div className=" space-y-4">
          <h1 className=" text-4xl font-medium text-center md:text-start leading-tight">
            Get Ready to grab opportunity, Get Ready to Experience !!!
          </h1>
          <p>
            Discover the Best Prewedding Experiences with  set by nature paradise !We're
            dedicated to curating the latest and greatest sets from
            around the veer dam ensuring you always get the ultimate and best shoot moments
            experience.
          </p>
        </div>

        <div className="w-full lg:w-3/5 mt-10 lg:ml-14">
          <img
            className=" rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
            src={img}
            alt="img"
          />
        </div>
      </div>
      <div className=" w-full lg:w-2/4 space-y-10">
        <div className=" flex flex-row gap-5">
          <div className=" flex flex-row items-center w-24">
            <img src={pic1} alt="img" />
          </div>
          <div className=" space-y-3">
            <h1 className=" font-semibold text-xl">🤝Friendly Service</h1>
            <p className=" text-[#898888]">
              We will provide excellent and friendly service for the sake of our
              customers also a couples.
            </p>
          </div>
        </div>
        <div className=" flex flex-row gap-5">
          <div className=" flex flex-row items-center w-28">
            <img src={pic2} alt="img" />
          </div>
          <div className=" space-y-3">
            <h1 className=" font-semibold text-xl">❤️‍🩹Unforgettable experience</h1>
            <p className=" text-[#898888]">
              We will provide excellent and Unforgettable experience  captured in high-quality images for
              our customers.
            </p>
          </div>
        </div>
        <div className=" flex flex-row gap-5">
          <div className="flex flex-row items-center w-24">
            <img src={pic3} alt="img" />
          </div>
          <div className=" space-y-3">
            <h1 className=" font-semibold text-xl">💰Affordable prices</h1>
            <p className=" text-[#898888]">
              We provide our services & packages Affordable & pocket friendly prices for our customers.
            </p>
          </div>
        </div>
        <div className=" flex flex-row gap-5">
          <div className="flex flex-row items-center w-24">
            <img src={pic4} alt="img" />
          </div>
          <div className=" space-y-3">
            <h1 className=" font-semibold text-xl">⭐Provide many Facilities</h1>
            <p className=" text-[#898888]">
              We provide to our customer excellent Facilities like the changing room, water ,snacks, washroom with hygiene.
            </p>
            </div>
            </div>
      </div>
    </div>
  );
};

export default Features;
