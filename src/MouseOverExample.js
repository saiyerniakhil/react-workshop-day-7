import { useState } from "react";
import CatPicture from "./index.jpg";

const MouseOverExample = () => {
  const [border, setBorder] = useState(false);

  return (
    <div>
      <h4>hover over the cat picture to see the magic</h4>
        <img 
        style={{
          border: border ? "5px solid black" : "none",
        }}
        onMouseLeave={() => {
          console.log("left");
          setBorder(false);
        }}
        onMouseOver={() => {
          console.log("over");
          setBorder(true);
        }}
        src={CatPicture} alt="Cat" />
    </div>
  );
};

export default MouseOverExample;
