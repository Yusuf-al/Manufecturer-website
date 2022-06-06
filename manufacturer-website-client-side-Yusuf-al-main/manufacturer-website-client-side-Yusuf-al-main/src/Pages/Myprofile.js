import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../firebase.init";
import Spinner from "../Shared/Spinner/Spinner";

const Myprofile = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm();

  const [user] = useAuthState(auth);

  const { data, isLoading, refetch } = useQuery(["profile"], () =>
    fetch(
      `https://sleepy-mesa-12151.herokuapp.com/api/user/my-profile/${user?.email}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  const onSubmit = async (data) => {
    const profileData = {
      name: data.name,
      email: user?.email,
      address: data.address,
      district: data.district,
      phoneNum: data.phn,
      linkedInProfile: data.linkedIn,
      education: data.edu,
      isComplete: true,
    };

    fetch("https://sleepy-mesa-12151.herokuapp.com/api/user/my-profile", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(profileData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.profile === null) {
          return toast.warning("somthing went wrong");
        }

        reset();
        refetch();
        toast.success("Profile Updated successfully");
      });
  };

  return (
    <div>
      {data?.profile === null ? (
        <div className="lg:flex justify-center items-center sm:p-2">
          <div className="card lg:w-2/5 sm:w-full bg-base-100 shadow-xl">
            <div className="card-body w-ful  ">
              <h2 className="text-center text-2xl font-bold">
                Create a Profile
              </h2>
              <form
                className="w-full flex flex-col items-center"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full "
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered w-full"
                    value={user?.email}
                    disabled
                  />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Address"
                    className="textarea textarea-bordered w-full"
                    {...register("address", {
                      required: {
                        value: true,
                        message: "address is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.address?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.address.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">District</span>
                  </label>
                  <input
                    type="text"
                    placeholder="District"
                    className="input input-bordered w-full"
                    {...register("district", {
                      required: {
                        value: true,
                        message: "district is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.district?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.district.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Phone No: </span>
                  </label>
                  <input
                    type="text"
                    placeholder="phone Number"
                    className="input input-bordered w-full"
                    {...register("phn", {
                      required: {
                        value: true,
                        message: "Contact No is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.phn?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.phn.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Academic Qualification </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Academic Qualification"
                    className="input input-bordered w-full"
                    {...register("edu", {
                      required: {
                        value: true,
                        message: "Academic Qualification is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.edu?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.edu.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">LinkedIn profile </span>
                  </label>
                  <input
                    type="text"
                    placeholder="LinkedIn profile Link"
                    className="input input-bordered w-full"
                    {...register("linkedIn", {
                      required: {
                        value: true,
                        message: "LinkedIn profile is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.linkedIn?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.linkedIn.message}
                      </span>
                    )}
                  </label>
                </div>

                <input
                  className="btn w-full max-w-xs text-white mt-3"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="lg:flex justify-center items-center sm:p-2">
            <div className="card lg:w-2/5 sm:w-full bg-base-100 shadow-xl">
              <div className="card-body w-ful  ">
                <h2 className="text-center text-2xl font-bold">My Profile</h2>
                <form className="w-full flex flex-col items-center">
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="input input-bordered w-full "
                      value={data?.profile?.name}
                      disabled
                    />
                  </div>
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="input input-bordered w-full"
                      value={user?.email}
                      disabled
                    />
                  </div>
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">Address</span>
                    </label>
                    <textarea
                      type="text"
                      placeholder="Address"
                      className="textarea textarea-bordered w-full"
                      value={data?.profile?.address}
                      disabled
                    />
                  </div>
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">District</span>
                    </label>
                    <input
                      type="text"
                      placeholder="District"
                      className="input input-bordered w-full"
                      value={data?.profile?.district}
                      disabled
                    />
                  </div>
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">Phone No: </span>
                    </label>
                    <input
                      type="text"
                      placeholder="phone Number"
                      className="input input-bordered w-full"
                      value={data?.profile?.phoneNum}
                      disabled
                    />
                  </div>
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">
                        Academic Qualification{" "}
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Academic Qualification"
                      className="input input-bordered w-full"
                      value={data?.profile?.education}
                      disabled
                    />
                  </div>
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">LinkedIn profile </span>
                    </label>
                    <input
                      type="text"
                      placeholder="LinkedIn profile Link"
                      className="input input-bordered w-full"
                      value={data?.profile?.linkedInProfile}
                      disabled
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Myprofile;
