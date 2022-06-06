import React from "react";
import { toast } from "react-toastify";

const DeletePopUp = ({ setDelPopUp, itemName, itemId, refetch }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    fetch(`https://sleepy-mesa-12151.herokuapp.com/api/product/${itemId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success(`${itemName} has been deleted from the list`);
        setDelPopUp(false);
        refetch();
      });
  };

  const handlePopUp = (e) => {
    e.preventDefault();
    setDelPopUp(false);
  };
  return (
    <div className="modalBackground ">
      <form className="w-full mx-auto">
        <div className="modalContainer mx-auto">
          <div className="titleCloseBtn">
            <button onClick={handlePopUp}>X</button>
          </div>
          <div>
            <h1 className="uppercase text-blue-700 text-xl text-center font-semibold">
              Do you want to delete
            </h1>
          </div>
          <div className="title">
            <h1 className="uppercase text-blue-700 text-3xl">{itemName} ?</h1>
          </div>
          <div className="flex justify-center mt-5">
            <button
              className="btn btn-success w-1/3 mr-2"
              onClick={handleDelete}
            >
              Yes
            </button>
            <button className="btn btn-warning w-1/3" onClick={handlePopUp}>
              No
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DeletePopUp;
