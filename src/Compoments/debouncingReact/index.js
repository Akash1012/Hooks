import React, { useState, useCallback } from "react";

const Debouncing = () => {
  const deb = (fn, delay) => {
    // console.log(fn);
    let timer;
    return function () {
      let args = arguments;
      let context = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    };
  };

  const Hello = (data) => {
    console.log("Hello World", data);
  };

  const optimizeVerion = useCallback(deb(Hello, 1000), []);

  const [search, setSeaerch] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    console.log("Url", value);
    setSeaerch(value);
  };
  const optimizeVerionofSearch = useCallback(deb(handleChange, 1000), []);

  return (
    <div>
      <h1>Debouncing Using Call Back </h1>
      {search}
      <input //this one work only in react 17
        type={"text"}
        name={"search"}
        placeholder={"Enter Something"}
        onChange={optimizeVerionofSearch}
      />
      <button onClick={() => optimizeVerion("please ")}>Click Me</button>
    </div>
  );
};

export default Debouncing;
