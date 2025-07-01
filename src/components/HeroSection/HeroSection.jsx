import React from "react";
import { Link } from "react-router-dom";

import sHuman from "../../assets/spaceBoy.png";

const HeroSection = () => {
  return (
    <section className="flex justify-center pt-10 min-h-screen relative bg-white">
      <div className="grid grid-cols-2 w-[70%]">
        <div className="flex items-center">
          <img src={sHuman} alt="" width="full" />
        </div>
        <div className="flex items-center">
          <p className="text-6xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            nihil natus id atque, veritatis harum?
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
