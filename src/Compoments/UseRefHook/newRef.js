import React, { useRef, useState, useEffect } from "react";

const NewRef = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(0);
  const inputRef = useRef();
  const savePrevValue = useRef("");
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    savePrevValue.current = name;
  });

  const focus = () => {
    inputRef.current.focus();
    inputRef.current.style.width = "400px";
  };
  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My Name is {name}</div>
      <div>I rendered {renderCount.current} times</div>
      <button onClick={focus}>Focus{savePrevValue.current}</button>
    </div>
  );
};

export default NewRef;
