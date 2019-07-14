import React from "react";
import "./style.css";

function Navbar(props) {
  console.log(props)
  return (
    <div className="navbar p-0">
      <ul>
        <li className="brand">
          Clicky Game
      </li>
        <li>{props.message}</li>
        <li>Score: {props.score} | Top Score: {props.topscore}</li>
      </ul>



    </div>

  );
}

export default Navbar;
