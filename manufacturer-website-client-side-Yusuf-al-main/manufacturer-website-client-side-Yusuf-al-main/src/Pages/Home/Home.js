import React from "react";
import Banner from "./Banner";
import BusinessSummery from "./BusinessSummery";
import Contact from "./Contact";
import FeatureProduct from "./FeatureProduct";
import Intro from "./Intro";
import Offer from "./Offer";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Banner></Banner>
      <Intro></Intro>
      <Offer></Offer>
      <FeatureProduct></FeatureProduct>
      <BusinessSummery></BusinessSummery>
      <Reviews></Reviews>
      <Contact></Contact>
    </div>
  );
};

export default Home;
