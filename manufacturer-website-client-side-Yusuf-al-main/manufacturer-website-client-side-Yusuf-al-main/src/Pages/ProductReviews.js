import React, { useEffect, useState } from "react";

import { FiStar } from "react-icons/fi";

const ProductReviews = ({ productInfo, allreviews, reLoad }) => {
  //   const [reviews, setReviews] = useState([]);

  //   const pId = productInfo?._id;
  //   console.log(allreviews);

  //   useEffect(() => {
  //     fetch(`https://sleepy-mesa-12151.herokuapp.com/api/product/reviews/${pId}`, {
  //       method: "GET",
  //     })
  //       .then((res) => res.json())
  //       .then((result) => {
  //           setReviews(result);
  //           reLoad()
  //       });
  //   }, [pId,reLoad]);

  return (
    <div className="bg-white shadow-xl rounded-md col-span-2">
      <div>
        <h1 className="text-3x uppercase text-center p-4 bg-green-300">
          Product Review and Ratings
        </h1>
      </div>
      {allreviews.map((review) => (
        <div
          key={review._id}
          className="flex flex-row justify-between py-2 px-8 items-center"
        >
          <div>
            <p className="text-sm font-medium">{review?.name}</p>
            <p className="text-xs my-1">{review?.email}</p>
            <p className="text-sm font-normal mt-2">{review?.review}</p>
          </div>
          <div className="flex justify-between items-center">
            <FiStar></FiStar>
            <p>{review?.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductReviews;
