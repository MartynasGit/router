import React, { useEffect, useState } from "react";

const Dogs = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const lsCounter = localStorage.getItem("counter");
    if (!lsCounter) localStorage.setItem("counter", JSON.stringify(counter));
    else setCounter(JSON.parse(lsCounter));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(counter));
  }, [counter]);

  return (
    <div>
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Dogs;
