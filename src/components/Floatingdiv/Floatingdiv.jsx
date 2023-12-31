import React from "react";
import "./Floatingdiv.css";

const Floatingdiv = ({ image, txt1, txt2 }) => {
  return (
    <div className="floatingdiv">
      <img src={image} alt="crown" />
      <span>
        {txt1}
        <br />
        {txt2}
      </span>
    </div>
  );
};

export default Floatingdiv;
