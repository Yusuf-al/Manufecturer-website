import React, { useState } from "react";
import useAdmin from "../../Hooks/useAdmin";
import Spinner from "../../Shared/Spinner/Spinner";
import AllOrders from "./AllOrders";
import AllProducts from "./AllProducts";

const DashBoard = () => {
  const [productLength, setProductLength] = useState(0);
  const [orderLength, setOrderLength] = useState(0);

  const [adminLoading] = useAdmin();
  if (adminLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <>
      <div className="w-11/12 min-h-full mx-auto">
        <div className="flex justify-center my-5">
          <div class="stats shadow">
            <div class="stat">
              <div class="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div class="stat-title">Total Products</div>
              <div class="stat-value text-primary">{productLength}</div>
              <div class="stat-desc">are items are added till now</div>
            </div>

            <div class="stat">
              <div class="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div class="stat-title">Total</div>
              <div class="stat-value text-secondary">{orderLength}</div>
              <div class="stat-desc">order received or pending </div>
            </div>

            <div class="stat">
              <div class="stat-figure text-secondary">
                <div class="avatar online">
                  <div class="w-16 rounded-full">
                    <img
                      src="https://api.lorem.space/image/face?w=128&h=128"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="stat-value">86%</div>
              <div class="stat-title">Tasks done</div>
              <div class="stat-desc text-secondary">31 tasks remaining</div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 my-5">
          <div className="bg-white rounded-md shadow-2xl h-[700px] overflow-scroll ">
            <AllOrders setOrderLength={setOrderLength}></AllOrders>
          </div>
          <div className="bg-white rounded-md shadow-2xl h-[700px] overflow-scroll">
            <AllProducts setProductLength={setProductLength}></AllProducts>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
