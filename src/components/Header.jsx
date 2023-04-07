import React from "react";
import Logo from "../assests/logo.png"
import Cart from "../assests/cart.svg"
import { Link } from "react-router-dom";


export const Header = () => {
  return (
    <div className="p-[35px] text-white flex justify-between items-center">
        <div className="flex">
        <img src={Logo} alt="site-logo" />
        </div>
        <div className="flex">
          <Link to="/" className="mr-[44px]">All Products</Link>
          <Link to="/featured" className="mr-[29px]">Featured Products</Link>
          <img src ={Cart} alt="Cart"/>
        </div>
    </div>
  );
};