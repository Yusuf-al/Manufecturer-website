import React from "react";
import { toast } from "react-toastify";
const ConfirmPop = ({ setPopUp, userEmail, refetch }) => {
  const handleAdmin = (e) => {
    e.preventDefault();
    fetch(
      `https://sleepy-mesa-12151.herokuapp.com/api/user/admin/${userEmail}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        setPopUp(false);
        refetch();
        toast.success(`${userEmail} is now an admin`);
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
          <div>
            <h1 className="uppercase text-blue-700 text-xl text-center font-semibold">
              You want to make
            </h1>
          </div>
          <div className="title">
            <h1 className="text-blue-700 lowercase text-3xl">{userEmail}</h1>
            Admin ?
          </div>
          <div className="flex justify-center mt-5">
            <button
              className="btn btn-success w-1/3 mr-2"
              onClick={handleAdmin}
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

export default ConfirmPop;
