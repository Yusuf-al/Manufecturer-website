import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { productName, brand, price, quantity, minimumOrder, img, _id } =
    product;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure className="h-[275px]">
        <img src={img} alt="Shoes" className="w-56" />
      </figure>
      <div className="card-body bg-slate-200">
        <h2 className="card-title">{productName}</h2>
        <div className="flex flex-1 justify-between">
          <div>
            <p className="text-lg my-2">Brand: {brand}</p>
            <p className="text-lg my-2">Price: {price}</p>
          </div>
          <div>
            <p className="text-lg my-2">Quantity: {quantity}</p>
            <p className="text-lg my-2">Min Order: {minimumOrder}</p>
          </div>
        </div>

        <div className="card-actions justify-end">
          <Link className="btn btn-primary w-full" to={`/product/${_id}`}>
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
