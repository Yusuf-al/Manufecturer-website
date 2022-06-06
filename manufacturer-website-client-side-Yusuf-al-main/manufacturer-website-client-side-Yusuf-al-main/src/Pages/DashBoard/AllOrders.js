import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import CancelPop from "../../Shared/CancelPop";
import Spinner from "../../Shared/Spinner/Spinner";

const AllOrders = () => {
  const [popUp, setPopUp] = useState(false);
  const [itemId, setItemId] = useState(false);

  const { data, isLoading, refetch } = useQuery(["orders"], () =>
    fetch(`https://sleepy-mesa-12151.herokuapp.com/api/order`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="w-11/12 mx-auto min-h-full">
      <h1 className="text-center text-2xl my-5 p-3 bg-slate-500 text-white">
        All Orders
      </h1>
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
              <th>User</th>
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
                <td>{order?.user}</td>
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
    </div>
  );
};

export default AllOrders;
