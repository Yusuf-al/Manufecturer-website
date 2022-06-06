import React from "react";
import { ImUsers, ImStarFull } from "react-icons/im";
import { BsTools } from "react-icons/bs";

const BusinessSummery = () => {
  return (
    <div className="mt-5">
      <h1 className="text-center text-3xl p-2 uppercase my-8">Summery</h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 justify-items-center">
        <div className="card h-[220px] w-96 bg-blue-300  shadow-2xl">
          <ImUsers className="text-5xl bg-slate-300 mx-auto mt-9 rounded-full w-[60px] h-[60px] p-2"></ImUsers>
          <div className="card-body">
            <h2 className="card-title justify-center text-3xl">
              100K+ customers
            </h2>
          </div>
        </div>
        <div className="card h-[220px] w-96 bg-base-100 shadow-2xl">
          <ImStarFull className="text-5xl bg-slate-300 mx-auto mt-9 rounded-full w-[60px] h-[60px] p-2"></ImStarFull>
          <div className="card-body">
            <h2 className="card-title justify-center text-3xl">33K+ Reviews</h2>
          </div>
        </div>
        <div className="card h-[220px] w-96 bg-blue-300  shadow-2xl">
          <BsTools className="text-5xl bg-slate-300 mx-auto mt-9 rounded-full w-[60px] h-[60px] p-2"></BsTools>
          <div className="card-body">
            <h2 className="card-title justify-center text-3xl">50+ tools</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummery;
