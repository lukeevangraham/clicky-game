import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <div className="navbar">
      <ul>
        <li className="brand">
          Clicky Game Test
      </li>
        <li>Click an image to begin</li>
        {/* <li>Score: {score}</li> */}
      </ul>



    </div>

  );
}

export default Navbar;
