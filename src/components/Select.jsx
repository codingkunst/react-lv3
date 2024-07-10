import React from "react";
import "./Select.css";

function Select() {
  return (
    <div>
      <div className="select-area">
        <h1>Select</h1>
        <div className="select-style">
          <div className="select-stylee">
            <select className="select-box-style select-content-style">
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
            </select>
          </div>
          
          <div className="select-stylee">
            <select className="select-box-style select-content-style">
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Select;
