import React, { useEffect, useState } from "react";
import quote from "./../../icons/quote.svg";
import { ImStarFull } from "react-icons/im";
import { useQuery } from "react-query";
import Spinner from "../../Shared/Spinner/Spinner";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://sleepy-mesa-12151.herokuapp.com/api/review")
      .then((res) => res.json())
      .then((result) => {
        const target = result.slice(0, 3);
        setReviews(target);
      });
  }, []);

  return (
    <div className="flex flex-col justify-center mt-8 ">
      <div className="p-4 my-3">
        <h1 className="text-xl text-center ">Reviews</h1>
        <h1 className="text-2xl text-center uppercase mt-2">
          What our customers say
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 justify-items-center">
        {reviews.map((review) => (
          <div className="card h-[220px] w-96 shadow-2xl">
            <div className="card-body flex flex-row items-center relative">
              <img src={quote} alt="" className="w-12 absolute top-5 right-4" />
              <div className="avatar">
                <div className="w-16 mask mask-hexagon">
                  <img
                    src="https://api.lorem.space/image/face?hash=55350"
                    alt=""
                  />
                </div>
              </div>
              <div className="ml-3">
                <p className="justify-center text-sm ">{review.review}</p>
                <div className="flex flex-row items-center mt-2">
                  <ImStarFull></ImStarFull>
                  <p className="ml-2">{review.rating}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
