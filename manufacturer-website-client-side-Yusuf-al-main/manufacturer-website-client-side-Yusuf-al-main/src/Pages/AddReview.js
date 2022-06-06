import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../firebase.init";
import useAdmin from "../Hooks/useAdmin";

const AddReview = ({ productInfo, refetch }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [user] = useAuthState(auth);

  const [admin] = useAdmin(user);

  const checkRating = (e) => {
    const ratings = parseInt(e.target.value);
    if (ratings < 0 || ratings > 5) {
      return toast.warn("Rating should not be more than 5 and less than 0");
    }
  };

  const postReview = async (data) => {
    const reviewData = {
      name: user?.displayName,
      email: user?.email,
      productId: productInfo?._id,
      rating: parseInt(data.ratings),
      review: data.review,
    };
    if (reviewData.rating < 0 || reviewData.rating > 5) {
      return toast.warning("Rating should not be more than 5 and less than 0");
    }

    if (admin) {
      return toast.error("You are not able to add review");
    }

    fetch("https://sleepy-mesa-12151.herokuapp.com/api/product/add-review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          reset();
          toast.success("REVIEW ADDED");
          refetch();
        }
      });
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Add a Review</h2>
          {admin && <h1 className="text-center">Admin can't add review</h1>}
          {!admin && (
            <form onSubmit={handleSubmit(postReview)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  value={user?.displayName}
                  className="input input-bordered w-full max-w-xs"
                  disabled
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  value={user?.email}
                  className="input input-bordered w-full max-w-xs"
                  disabled
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Ratings</span>
                </label>
                <input
                  type="number"
                  placeholder="Ratings"
                  className="input input-bordered w-full max-w-xs"
                  onChange={checkRating}
                  {...register("ratings", {
                    required: { value: true, max: 5, min: 1 },
                  })}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Your Review</span>
                </label>
                <textarea
                  placeholder="write review"
                  className="input input-bordered w-full max-w-xs"
                  {...register("review", {
                    required: { value: true, message: "write something" },
                  })}
                />
                <label className="label">
                  {errors.review?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.review.message}
                    </span>
                  )}
                </label>
              </div>

              <input
                className="btn w-full max-w-xs text-white mt-3"
                type="submit"
                value="Add Review"
              />
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddReview;
