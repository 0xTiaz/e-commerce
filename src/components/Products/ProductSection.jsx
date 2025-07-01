import React, { useEffect, useState } from "react";
import frontPhone from "@/assets/frontPhone.png";
import sFlip from "@/assets/sFlip.png";
import bHeadphones from "@/assets/b-Headphones.png";
import baseBall from "@/assets/baseBall.png";
import Bicycle from "@/assets/bicycle.png";
import brownSweater from "@/assets/brownSweater.png";
import nintendoSwitch from "@/assets/nintendoSwitch.png";
import pants from "@/assets/pants.png";
import playStation from "@/assets/playStation.png";
import Shirt from "@/assets/Shirt.png";
import tShirt from "@/assets/tShirt.png";
import soccerGoalie from "@/assets/soccerGoalie.png";
import speaker from "@/assets/speaker.png";
import { cn } from "@/lib/utils";
import Catalog from "../catalog/Catalog";
import soccerBall from "@/assets/soccerBall.png";
import hockeyPuck from "@/assets/hockeyPuck.png";
import baseBallball from "@/assets/baseBallball.png";
import baseBallCap from "@/assets/baseBallCap.png";
import { ShoppingCart } from "lucide-react";

const prodItems = [
  {
    name: "S-flip",
    image: sFlip,
    css: "",
    price: 59.99,
    dscto: "",
    cat: "tech",
  },
  { name: "JPL Speaker", image: speaker, price: 84.99, dscto: "", cat: "tech" },
  {
    name: "Green T-Shirt",
    image: Shirt,
    price: 24.99,
    dscto: "",
    cat: "clothes",
  },
  { name: "iPanda", image: frontPhone, price: 1149.99, dscto: "", cat: "tech" },
  {
    name: "Headphones",
    image: bHeadphones,
    price: 44.99,
    dscto: "",
    cat: "tech",
  },
  {
    name: "Soccer Goalie with ball",
    image: soccerGoalie,
    price: 139.99,
    dscto: "",
    cat: "soccer",
  },
  {
    name: "Soccer Ball",
    image: soccerBall,
    price: 24.99,
    dscto: "",
    cat: "soccer",
  },
  {
    name: "Green Cargo Pants",
    image: pants,
    price: 15.99,
    dscto: "",
    cat: "clothes",
  },
  {
    name: "Hockey Puck",
    image: hockeyPuck,
    price: 250.0,
    dscto: "",
    cat: "hockey",
  },
  {
    name: "Base Ball",
    image: baseBallball,
    price: 94.99,
    dscto: "",
    cat: "baseball",
  },
  {
    name: "Baseball Bat",
    image: baseBall,
    price: 524.99,
    dscto: "",
    cat: "baseball",
  },
  {
    name: "Baseball cap",
    image: baseBallCap,
    price: 55.99,
    dscto: "",
    cat: "baseball",
  },
  //   { name: "Tennis Ball", image: "", price: "", dscto: "", cat: "" },
  { name: "Red Shirt", image: tShirt, price: 35.99, dscto: "", cat: "clothes" },
  //   { name: "Tennis Rocket", image: "", price: "", dscto: "", cat: "" },
  //   { name: "Soccer Shoe", image: "", price: "", dscto: "", cat: "" },
  {
    name: "Brown Sweater",
    image: brownSweater,
    price: 74.99,
    dscto: "",
    cat: "clothes",
  },
];

const categories = [
  {
    name: "Electro",
    cat: "tech",
    css: "",
  },
  {
    name: "T-Shirt",
    cat: "clothes",
    css: "",
  },
  {
    name: "Soccer",
    cat: "clothes",
    css: "",
  },
  {
    name: "Hockey",
    cat: "clothes",
    css: "",
  },
  {
    name: "Tennis",
    cat: "clothes",
    css: "",
  },
  {
    name: "Basketball",
    cat: "clothes",
    css: "",
  },
  {
    name: "Baseball",
    cat: "clothes",
    css: "",
  },
];

const ProductSection = () => {
  const [filterProducts, setFilterProducts] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered((prevIsHovered) => !prevIsHovered);
  };

  //   const card = document.getElementById("cardproduct");
  //   card.addEventListener("mouseover", handleHover);

  return (
    <section className="min-h-screen flex flex-col p-20 items-center">
      {/* <div>
        <Catalog />
      </div> */}
      <div className="w-[80%] px-2 py-4">
        <div className="w-full py-10">
          <h1 className="text-4xl font-bold">Products</h1>
        </div>
        <div className="flex col-2 gap-6">
          <div className="w-[20%] flex flex-col items-center">
            <h2 className="text-3xl py-4">Filtrar</h2>
            <div className="w-full flex flex-col gap-4">
              {categories.map((item, key) => (
                <div className={cn("relative flex", item.css)}>
                  <button className="flex w-full h-full hover:translate-x-2 text-start text-lg transition-all duration-300 font-bold py-2 px-2">
                    {item.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 w-full justify-around gap-4">
            {prodItems.map((item, key) => (
              <div
                key={key}
                id="cardproduct"
                className="group h-100 bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="overflow-hidden w-full">
                  <img
                    src={item.image}
                    alt=""
                    className={cn(
                      "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                      item.css
                    )}
                  />
                </div>
                <div>
                  <span className={cn("text-xl font-semibold", item.css)}>
                    {item.name}
                  </span>
                  <span className="flex w-full py-2 gap-2 justify-center">
                    <ShoppingCart />${item.price}
                  </span>
                </div>
                <div className="w-full px-4 py-8 flex justify-center">
                  <button className="bg-green-300 w-full h-full hover:cursor-pointer rounded-full px-4 py-2">
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
