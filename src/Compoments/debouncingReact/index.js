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

  const handleChange = (event, extra) => {
    const { value } = event.target;
    console.log("Url", value, extra);
    setSeaerch(value);
  };
  const optimizeVerionofSearch = useCallback(deb(handleChange, 1000), []);

  //   const update = deb(function (e) {
  //     console.log(e.target.value);
  //     // setName(e.target.value);
  //   }, 1000);

  const abc = deb(handleChange, 1000);

  const btn = deb(Hello, 1000);

  return (
    <div>
      <h1>Debouncing Using Call Back </h1>
      {search}
      <input //this one work only in react 17
        type={"text"}
        name={"search"}
        placeholder={"Enter Something"}
        // onChange={optimizeVerionofSearch}
        onChange={(e) => {
          e.persist(); //  Prevents React from resetting its properties:
          abc(e, "AKASH GUPTA", "gdhbdfhbhy");
        }}
      />
      <button onClick={() => btn("please ")}>Click Me</button>
    </div>
  );
};

export default Debouncing;
