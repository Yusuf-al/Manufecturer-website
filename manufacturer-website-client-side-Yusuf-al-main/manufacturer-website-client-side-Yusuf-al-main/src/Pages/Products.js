import { Result } from "postcss";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner/Spinner";
import Product from "./Product";

const Products = () => {
  const [details, setDetails] = useState([]);

  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);

    fetch("https://sleepy-mesa-12151.herokuapp.com/api/product")
      .then((res) => res.json())
      .then((result) => {
        setDetails(result);
        setisLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  console.log(details);
  return (
    <div className="w-11/12 mx-auto mt-5">
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center">
        {details.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
