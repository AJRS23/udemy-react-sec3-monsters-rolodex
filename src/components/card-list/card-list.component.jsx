import React from "react";
import './card-list.style.css';

export const CardList = props => {
  console.log(props)
  console.log(props.children);
  return (
    <div className="card-list"> {props.children}</div>
  )
}