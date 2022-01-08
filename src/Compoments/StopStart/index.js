import "./styles.css";
import React from "react";

export default function App() {
  const [seconds, setSeconds] = React.useState(0);
  const [isActive, setIsActive] = React.useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  React.useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 2000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="App">
      <button onClick={toggle}>
        {isActive ? "Pause" : "Start"} {seconds}
      </button>
    </div>
  );
}
