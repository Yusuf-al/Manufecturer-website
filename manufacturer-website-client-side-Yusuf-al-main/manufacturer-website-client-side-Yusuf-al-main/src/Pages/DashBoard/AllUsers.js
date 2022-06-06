import React, { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useQuery } from "react-query";
import ConfirmPop from "../../Shared/ConfirmPop";
import Spinner from "../../Shared/Spinner/Spinner";

const AllUsers = () => {
  const [popUp, setPopUp] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const { data, isLoading, refetch } = useQuery("products", () =>
    fetch("https://sleepy-mesa-12151.herokuapp.com/api/user").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  const showPop = () => {
    setPopUp(true);
  };

  return (
    <div>
      <div className="h-full w-11/12 mx-auto">
        <h1 className="text-2xl text-center my-4">User List</h1>
        <table className="table w-full">
          {popUp && (
            <ConfirmPop
              setPopUp={setPopUp}
              userEmail={userEmail}
              refetch={refetch}
            ></ConfirmPop>
          )}
          <thead>
            <tr>
              <th>Serial No</th>
              <th>User Email</th>
              <th>Role</th>
              <th className="flex justify-center">Make Admin or Delete User</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, ind) => (
              <tr key={user._id}>
                <td>{ind + 1}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>

                <th
                  className="flex justify-center"
                  style={{ cursor: "pointer" }}
                >
                  <FiEdit
                    className="bg-slate-500 rounded-md text-3xl text-white p-[5px] mr-2"
                    onClick={() => {
                      showPop();
                      setUserEmail(user.email);
                    }}
                  ></FiEdit>
                  <FiTrash2 className="bg-red-500 rounded-md text-3xl text-white p-[5px]"></FiTrash2>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
