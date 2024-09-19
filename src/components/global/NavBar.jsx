import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import Button from "./Button";

function NavBar() {
  return (
    <div className="py-4 flex justify-between items-center">
      {/* <div>Logo</div> */}
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <div className="lg:flex gap-x-4 hidden">
        <Link to="/"> Home </Link>
        <Link to="/service/"> Service </Link>
        <Link to="/feature/"> Feature </Link>
        <Link to="/testimonial/"> Testimonial </Link>
        <Link to="/product/"> Product </Link>
        <Link to="/faq/"> Faq </Link>
      </div>

      <div className="flex gap-x-4">
        {/* <button>Signin</button>
        <button>Signup</button> */}
        <Button href="/signin/" label="Login" isLogin={true} />
        <Button href="/signup/" label="Signup" />
      </div>
    </div>
  );
}

export default NavBar;
