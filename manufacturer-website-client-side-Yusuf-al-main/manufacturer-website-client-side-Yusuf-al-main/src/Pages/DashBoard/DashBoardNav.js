import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaCartPlus, FaHome, FaList, FaUsers } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";

const DashBoardNav = () => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("accessToken");
    signOut(auth);
    return navigate("/login");
  };
  return (
    <div className="navbar w-11/12 mx-auto bg-neutral">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost btn-circle text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52"
          >
            <li>
              <Link to={"/dashboard"} className="text-white">
                <MdOutlineDashboardCustomize />
                Admin Dashboard
              </Link>
            </li>
            <li>
              <Link to={"add-product"} className="text-white">
                <FaCartPlus /> Add Product
              </Link>
            </li>
            <li>
              <Link to={"all-products"} className="text-white">
                <FaList /> Products List
              </Link>
            </li>
            <li>
              <Link to={"all-orders"} className="text-white">
                <BsCartCheckFill /> Orders
              </Link>
            </li>
            <li>
              <Link to={"users"} className="text-white">
                <FaUsers /> All Users
              </Link>
            </li>
            <li>
              <Link to={"/"} className="text-white">
                <FaHome /> Back to home
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link className="btn btn-ghost normal-case text-xl text-white" to={"/"}>
          Tech ULTRON Admin Dashboard
        </Link>
      </div>
      <div className="navbar-end">
        <button
          className="btn btn-ghost btn-circle text-white"
          onClick={logOut}
        >
          log out
        </button>
      </div>
    </div>
  );
};

export default DashBoardNav;
