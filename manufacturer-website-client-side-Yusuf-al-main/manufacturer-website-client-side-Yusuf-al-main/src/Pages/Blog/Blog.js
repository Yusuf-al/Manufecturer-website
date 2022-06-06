import React from "react";

const Blog = () => {
  return (
    <div className="w-11/12 bg-white shadow-2xl rounded-md mx-auto p-4 my-4">
      <h1 className="text-xl my-2">
        How will you improve the performance of a React Application?
      </h1>
      <p>
        # prevent unnecessary re-renders <br /># Reduce Image size <br /> #
        Follow DRY(" Don't repeat yourselt") that means avoid code duplicacy{" "}
        <br /> # Use immutable data structures it help to prevent side effect{" "}
        <br /> # Use Fragments to avoid additional HTML element arappers <br />{" "}
        # In Array map please try to not use index of array element in key value{" "}
        <br /> # Use destructure method instead of using props
      </p>
      <h1 className="text-xl my-2">How does prototypical inheritance work?</h1>
      <p>
        Prototypical inheritance refers to the ability to access object
        properties from another object. We use a JavaScript prototype to add new
        properties and methods to an existing object constructor. We can then
        essentially tell our JS code to inherit properties from a prototype.
        Prototypical inheritance allows us to reuse the properties or methods
        from one JavaScript object to another through a reference pointer
        function.In Javascript, every object has its own hidden, internal
        property, (Prototype). We can access that (Prototype) using the
        __proto__ property. This calls the program to mark the template object
        as a hidden type. JavaScript objects must be linked to this prototype
        object.
      </p>
      <h1 className="text-xl my-2">
        What are the different ways to manage a state in a React application
      </h1>
      <p>
        There are four main types of states that can help you manage your React
        apps <br />
        1. Local state <br />
        2. Global state <br />
        3. Server state <br />
        4. URL state <br />
        <p>
          <b>Local state :</b> Local state is data we manage in one or another
          component. useState() hook uses most for handling local state
        </p>{" "}
        <p>
          <b>Global State :</b> When a state can be user by any component that
          is global state. Context API Redux are the examples of Global State
        </p>
        <p>
          <b>Server State :</b> Data from an external server must be integrated
          with our UI status.Server state is a simple concept, but can be hard
          to manage alongside all of our local and global UI state.
        </p>
        <p>
          <b>URL State :</b> Existing data in URL, including pathname and query
          parameters.
        </p>
      </p>
      <h1 className="text-xl my-2">
        What is a unit test? Why should write unit tests?
      </h1>
      <p>
        Unit testing is a testing method that tests a single software unit in
        isolation. This involves examining the output of a function or component
        for a given input. For feedback elements, this may mean checking whether
        the element is rendering correctly for specific props. In other words,
        writing a unit test means we write code that verifies that our code
        works as expected. We will discuss other unit test goals later.
      </p>
      <h1 className="text-xl my-2">
        You have an array of products. Each product has a name, price,
        description, etc. How will you implement a search to find products by
        name?
      </h1>
      <p>
        IN array there multipale way to find the name. Firstly we can use array
        find method . in array find method it retuns the value which is matched
        secondly we can use loop and give a if condition where is there any name
        matches or not lastly we can also array filter method to filtered out
        the other name which are not matchded. We can also use inclues method to
        find the name.includes method return boolen value that mean if array
        contain name it return true otherwise it retuns false Array index of
        method can be used to find the searching elements
      </p>
    </div>
  );
};

export default Blog;
