import React from "react";
import "./style.css";

function Photo(props) {
  return (
    <span onClick={() => props.reposition(props.id)} className="reposition">
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    </span>
  );
}

export default Photo;
