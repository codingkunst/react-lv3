import React from "react";
import "./Button.css";

function Button() {
  function pButton() {
    alert("Make Buttons");
  }

  function nButton() {
    console.log(prompt("Is it hard?"));
  }

  return (
    <>
      <div className="button-area">
        <h1>Button</h1>

        <div className="button-line-area">
          <button className="pbutton-style" onClick={pButton}>
            Large Primary Button
          </button>
          <button className="pmbutton-style">Medium</button>
          <button className="psbutton-style">Small</button>
        </div>

        <div className="button-line-area">
          <button className="nbutton-style" onClick={nButton}>
            Large Negative Button
          </button>
          <button className="nmbutton-style">Medium</button>
          <button className="nsbutton-style">Small</button>
        </div>
      </div>
    </>
  );
}

export default Button;
