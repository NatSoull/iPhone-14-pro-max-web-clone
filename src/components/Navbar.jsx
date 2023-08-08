import React from "react";
import { AiFillApple, AiOutlineSearch } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" max-w-[1000px] mx-auto">
      <div className=" flex justify-between items-center g-5 py-2">
        <Link className=" text-black">
          <AiFillApple />
        </Link>
        <div className=" cursor-pointer select-none">Store</div>
        <div className=" cursor-pointer select-none">Mac</div>
        <div className=" cursor-pointer select-none">iPad</div>
        <div className=" cursor-pointer select-none">iPhone</div>
        <div className=" cursor-pointer select-none">Watch</div>
        <div className=" cursor-pointer select-none">Vision</div>
        <div className=" cursor-pointer select-none">AirPods</div>
        <div className=" cursor-pointer select-none text-nowrap">TV & Home</div>
        <div className=" cursor-pointer select-none">Entertainment</div>
        <div className=" cursor-pointer select-none">Accessories</div>
        <div className=" cursor-pointer select-none">Support</div>
        <AiOutlineSearch />
        <BsBag />
      </div>

      <div className=" flex justify-between items-center my-3">
        <h4 className=" text-2xl font-bold">iPhone 14 Pro</h4>
        <div className="flex gap-4">
          <button className="">Overview</button>
          <button className="">Switch from Android to iPhone</button>
          <button className="">Tech Specs</button>
          <button className="py-1 px-3 bg-blue-600 rounded-3xl text-white text-sm">
            buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
