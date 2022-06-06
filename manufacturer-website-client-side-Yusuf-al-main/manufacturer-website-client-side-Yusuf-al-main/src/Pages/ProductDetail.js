import React, { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";
import useAdmin from "../Hooks/useAdmin";
import Modal from "../Shared/Modal/Modal";
import Spinner from "../Shared/Spinner/Spinner";
import AddReview from "./AddReview";
import ProductReviews from "./ProductReviews";

const ProductDetail = () => {
  const params = useParams();
  const qun = useRef();
  const [popup, setPopup] = useState(false);

  const [orderQuan, setOrderQuan] = useState(0);

  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  const { data, isLoading, refetch } = useQuery(["products", orderQuan], () =>
    fetch(
      `https://sleepy-mesa-12151.herokuapp.com/api/product/${params.id}`
    ).then((res) => res.json())
  );

  // const { data: reviews, refetch: reLoad } = useQuery(
  //   ["review", orderQuan],
  //   () =>
  //     fetch(`https://sleepy-mesa-12151.herokuapp.com/api/product/reviews/${params.id}`).then(
  //       (res) => res.json()
  //     )
  // );

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  const {
    productName,
    brand,
    price,
    quantity,
    minimumOrder,
    img,
    description,
  } = data;

  const checkData = () => {
    const qunCheck = parseInt(qun.current.value);
    if (qunCheck === " " || isNaN(qunCheck) || qunCheck < 0) {
      return toast.error("Please add Positive number");
    }
    if (qunCheck > quantity) {
      return toast.warning("Order quantity can't be more than in stoke items");
    }
    if (qunCheck < minimumOrder) {
      return toast.warning(
        `Order atleast ${minimumOrder} or more than ${minimumOrder} `
      );
    }

    setPopup(true);
    setOrderQuan(qunCheck);
  };

  return (
    <>
      <div className="w-11/12 mx-auto my-6">
        <div className="flex flex-col lg:flex-row justify-between p-4 bg-neutral text-white my-4">
          <h1 className="text-xl uppercase ml-3">{productName}</h1>
          <h1 className="text-xl uppercase mr-3">{price} BDT</h1>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-around justify-center rounded-md shadow-xl p-5">
          <img src={img} className="w-1/4" alt=" " />
          <div className="flex flex-col p-2 bg-slate-200 h-[250px] rounded-lg shadow-lg">
            <h2 className="text-center py-2 text-2xl">Product Details</h2>
            <div className="flex px-3 mt-2 justify-between">
              <h1 className="text-lg ml-5">Product Name: </h1>
              <h1 className="text-lg mr-5"> {productName}</h1>
            </div>
            <div className="flex px-3 mt-2 justify-between">
              <h1 className="text-lg ml-5">Brand:</h1>
              <h1 className="text-lg mr-5">{brand}</h1>
            </div>
            <div className="flex px-3 mt-2 justify-between">
              <h1 className="text-lg ml-5">Price:</h1>
              <h1 className="text-lg mr-5">{price} BDT</h1>
            </div>
            <div className="flex px-3 mt-2 justify-between">
              <h1 className="text-lg ml-5">Quantity:</h1>
              <h1 className="text-lg mr-5">{quantity}</h1>
            </div>
            <div className="flex px-3 mt-2 justify-between">
              <h1 className="text-lg ml-5">Minimum Order:</h1>
              <h1 className="text-lg mr-5">{minimumOrder}</h1>
            </div>
          </div>
        </div>
        <div className="mt-5 flex lg:flex-row flex-col items-center">
          <div className="rounded-lg shadow-lg bg-white p-5 w-3/5">
            <h1 className="uppercase text-2xl mb-3">Overview :</h1>
            <p>{description}</p>
          </div>
          {admin && (
            <div className="card-body bg-white shadow-xl rounded-lg mx-4">
              <h2 className="text-center text-2xl font-bold">
                Admin can't order any product
              </h2>
            </div>
          )}
          {!admin && (
            <div className="ml-5">
              <input
                type="text"
                ref={qun}
                className="input input-bordered mr-3"
                placeholder="Add Quantity"
              />

              <label
                for="my-modal-6"
                onClick={checkData}
                className="btn modal-button"
              >
                Add Quantity & Order
              </label>
            </div>
          )}

          {popup && !admin && (
            <Modal
              setPopup={setPopup}
              data={data}
              quan={orderQuan}
              refetch={refetch}
            ></Modal>
          )}
          {/* <Popup quantity={orderQuan}></Popup> */}
        </div>
      </div>
      <div className="w-11/12 mx-auto my-6">
        <div className="grid grid-cols-3 gap-4">
          <AddReview productInfo={data} refetch={refetch}></AddReview>
          <ProductReviews
            productInfo={data}
            allreviews={data?.allReviews}
          ></ProductReviews>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
