import logo from "../../../assets/logo.png";

import { CiMenuFries } from "react-icons/ci";

import { CiShoppingCart } from "react-icons/ci";

import messageIcon from "../../../assets/message.png";
import heartIcon from "../../../assets/heart.png";
import avatarIcon from "../../../assets/avatar.png";
import Container from "../../../Container/Container";

import MainSearch from "../../../components/SearchComponent/MainSearh";

const Navbar = () => {
  return (
    <div className="bg-primary pb-[77px] h-32 sm:h-32  lg:p-5">
      <Container className={"px-4"}>
        <div className="flex justify-between  lg:flex-row pt-7 md:pt-0 ">
          <div className="flex  items-center gap-2.5 lg:gap-9   lg:pr-14">
            <CiMenuFries className="text-white text-xl lg:text-2xl  font-bold"></CiMenuFries>
            <div className="">
              <img className=" w-28 h-7 lg:w-44 lg:h-10" src={logo} alt="" />
            </div>
          </div>

          {/* ==============search bar================ */}
          <div className=" hidden md:block">
            <MainSearch></MainSearch>
          </div>
          {/*========== icon side=============  */}

          <div className="flex  gap-3 lg:gap-9  items-center justify-center text-white  lg:pl-16">
            <div>
              <img
                className=" w-[17.86px] h-[17.45px] lg:w-6 lg:h-5"
                src={messageIcon}
                alt=""
              />
            </div>
            <div className="hidden md:block">
              <img className="w-5 h-5" src={heartIcon} alt="" />
              <p>wishlist</p>
            </div>
            <div>
              <CiShoppingCart className="w-[17.86px]  lg:w-5 h-[17.45px] lg:h-5 text-white  "></CiShoppingCart>
              <p className="hidden md:block">cart</p>
            </div>

            <div className="block md:hidden">
              <button className="w-14 h-7 bg-[#FFFFFF] py-2 px-4 text-black text-xs">
            
                Login
              </button>
            </div>

            <div className="hidden md:block">
              <img className="w-8 h-5 text-white" src={avatarIcon} alt="" />
              <p>profile</p>
            </div>
          </div>
        </div>
        <div className=" block md:hidden pt-7">
          <MainSearch></MainSearch>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
