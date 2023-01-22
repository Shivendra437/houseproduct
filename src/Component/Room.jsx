import React from "react";
export default function Room(props) {
  return (
    <div>
      <div>
        <img className="images" src={props.images} alt="room" />
      </div>
      <div> Title:{props.names}</div>
      <div>Type:{props.type}</div>
      <div>Rating:{props.rating}</div>
      <div>Price:{props.price}</div>
    </div>
  );
}
