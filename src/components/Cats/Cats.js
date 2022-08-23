import React, { useEffect, useState } from "react";

const Cats = () => {
  const [foo, setFoo] = useState(0);
  const [bar, setBar] = useState(0);

  useEffect(() => console.log("Only on first"), []);
  useEffect(() => console.log("Only when variable changes"), [foo]);
  useEffect(() => console.log("Only on every render"));

  return (
    <>
      <div>
        {foo} - {bar}
      </div>
      <button onClick={() => setFoo(foo + 1)}>Increment Foo</button>
      <button onClick={() => setBar(bar + 1)}>Increment Bar</button>
    </>
  );
};

export default Cats;
