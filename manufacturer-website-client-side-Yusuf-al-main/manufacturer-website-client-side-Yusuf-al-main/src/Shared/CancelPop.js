import React from "react";
import { toast } from "react-toastify";

const CancelPop = ({ setPopUp, itemId, refetch }) => {
  const handleCancel = (e) => {
    e.preventDefault();
    fetch(`https://sleepy-mesa-12151.herokuapp.com/api/order/${itemId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success(`Order has been canceled`);
        setPopUp(false);
        refetch();
      });
  };
  return (
    <div className="modalBackground ">
      <form className="w-full mx-auto">
        <div className="modalContainer mx-auto">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setPopUp(false);
              }}
            >
              X
            </button>
          </div>
          <div></div>
          <div className="title">
            <h1 className="text-blue-700 text-3xl">
              Do you want to this cancel Order ?
            </h1>
          </div>
          <div className="flex justify-center mt-5">
            <button
              className="btn btn-success w-1/3 mr-2"
              onClick={handleCancel}
            >
              Yes
            </button>
            <button
              className="btn btn-warning w-1/3"
              onClick={() => {
                setPopUp(false);
              }}
            >
              No
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CancelPop;
