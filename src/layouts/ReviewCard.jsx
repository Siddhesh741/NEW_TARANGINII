import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const ReviewCard = (props) => {
  return (
    
    <div className=" w-full md:w-1/3 h-full bg-fuchsia-300 border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      
    
      <div className=" flex flex-row justify-center items-center mt-4 gap-4">
      
            
        <img className=" rounded-full w-1/4" src={props.img} alt="img" />
        <h3 className=" font-semibold ">{props.name}</h3>
        <BsStarFill className=" text-brightColor" />
        <BsStarFill className=" text-brightColor" />
        <BsStarFill className=" text-brightColor" />
        <BsStarFill className=" text-brightColor" />
        <BsStarHalf className=" text-brightColor" />
      </div>

      <div>
    
        <p className="text-lightweight text-black  text-center text-base pt-5 text-[#898888]">
        Amazing experience.I recently had the pleasure of experiencing  prewedding shoot at Sets by nature paradise.The service provided by the cooperative team ensures a seamless and delightful experience.The lush greenery, veer dam backwater and the golden hues of the setting sun combine to make every frame a work of art.Blends nature, beautiful sets and exceptional service.The Staff is very helpful, this was the best location, highly recommended, and thank you for the great hospitality. Special thanks to Rahul sir to make this happen so smoothly. 
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;