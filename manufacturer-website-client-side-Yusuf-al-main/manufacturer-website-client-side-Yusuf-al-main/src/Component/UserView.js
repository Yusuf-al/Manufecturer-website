import React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import MyOrder from "../Pages/MyOrder";
import MyPortfolio from "../Pages/MyPortfolio";
import Myprofile from "../Pages/Myprofile";
import ProductDetail from "../Pages/ProductDetail";
import Products from "../Pages/Products";
import Registration from "../Pages/Registration";
import ProtectRoute from "../ProtectRoute";
import Footer from "../Shared/Footer";
import Nav from "../Shared/Nav";
import NotFound from "../Shared/NotFound";

const UserView = () => {
  return (
    <div className="min-h-screen">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route
          path="/product/:id"
          element={
            <ProtectRoute>
              <ProductDetail></ProductDetail>
            </ProtectRoute>
          }
        ></Route>
        <Route
          path="/my-order"
          element={
            <ProtectRoute>
              <MyOrder></MyOrder>
            </ProtectRoute>
          }
        ></Route>
        <Route
          path="/my-profile"
          element={
            <ProtectRoute>
              <Myprofile></Myprofile>
            </ProtectRoute>
          }
        ></Route>
        <Route path="/Blog" element={<Blog></Blog>}></Route>
        <Route
          path="/my-portfolio"
          element={<MyPortfolio></MyPortfolio>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Registration></Registration>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default UserView;
