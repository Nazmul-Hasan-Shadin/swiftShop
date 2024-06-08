import React from "react";
import menu from "../../../assets/Menu.png";
import logo from "../../../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import style from "./Navbar.module.css";
import messageIcon from "../../../assets/message.png";
import heartIcon from "../../../assets/heart.png";
import avatarIcon from "../../../assets/avatar.png";

const Navbar = () => {
  return (
    <div className="flex bg-primary ">
      <div className="flex gap-9 items-center">
        <CiMenuFries></CiMenuFries>
        <div className="">
          <img className="w-44 h-10" src={logo} alt="" />
        </div>
      </div>
      <div className="block ml-16">
        <input
          className={`w-[590px] h-14 relative border ${style.inputBg}`}
          type="search"
        />
        <CiSearch className="absolute left-10" />
      </div>
      <div className="flex gap-9  items-center">
        <img className="w-6 h-5" src={messageIcon} alt="" />
        <img  className="w-5 h-5" src={heartIcon} alt="" />

        <CiShoppingCart  className="w-5 h-5 text-white"></CiShoppingCart>
        <img  className="w-8 h-5 text-white" src={avatarIcon} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
