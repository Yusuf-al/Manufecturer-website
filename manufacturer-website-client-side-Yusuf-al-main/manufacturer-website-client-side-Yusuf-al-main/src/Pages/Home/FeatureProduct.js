import React, { useEffect, useState } from "react";
import Product from "../Product";

const FeatureProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://sleepy-mesa-12151.herokuapp.com/api/product")
      .then((res) => res.json())
      .then((result) => {
        const target = result.slice(0, 3);
        setProducts(target);
      });
  }, []);

  console.log(products);

  return (
    <div className="mt-5">
      <h1 className="text-center text-3xl p-2 uppercase my-7">
        Feature Product
      </h1>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default FeatureProduct;
