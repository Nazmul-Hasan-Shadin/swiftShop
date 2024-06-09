import { CiSearch } from "react-icons/ci";
import { GiCancel } from "react-icons/gi";
import "./MainSearch.css";
import SearchDropDown from "../SearchDropDown/SearchDropDown";

const MainSearch = () => {
  return (
    <div className="relative    items-center">
      <input style={{border:'none', outline:'none'}}
        className={` w-full sm:w-[328px] lg:w-[590px]  h-9 lg:h-14 px-12 lg:px-24 rounded-lg  relative block  inputBg}`}
        type="search"
      />
      <CiSearch className="absolute top-1/4 lg:top-1/3  left-3 lg:left-10 h-5 w-5" />
      <GiCancel className="absolute  top-1/3 right-40 lg:right-36 h-4 lg:h-5 w-4 lg:w-5 text-[#ABB2BA]"></GiCancel>
      <div className="right-0 absolute -translate-y-[38px] lg:-translate-y-12">
        <SearchDropDown></SearchDropDown>
      </div>
    </div>
  );
};

export default MainSearch;
