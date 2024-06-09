import { CiShoppingCart } from "react-icons/ci";

import messageIcon from "../../assets/message.png";
import heartIcon from "../../assets/heart.png";
import avatarIcon from "../../assets/avatar.png";

const NavbarIcons = () => {
  return (
    <div className="flex  gap-3 lg:gap-9  items-center justify-center text-white  lg:pl-16">
      <div>
        <img
          className=" w-[17.86px] h-[20px] lg:w-6 lg:h-5"
          src={messageIcon}
          alt=""
        />
      </div>
      <div className="hidden md:block ">
        <img className="w-5 h-5" src={heartIcon} alt="" />
        <p className="">wishlist</p>
      </div>
      <div>
        <CiShoppingCart className="w-[20px]  lg:w-5 h-[20px] lg:h-5 text-white  "></CiShoppingCart>
        <p className="hidden md:block">cart</p>
      </div>

      <div className="block md:hidden">
        <button className="w-14 h-7 bg-[#FFFFFF] py-2 px-4 text-black text-xs font-medium rounded-lg">
          Login
        </button>
      </div>

      <div className="hidden md:block">
        <img className="w-8 h-5 text-white" src={avatarIcon} alt="" />
        <p>profile</p>
      </div>
    </div>
  );
};

export default NavbarIcons;
