import React from "react";
import { products } from "../products";
import ProductCart from "../components/productCart";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl my-5">Lista de productos</h1>
      {/* <h2 className="bg-blue-300">Home</h2> */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {products.map((product, key) => (
          <ProductCart key={key} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
