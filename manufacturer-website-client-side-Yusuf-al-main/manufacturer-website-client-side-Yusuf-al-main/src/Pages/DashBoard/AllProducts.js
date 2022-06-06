import React, { useState } from "react";
import { useQuery } from "react-query";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Popup from "../../Shared/Popup";
import DeletePopUp from "../../Shared/DeletePopUp";
import Spinner from "../../Shared/Spinner/Spinner";

const AllProducts = () => {
  const { data, isLoading, refetch } = useQuery("products", () =>
    fetch("https://sleepy-mesa-12151.herokuapp.com/api/product").then((res) =>
      res.json()
    )
  );
  const [popUp, setPopUp] = useState(false);
  const [delPopUp, setDelPopUp] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemId, setItemId] = useState("");
  const [itemQuan, setItemQuan] = useState(0);

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  const handleEdit = () => {
    setPopUp(true);
  };
  const handleDelete = () => {
    setDelPopUp(true);
  };

  return (
    <div className="h-full w-11/12 mx-auto">
      <h1 className="text-center text-2xl my-5 p-3 bg-slate-500 text-white">
        All Products
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {popUp && (
            <Popup
              setPopUp={setPopUp}
              itemId={itemId}
              itemName={itemName}
              itemQuan={itemQuan}
              refetch={refetch}
            ></Popup>
          )}

          {delPopUp && (
            <DeletePopUp
              setDelPopUp={setDelPopUp}
              itemId={itemId}
              itemName={itemName}
              refetch={refetch}
            ></DeletePopUp>
          )}
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product, ind) => (
              <tr key={product._id}>
                <td>{ind + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={product.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product.productName}</div>
                      <div className="text-sm opacity-50">{product.brand}</div>
                    </div>
                  </div>
                </td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>

                <th className="flex">
                  <FiEdit
                    className="bg-slate-500 rounded-md text-3xl text-white p-[5px] mr-2"
                    onClick={() => {
                      handleEdit();
                      setItemId(product._id);
                      setItemName(product.productName);
                      setItemQuan(product.quantity);
                    }}
                  ></FiEdit>
                  <FiTrash2
                    className="bg-red-500 rounded-md text-3xl text-white p-[5px]"
                    onClick={() => {
                      handleDelete();
                      setItemId(product._id);
                      setItemName(product.productName);
                    }}
                  ></FiTrash2>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
