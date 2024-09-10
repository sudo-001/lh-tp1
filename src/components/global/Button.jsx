import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  // if (props.isLogin === true) {
  //     return "bg-[#FFFFFF00";
  // } else {
  //     return "bg-[#4CAF4F]";
  // }

  return (
    <button
      className={` rounded px-4 py-2 ${
        props.isLogin === true ? "bg-[#FFFFFF00]" : "bg-[#4CAF4F]"
      }
    `}
    >
      <Link
        to={props.href}
        className={`${
          props.isLogin === true ? "text-[#4CAF4F]" : "text-white"
        }`}
      >
        {props.label}
      </Link>
    </button>
  );
}

export default Button;
