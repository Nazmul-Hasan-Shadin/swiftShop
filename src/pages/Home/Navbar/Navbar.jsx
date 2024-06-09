import logo from "../../../assets/logo.png";

import { CiMenuFries } from "react-icons/ci";


import Container from "../../../Container/Container";

import MainSearch from "../../../components/SearchComponent/MainSearh";
import NavbarIcons from "../../../components/NavbarIcons/NavbarIcons";

const Navbar = () => {
  return (
    <div className="bg-primary pb-[77px] h-32 sm:h-32 md:h-24  lg:p-5">
      <Container className={"px-4"}>
        <div className="flex justify-between  lg:flex-row pt-7 md:pt-0 ">
           {/* ================left side of Navvbar  */}
          <div className="flex  items-center gap-2.5 lg:gap-9   lg:pr-14">
            <CiMenuFries className="text-white text-xl  lg:text-2xl  font-bold"></CiMenuFries>
            <div className="">
              <img className=" w-28 h-7 lg:w-44 lg:h-10" src={logo} alt="" />
            </div>
          </div>

          {/* ==============search bar================ */}
          <div className=" hidden md:block">
            <MainSearch></MainSearch>
          </div>
          {/*========== icon side=============  */}

          <NavbarIcons></NavbarIcons>
        </div>
        <div className=" block md:hidden pt-7">
          <MainSearch></MainSearch>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
