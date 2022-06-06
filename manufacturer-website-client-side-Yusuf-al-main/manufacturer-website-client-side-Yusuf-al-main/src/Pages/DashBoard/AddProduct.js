import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm();

  const imgAPI = "8ed68066b72ebb0173efded620c45afa";

  const handleAddProduct = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgAPI}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const product = {
            productName: data.name,
            brand: data.brand,
            price: data.price,
            description: data.desc,
            quantity: data.quantiy,
            minimumOrder: data.minOrder,
            img: img,
          };
          fetch("https://sleepy-mesa-12151.herokuapp.com/api/product", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => {
              reset();
              toast.success("Product Added successfully");
            });
        }
      });
  };
  return (
    <div className="lg:flex justify-center items-center sm:p-2">
      <div className="card lg:w-2/5 sm:w-full bg-base-100 shadow-xl">
        <div className="card-body w-ful  ">
          <h2 className="text-center text-2xl font-bold">Create an account</h2>

          <form
            className="w-full flex flex-col items-center"
            onSubmit={handleSubmit(handleAddProduct)}
          >
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full "
                {...register("name", {
                  required: {
                    value: true,
                    message: "Product Name is Required",
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
                <span className="label-text">Brand</span>
              </label>
              <input
                type="text"
                placeholder="Brand"
                className="input input-bordered w-full"
                {...register("brand", {
                  required: {
                    value: true,
                    message: "Brand is Required",
                  },
                })}
              />
              <label className="label">
                {errors.brand?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.brand.message}
                  </span>
                )}
              </label>
            </div>
            <div className="flex mt-2">
              <div className="form-control w-full mr-2 ">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Price"
                  className="input input-bordered w-full "
                  {...register("price", {
                    required: {
                      value: true,
                      message: "Please enter product price",
                    },
                    pattern: {
                      value: /^([0-9]*)(.[[0-9]+]?)?$/,
                      message: "Plese enter only positive number",
                    },
                  })}
                />
                <label className="label">
                  {errors.price?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.price.message}
                    </span>
                  )}
                  {errors.price?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.price.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full mr-2 ">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="text"
                  placeholder="Quantity"
                  className="input input-bordered w-full"
                  {...register("quantiy", {
                    required: {
                      value: true,
                      message: "Please enter Quantity",
                    },
                    pattern: {
                      value: /^([0-9]*)(.[[0-9]+]?)?$/,
                      message: "Plese enter only positive number",
                    },
                  })}
                />
                <label className="label">
                  {errors.quantiy?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.quantiy.message}
                    </span>
                  )}
                  {errors.quantiy?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.quantiy.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Minimum Order</span>
                </label>
                <input
                  type="text"
                  placeholder="Minimum Order"
                  className="input input-bordered w-full"
                  {...register("minOrder", {
                    required: {
                      value: true,
                      message: "Please set Minimum Order",
                    },
                    pattern: {
                      value: /^([0-9]*)(.[[0-9]+]?)?$/,
                      message: "Plese enter only positive number",
                    },
                  })}
                />
                <label className="label">
                  {errors.minOrder?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.minOrder.message}
                    </span>
                  )}
                  {errors.minOrder?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.minOrder.message}
                    </span>
                  )}
                </label>
              </div>
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                type="text"
                placeholder="Description"
                name=""
                className="textarea textarea-bordered w-full"
                {...register("desc", {
                  required: {
                    value: true,
                    message: "Add product description",
                  },
                })}
              />
              {errors.desc?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.desc.message}
                </span>
              )}
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Product Image</span>
              </label>
              <input
                type="file"
                className="input w-full"
                {...register("image", {
                  required: {
                    value: true,
                    message: "Image is Required",
                  },
                })}
              />
            </div>
            <button
              className="btn w-full max-w-xs text-white mt-3"
              type="submit"
            >
              {isSubmitting ? "Loading" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
