import { useState } from "react";

const OnClickExample = () => {
  const [on, setOn] = useState(false);

  const x = 4
  const isEven = (x% 2) ? true: false;

  return (
    <div>
      <h1>the bulb is switched {on ? "on 🌞" : "off 🌑"}</h1>
      <button
        onClick={() => {
          setOn(!on);
        }}
      >
        {on ? "off" : "on"}
      </button>
    </div>
  );
};


export default OnClickExample