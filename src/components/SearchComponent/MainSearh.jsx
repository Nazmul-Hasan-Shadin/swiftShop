import { CiSearch } from "react-icons/ci";
import { GiCancel } from "react-icons/gi";
import "./MainSearch.css";
import SearchDropDown from "../SearchDropDown/SearchDropDown";

const MainSearch = () => {
  return (
    <div className="relative    items-center">
      <input style={{border:'none', outline:'none'}}
        className={`w-[590px]   px-24 rounded-lg h-14 relative block  inputBg}`}
        type="search"
      />
      <CiSearch className="absolute  top-1/3 left-10 h-5 w-5" />
      <GiCancel className="absolute  top-1/3 right-36 h-5 w-5 text-[#ABB2BA]"></GiCancel>
      <div className="right-0 absolute -translate-y-12">
        <SearchDropDown></SearchDropDown>
      </div>
    </div>
  );
};

export default MainSearch;
