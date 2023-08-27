import React from "react";
import { AiFillApple, AiOutlineSearch } from "react-icons/ai";
import { BsBag , BsList } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" max-w-[1000px] lg:mx-auto mx-3">
      <div className=" flex justify-between items-center g-5 py-2">
        <Link className=" text-black text-2xl">
          <AiFillApple />
        </Link>
        <div className=" md:inline hidden cursor-pointer select-none">
          Store
        </div>
        <div className=" md:inline hidden cursor-pointer select-none">Mac</div>
        <div className=" md:inline hidden cursor-pointer select-none">iPad</div>
        <div className=" md:inline hidden cursor-pointer select-none">
          iPhone
        </div>
        <div className=" md:inline hidden cursor-pointer select-none">
          Watch
        </div>
        <div className=" md:inline hidden cursor-pointer select-none">
          Vision
        </div>
        <div className=" md:inline hidden cursor-pointer select-none">
          AirPods
        </div>
        <div className=" md:inline hidden cursor-pointer select-none text-nowrap">
          TV & Home
        </div>
        <div className=" md:inline hidden cursor-pointer select-none">
          Entertainment
        </div>
        <div className=" md:inline hidden cursor-pointer select-none">
          Accessories
        </div>
        <div className=" md:inline hidden cursor-pointer select-none">
          Support
        </div>
        <div className=" flex gap-3">
          <AiOutlineSearch className=" text-lg"/>
          <BsBag className=" text-lg"/>
          <BsList className=" text-lg md:hidden"/>
        </div>
      </div>

      <div className=" flex justify-between items-center my-3 px-2">
        <h4 className=" text-lg md:text-2xl font-bold">iPhone 14 Pro</h4>
        <div className=" gap-4 flex">
          <button className=" hidden md:inline">Overview</button>
          <button className=" hidden md:inline">Switch from Android to iPhone</button>
          <button className=" hidden md:inline">Tech Specs</button>
          <button className="py-1 px-3 bg-blue-600 rounded-3xl text-white text-sm">
            buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
