import React from "react";
import "./Box.css";
const Box = ({ value, key, onClick }) => {
  return (
    <>
      <button
        className={`box ${value === "X" ? "X " : "O"}`}
        id="key"
        onClick={onClick}>
        {value}
      </button>
    </>
  );
};

export default Box;
