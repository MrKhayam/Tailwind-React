import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <div className="w-[90%] lg:h-16 h-14 mt-5 flex items-center justify-between px-5 lg:px-12 bg-white rounded-lg mx-auto">
        <div className="logo md:font-semibold md:text-lg lg:text-2xl">
          <h1>Logo</h1>
        </div>
        <div className="icon md:hidden">
          <CgMenuRight className="text-2xl" onClick={handleClick} />
        </div>
        <ul className="md:flex items-center gap-4 lg:gap-10 hidden">
          <li className="text-md font-semibold cursor-pointer lg:text-lg">Home</li>
          <li className="text-md font-semibold cursor-pointer lg:text-lg">About</li>
          <li className="text-md font-semibold cursor-pointer lg:text-lg">Portfolio</li>
          <li className="text-md font-semibold cursor-pointer lg:text-lg">Contact</li>
        </ul>
        <div
          className={`${
            isClicked ? "block" : "hidden"
          } md:hidden absolute w-[150px] min-h-[150px] bg-[#383838] top-[10%] right-[5%] rounded-lg border border-[#fff] py-7 px-3`}
        >
          <ul className="flex flex-col w-full h-full px-4 gap-3 ">
            <li className="text-white text-xl cursor-pointer">Home</li>
            <li className="text-white text-xl cursor-pointer">About</li>
            <li className="text-white text-xl cursor-pointer">Portfolio</li>
            <li className="text-white text-xl cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
