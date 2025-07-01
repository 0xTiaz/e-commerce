import React from "react";
import { Link } from "react-router-dom";

import sHuman from "../../assets/spaceBoy.png";

const HeroSection = () => {
  return (
    <section className="flex justify-center pt-10 min-h-screen relative bg-white">
      <div className="container flex w-400 lg:flex-row">
        <div className="flex items-center w-full">
          <img src={sHuman} alt="" />
        </div>
        <div className="flex items-center w-full">
          <p className="text-6xl sm:text-max-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            nihil natus id atque, veritatis harum?
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
