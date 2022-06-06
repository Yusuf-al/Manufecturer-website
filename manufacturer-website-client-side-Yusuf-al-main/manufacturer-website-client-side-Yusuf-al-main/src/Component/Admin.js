import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes } from "react-router-dom";
import auth from "../firebase.init";
import useAdmin from "../Hooks/useAdmin";
import AddProduct from "../Pages/DashBoard/AddProduct";
import AllOrders from "../Pages/DashBoard/AllOrders";
import AllProducts from "../Pages/DashBoard/AllProducts";
import AllUsers from "../Pages/DashBoard/AllUsers";
import DashBoard from "../Pages/DashBoard/DashBoard";
import DashBoardNav from "../Pages/DashBoard/DashBoardNav";
import NotFound from "../Shared/NotFound";
import Spinner from "../Shared/Spinner/Spinner";

const Admin = () => {
  const [user, loading] = useAuthState(auth);
  const [admin] = useAdmin(user);

  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <>
      {admin === true ? (
        <>
          <DashBoardNav></DashBoardNav>
          <Routes>
            <Route path="/" element={<DashBoard></DashBoard>}></Route>
            <Route
              path="add-product"
              element={<AddProduct></AddProduct>}
            ></Route>
            <Route
              path="all-products"
              element={<AllProducts></AllProducts>}
            ></Route>
            <Route path="all-orders" element={<AllOrders></AllOrders>}></Route>
            <Route path="users" element={<AllUsers></AllUsers>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </>
      ) : (
        <>
          <NotFound></NotFound>
        </>
      )}
    </>
  );
};

export default Admin;
