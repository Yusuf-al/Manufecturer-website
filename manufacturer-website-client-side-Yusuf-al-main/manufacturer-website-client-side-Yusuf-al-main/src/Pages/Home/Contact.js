import React from "react";

const Contact = () => {
  return (
    <div className="w-full bg-cyan-100 flex flex-col justify-center mt-10 mb-5 p-5">
      <h1 className="text-center text-3xl p-2 uppercase text-black">
        Contact Us
      </h1>
      <div className="flex flex-col w-full mx-auto ">
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered sm:w-full lg:w-96 lg:mx-auto my-2"
        />
        <input
          type="text"
          placeholder="Your Email"
          className="input input-bordered lg:w-96 lg:mx-auto my-2"
        />
        <textarea
          name=""
          id=""
          cols="20"
          rows="10"
          placeholder="Message"
          className="textarea textarea-bordered lg:w-96 lg:mx-auto my-2"
        ></textarea>
      </div>
      <button className="btn btn-secondary lg:w-96 lg:mx-auto">Send</button>
    </div>
  );
};

export default Contact;
