import React from "react";
import room from "./room.css";
import Photo from "./product-1.jpeg"
export default function Room(props) {
  return (
    <div className="roomsline">
      <div className="rooms">
        <img className="images" src={props.images} alt="room" />
      </div>
      <div> Title:{props.names}</div>
      <div>Type:{props.type}</div>
      <div>Rating:{props.rating}</div>
      <div>Price:{props.price}</div>
      <img src={Photo} alt="#"/>
    </div>
  );
}
