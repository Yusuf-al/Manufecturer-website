import React, { useRef } from "react";
import { toast } from "react-toastify";

const Popup = ({ setPopUp, itemName, itemId, itemQuan, refetch }) => {
  const quan = useRef();

  const handleQuan = (e) => {
    e.preventDefault();
    const remainingQuan = itemQuan + parseInt(quan.current.value);
    if (isNaN(remainingQuan)) {
      return toast.warning("Quantity should be a number");
    }

    fetch(`https://sleepy-mesa-12151.herokuapp.com/api/product/${itemId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ remainingQuan }),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("New Quantity Added");
        setPopUp(false);
        refetch();
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
                  setPopUp(false);
                }}
              >
                X
              </button>
            </div>
            <div>
              <h1 className="uppercase text-blue-700 text-xl text-center font-semibold">
                Add More Quantity
              </h1>
            </div>
            <div className="title">
              <h1 className="uppercase text-blue-700 ">{itemName}</h1>
            </div>

            <div className="form-grp">
              <label htmlFor="appoint-date">Add Quantity</label>
              <input
                type="text"
                ref={quan}
                className="input input-bordered rounded-md input-info w-full"
              />
              <button
                type="submit"
                onClick={handleQuan}
                className=" btn text-center mt-2"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
