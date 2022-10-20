import React, { useState, useEffect } from "react";

const Xx = () => {
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const toggle = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds > 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [seconds, isActive]);

  return (
    <div>
      <button onClick={toggle}>
        {isActive ? "Pause1" : "Start1"} {seconds}
      </button>
    </div>
  );
};

export default Xx;
