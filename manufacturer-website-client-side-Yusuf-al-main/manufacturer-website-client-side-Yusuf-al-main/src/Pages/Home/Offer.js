import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { MdCached, MdPermPhoneMsg } from "react-icons/md";

const Offer = () => {
  return (
    <div>
      <h1 className="text-center text-3xl p-2 uppercase my-5">We Offer</h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 justify-items-center">
        <div className="card h-[280px] w-96 bg-base-100  hover:shadow-2xl">
          <IoBagHandleOutline className="text-5xl bg-slate-300 mx-auto mt-9 rounded-full w-[80px] h-[80px] p-2"></IoBagHandleOutline>
          <div className="card-body">
            <h2 className="card-title justify-center">
              10 Day Free Replacement
            </h2>
            <p className="text-center">
              Free Replacement Warranty if you receive defective/damaged items.
              shipping charges will be paid by us.
            </p>
          </div>
        </div>
        <div className="card h-[280px] w-96 bg-base-100 hover:shadow-2xl">
          <MdCached className="text-5xl bg-slate-300 mx-auto mt-9 rounded-full w-[80px] h-[80px] p-2"></MdCached>
          <div className="card-body">
            <h2 className="card-title justify-center">Easy Returns</h2>
            <p className="text-center">
              Easy returns policy all with click of a button. T&C Apply.
            </p>
          </div>
        </div>
        <div className="card h-[280px] w-96 bg-base-100 hover:shadow-2xl">
          <MdPermPhoneMsg className="text-5xl bg-slate-300 mx-auto mt-9 rounded-full w-[80px] h-[80px] p-2"></MdPermPhoneMsg>
          <div className="card-body">
            <h2 className="card-title justify-center">
              Free Technical Support
            </h2>
            <p className="text-center">
              We provide best possible technical support related to ordered item
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
