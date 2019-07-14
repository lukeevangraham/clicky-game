import React from "react";
import "./style.css";

function Photo(props) {
  return (
    <div style={{ flex: "1" }} onClick={() => props.onClick(props.id)}>
      <div className="card">
        <div className="img-fluid">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    </div>
  );
}

export default Photo;
