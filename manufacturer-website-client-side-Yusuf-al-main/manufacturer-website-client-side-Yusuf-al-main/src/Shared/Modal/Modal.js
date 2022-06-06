import { Result } from "postcss";
import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import "./Modal.css";

const Modal = ({ setPopup, data, quan, refetch }) => {
  const address = useRef();
  const { productName, brand, price, quantity, _id } = data;

  const [user] = useAuthState(auth);

  const remainingQuan = quantity - quan;
  console.log(remainingQuan);

  const totalPrice = parseInt(price) * quan;
  const orderDate = new Date();
  const handleOrder = (e) => {
    e.preventDefault();
    const orderData = {
      productData: _id,
      brand: brand,
      TotalPrice: totalPrice,
      shippingAddress: address.current.value,
      quantity: quan,
      user: user?.email,
    };
    fetch("https://sleepy-mesa-12151.herokuapp.com/api/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Order Placed successfully");
        setPopup(false);
        console.log(result);

        fetch(`https://sleepy-mesa-12151.herokuapp.com/api/product/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ remainingQuan }),
        })
          .then((res) => res.json())
          .then((updateData) => {
            console.log(updateData);
            refetch();
          });
      });
  };
  return (
    <div>
      <div className="modalBackground ">
        <form className="w-full mx-auto">
          <div className="modalContainer mx-auto">
            <div className="titleCloseBtn">
              <button
                onClick={() => {
                  setPopup(false);
                }}
              >
                X
              </button>
            </div>
            <div>
              <h1 className="uppercase text-blue-700 text-xl text-center font-semibold">
                Order details
              </h1>
            </div>
            <div className="title">
              <h1 className="uppercase text-blue-700 ">{productName}</h1>
            </div>
            <div>
              <div className="form-grp">
                <label htmlFor="patient-name">Brand</label>
                <input
                  type="text"
                  value={brand}
                  disabled
                  className="input input-bordered rounded-md input-info w-full"
                />
              </div>
              <div className="form-grp exgrp">
                <div className="flex flex-col">
                  <label htmlFor="phone-Num">Total Price</label>
                  <input
                    type="text"
                    className="input input-bordered rounded-md input-info"
                    value={totalPrice}
                    disabled
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="appoint-date">Quantity</label>
                  <input
                    type="text"
                    value={quan}
                    className="input input-bordered rounded-md input-info"
                    disabled
                  />
                </div>
              </div>
              <div className="form-grp">
                <label htmlFor="appoint-date">Date of Oder</label>
                <input
                  type="text"
                  value={orderDate.toDateString()}
                  className="input input-bordered rounded-md input-info w-full"
                  disabled
                />
              </div>
              <div className="form-grp">
                <label htmlFor="appoint-date">User Email</label>
                <input
                  type="text"
                  value={user?.email}
                  className="input input-bordered rounded-md input-info w-full"
                  disabled
                />
              </div>
              <div className="form-grp">
                <label htmlFor="shipping-address">Shipping Address</label>
                <textarea
                  id="shipping-address"
                  ref={address}
                  cols="30"
                  rows="10"
                  className="textarea rounded-md textarea-info"
                ></textarea>
              </div>
            </div>
            <div className="footer">
              <button
                type="submit"
                onClick={handleOrder}
                className=" btn text-center"
              >
                Place Order
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
