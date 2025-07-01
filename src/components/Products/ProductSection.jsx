import React, { useState } from "react";

const prodItems = [
  { name: "S-flip", image: "", price: "", dscto: "" },
  { name: "iPanda", image: "", price: "", dscto: "" },
  { name: "", image: "", price: "", dscto: "" },
  { name: "", image: "", price: "", dscto: "" },
  { name: "", image: "", price: "", dscto: "" },
  { name: "", image: "", price: "", dscto: "" },
  { name: "", image: "", price: "", dscto: "" },
  { name: "", image: "", price: "", dscto: "" },
  { name: "", image: "", price: "", dscto: "" },
  { name: "", image: "", price: "", dscto: "" },
  { name: "", image: "", price: "", dscto: "" },
  { name: "", image: "", price: "", dscto: "" },
  { name: "", image: "", price: "", dscto: "" },
  { name: "", image: "", price: "", dscto: "" },
  { name: "", image: "", price: "", dscto: "" },
  { name: "", image: "", price: "", dscto: "" },
  { name: "", image: "", price: "", dscto: "" },
];

const ProductSection = () => {
  const [filterProducts, setFilterProducts] = useState([]);
  return (
    <section className="min-h-screen flex flex-col p-20 items-center">
      <div className="w-[80%] px-2 py-4">
        <div className="w-full py-10">
          <h1 className="text-4xl font-bold">Products</h1>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <aside>Filtrar</aside>
          <div className="flex flex-wrap gap-4">
            {prodItems.map((item, key) => (
              <div className="card-hover px-4 py-6">{item.name}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
