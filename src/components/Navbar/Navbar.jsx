import { useContext, useState } from "react";
import { assets } from "./../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center py-3">
      
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="logo" />
      </Link>

      {/* Menu */}
      <ul className="md:flex gap-5 hidden">
        <a
          href="#home"
          onClick={() => setMenu("home")}
          className={`cursor-pointer ${menu === "home" ? "border-b-2" : ""}`}
        >
          Home
        </a>

        <a
          href="#menu"
          onClick={() => setMenu("menu")}
          className={`cursor-pointer ${menu === "menu" ? "border-b-2" : ""}`}
        >
          Menu
        </a>

        <a
          href="#mobile-app"
          onClick={() => setMenu("mobile-app")}
          className={`cursor-pointer ${menu === "mobile-app" ? "border-b-2" : ""}`}
        >
          Mobile App
        </a>

        <a
          href="#contact-us"
          onClick={() => setMenu("contact-us")}
          className={`cursor-pointer ${menu === "contact-us" ? "border-b-2" : ""}`}
        >
          Contact Us
        </a>
      </ul>

      {/* Right Side */}
      <div className="flex gap-8 items-center">
        
        <img src={assets.search_icon} alt="search" />

        {/* Cart */}
        <div className="relative">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="cart" />
          </Link>

          {getTotalCartAmount() > 0 && (
            <div className="w-3 h-3 bg-orange-500 absolute -top-2 -right-2 rounded-full"></div>
          )}
        </div>

        {/* Login / Profile */}
        {!token ? (
          <button
            onClick={() => setShowLogin(true)}
            className="border rounded px-2 hover:bg-gray-200 cursor-pointer transition"
          >
            Sign In
          </button>
        ) : (
          <div className="relative group">
            <img src={assets.profile_icon} alt="profile" />

            <ul className="absolute right-0 top-8 border p-2 w-28 bg-white border-orange-400 rounded hidden group-hover:flex flex-col">
              
              <li className="flex gap-2 cursor-pointer">
                <img className="w-5" src={assets.bag_icon} alt="" />
                <p
                  onClick={() => navigate("/myorders")}
                  className="hover:text-orange-400"
                >
                  Orders
                </p>
              </li>

              <hr className="my-1" />

              <li className="flex gap-2 cursor-pointer">
                <img className="w-5" src={assets.logout_icon} alt="" />
                <p onClick={logout} className="hover:text-orange-400">
                  Logout
                </p>
              </li>
            </ul>
          </div>
        )}

      </div>
    </div>
  );
};

export default Navbar;
