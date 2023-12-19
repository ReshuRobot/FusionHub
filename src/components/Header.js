import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

  const itemsCount = useSelector((store) => store.cart.items);

  return (
    <div className="header bg-gradient-to-r from-orange-400 to-red-500 text-white py-4 shadow-md transition duration-300 ease-in-out hover:bg-red-600">
      <div className="container mx-auto flex justify-between items-center">
      <div className="logo-container  mx-5 font-bold text-3xl text-white">
   Tatkal Food
</div>
        <div className="nav-items">
          <ul className="flex items-center space-x-4">
            <li>
              <Link to="/food" className="transition duration-300 ease-in-out hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link to="about" className="transition duration-300 ease-in-out hover:text-black">
                About Us
              </Link>
            </li>
            <li>
              <Link to="contact" className="transition duration-300 ease-in-out hover:text-black">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="grocery" className="transition duration-300 ease-in-out hover:text-black">
                Grocery
              </Link>
            </li>
            <li className="flex items-center">
              <div className="w-5">
                <img
                  className="cart-logo w-full"
                  src="https://images.designtrends.com/wp-content/uploads/2015/11/27111316/Shopping-Cart-Icons35.png"
                  alt="cartimage"
                />
              </div>
              <Link to="cart" className="cart-link transition duration-300 ease-in-out hover:text-black">
                Cart - ({itemsCount.length} items)
              </Link>
            </li>
            <Link to ="/">
            <button
              className="login-btn transition duration-300 ease-in-out hover:text-black"
           
            >
              Logout
            </button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
