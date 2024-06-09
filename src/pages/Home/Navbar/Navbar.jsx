import React from "react";
import menu from "../../../assets/Menu.png";
import logo from "../../../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { GiCancel } from "react-icons/gi";
import { CiShoppingCart } from "react-icons/ci";

import messageIcon from "../../../assets/message.png";
import heartIcon from "../../../assets/heart.png";
import avatarIcon from "../../../assets/avatar.png";
import Container from "../../../Container/Container";

import MainSearch from "../../../components/SearchComponent/MainSearh";

const Navbar = () => {
  return (
    <div className="bg-primary p-5">
      <Container>
        <div className="flex ">
          <div className="flex gap-9 items-center pr-14">
            <CiMenuFries className="text-white text-2xl font-bold"></CiMenuFries>
            <div className="">
              <img className="w-44 h-10" src={logo} alt="" />
            </div>
          </div>

          {/* ==============search bar================ */}
          <MainSearch></MainSearch>
          {/*========== icon side=============  */}

          <div className="flex gap-9  items-center text-white  pl-16">
            <div>
              <img className="w-6 h-5" src={messageIcon} alt="" />
            </div>
            <div>
              <img className="w-5 h-5" src={heartIcon} alt="" />
              <p>wishlist</p>
            </div>
            <div>
              <CiShoppingCart className="w-5 h-5 text-white"></CiShoppingCart>
              <p>cart</p>
            </div>
            <div>
              <img className="w-8 h-5 text-white" src={avatarIcon} alt="" />
              <p>profile</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
