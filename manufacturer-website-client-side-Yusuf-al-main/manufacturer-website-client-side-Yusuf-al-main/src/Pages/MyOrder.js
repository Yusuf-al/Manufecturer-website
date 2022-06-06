import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase.init";
import CancelPop from "../Shared/CancelPop";
import Spinner from "../Shared/Spinner/Spinner";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [popUp, setPopUp] = useState(false);
  const [itemId, setItemId] = useState(false);

  const { data, isLoading, refetch } = useQuery(["orders"], () =>
    fetch(
      `https://sleepy-mesa-12151.herokuapp.com/api/order/${user?.email}`
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="w-11/12 mx-auto min-h-screen">
      <h1 className="text-center text-2xl my-6 bg-cyan-400 text-blue-900 p-2">
        My Orders
      </h1>
      {data.length === 0 && (
        <h1 className="text-5xl text-center my-5 uppercase">
          You don't order any item yet
        </h1>
      )}
      {data.length > 0 && (
        <div class="overflow-x-auto">
          <table class="table table-zebra w-full">
            {popUp && (
              <CancelPop
                setPopUp={setPopUp}
                itemId={itemId}
                refetch={refetch}
              ></CancelPop>
            )}
            <thead>
              <tr>
                <th></th>
                <th>Product Photo</th>
                <th>Product Name</th>
                <th>Total Cost</th>
                <th>Order Date</th>
                <th>Order Quantity</th>
                <th>Payment</th>
                <th>Order Cancel</th>
              </tr>
            </thead>
            <tbody>
              {data.map((order, ind) => (
                <tr key={order._id}>
                  <th>{ind + 1}</th>
                  <td>
                    <div class="avatar">
                      <div class="w-24 mask mask-squircle">
                        <img src={order?.productData?.img} alt="" />
                      </div>
                    </div>
                  </td>
                  <td>{order?.productData?.productName}</td>
                  <td>{order?.TotalPrice}</td>
                  <td>{new Date(order?.date).toDateString()}</td>
                  <td>{order?.quantity}</td>
                  <td>{order?.payment}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => {
                        setPopUp(true);
                        setItemId(order._id);
                      }}
                    >
                      {" "}
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyOrder;
