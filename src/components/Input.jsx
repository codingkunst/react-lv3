import React, { useState } from "react";
import "./Input.css";

function Input() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function nameHandler(event) {
    // let value = event.target.value;
    setName(event.target.value);
  }

  function priceHandle(event) {
    setPrice(event.target.value);
  }

  function saveHandle() {
    alert(`{ name: ${name}, price: ${price} }`);
  }

  return (
    <div className="input-area">
      <h1>Input</h1>
      Name&nbsp;
      <input type="text" value={name} onChange={nameHandler} />
      Price&nbsp;
      <input type="text" value={price} placeholder="0" onChange={priceHandle} />
      <button onClick={saveHandle}>Save</button>
    </div>
  );
}

export default Input;
