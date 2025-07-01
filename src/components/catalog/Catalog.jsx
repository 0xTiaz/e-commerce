import React from "react";
import { cn } from "@/lib/utils";
import wHeadphones from "@/assets/w-headphones.png";
import bHeadPhones from "@/assets/b-headphones.png";
import frontPhone from "@/assets/frontPhone.png";
import frontPhoneApps from "@/assets/frontPhoneApps.png";
import backPhone from "@/assets/backPhone.png";
import speaker from "@/assets/speaker.png";
import bicycle from "@/assets/bicycle.png";
import playStation from "@/assets/playStation.png";
import nintendoSwitch from "@/assets/nintendoSwitch.png";
import baseBall from "@/assets/baseBall.png";
import soccerGoalie from "@/assets/soccerGoalie.png";
import Hockey from "@/assets/hockey.png";
import soccerBall from "@/assets/soccerBall.png";
import Shirt from "@/assets/Shirt.png";
import tShirt from "@/assets/tShirt.png";
import pants from "@/assets/pants.png";
import sweater from "@/assets/sweater.png";
import brownSweater from "@/assets/brownSweater.png";

const catItems = [
  {
    name: "Headphones",
    img: wHeadphones,
    imgcss: "w-60 left-10 top-10 md:left-30",
    img2: bHeadPhones,
    imgcss2: "w-60 left-40 md:left-60 rotate-340",
    css: "to-red-500 from-red-50 overflow-hidden",
  },
  {
    name: "Smartphones",
    img: frontPhoneApps,
    imgcss: "w-100 md:left-40 z-10 left-20 sm:top-30",
    img2: backPhone,
    imgcss2: "w-100 md:top-10 md:left-28 left-10 top-",
    css: "to-amber-500 from-red-50 overflow-hidden",
  },
  {
    name: "Speakers",
    img: speaker,
    imgcss: "w-100 left-27 top-[-30px] z-10",
    img2: "",
    imgcss2: "w-200 top-[-40px] left-15",
    css: "to-blue-500 from-white-500 overflow-hidden",
  },
  {
    name: "Games",
    img: playStation,
    imgcss: "w-60 left-50 bottom-1 z-10",
    img2: "",
    imgcss2: "w-50 left-0 ",
    css: "to-white-500 from-green-500 overflow-hidden",
  },
  {
    name: "Clothes",
    img: Shirt,
    imgcss: "w-65 left-50 bottom-[-20px]",
    img2: sweater,
    imgcss2: "w-70 left-20 top-3",
    css: "to-white-500 from-stone-400 overflow-hidden",
  },
  {
    name: "Sports",
    img: soccerBall,
    imgcss: "w-80 top-15 left-60",
    img2: Hockey,
    imgcss2: "w-60 left-30 top-1 ",
    css: "to-white-500 from-cyan-600 overflow-hidden",
  },
];
const Catalog = () => {
  return (
    <section className="flex flex-col min-h-screen items-center w-full py-10">
      <div className="w-full py-10">
        <h1 className="text-4xl font-bold">Catalogo</h1>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-3 w-full justify-around gap-6">
        {catItems.map((item, key) => (
          <div
            className={cn(
              "shadow-md transition-all duration-300 relative h-60 card-hover rounded-xl p-6 bg-linear-to-tr",
              item.css
            )}
          >
            <img
              src={item.img}
              width=""
              alt=""
              className={cn("absolute", item.imgcss)}
              //   "absolute rotate-330 top-30 right-2 z-0"
            />
            <img
              src={item.img2}
              width=""
              alt=""
              className={cn("absolute", item.imgcss2)}
            />
            <p className="right-100 text-3xl text-start text-white font-semibold z-20">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catalog;
