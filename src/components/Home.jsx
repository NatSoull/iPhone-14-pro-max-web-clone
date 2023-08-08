import React, { useEffect } from "react";
import "./home.css";
import iPhone14ProMaxBlack from "../img/iPhone-14-pro-max(black).jpg";
import iPhone14ProMaxSilver from "../img/iPhone-14-pro-max(silver).jpg";
import iPhone14ProMaxGold from "../img/iPhone-14-pro-max(gold).jpg";
import iPhone14ProMaxDeepPurple from "../img/iPhone-14-pro-max(deep-purple).jpg";
import { useState } from "react";

const Home = () => {
  const [iPhone14ProMaxDeepPurpleClass, SetIPhone14ProMaxDeepPurpleClass] =
    useState("");
  const [iPhone14ProMaxGoldClass, SetIPhone14ProMaxGoldClass] = useState("fade-on");
  const [iPhone14ProMaxSilverClass, SetIPhone14ProMaxSilverClass] =
    useState("fade-on");
  const [iPhone14ProMaxBlackClass, SetIPhone14ProMaxBlackClass] = useState("fade-on");

  const [deepPurpleActive, setDeepPurpleActive] = useState("active");
  const [goldActive, setGoldActive] = useState("");
  const [silverActive, setSilverActive] = useState("");
  const [blackActive, setBlackActive] = useState("");

  const [changeColorText , setChangeColorText] = useState("Deep Purple")

  // useEffect(() => {
  //   SetIPhone14ProMaxGoldClass("hidden");
  //   SetIPhone14ProMaxSilverClass("hidden");
  //   SetIPhone14ProMaxBlackClass("hidden");
  // }, []);

  const clickedDeepPurple = () => {
    SetIPhone14ProMaxDeepPurpleClass("fade-off");
    SetIPhone14ProMaxGoldClass("fade-on");
    SetIPhone14ProMaxSilverClass("fade-on");
    SetIPhone14ProMaxBlackClass("fade-on");
    setDeepPurpleActive("active");
    setGoldActive("");
    setSilverActive("");
    setBlackActive("");
    setChangeColorText("Deep Purple")
  };

  const clickedGold = () => {
    SetIPhone14ProMaxDeepPurpleClass("fade-on");
    SetIPhone14ProMaxGoldClass("fade-off");
    SetIPhone14ProMaxSilverClass("fade-on");
    SetIPhone14ProMaxBlackClass("fade-on");
    setDeepPurpleActive("");
    setGoldActive("active");
    setSilverActive("");
    setBlackActive("");
    setChangeColorText("Gold")
  };

  const clickedSilver = () => {
    SetIPhone14ProMaxDeepPurpleClass("fade-on");
    SetIPhone14ProMaxGoldClass("fade-on");
    SetIPhone14ProMaxSilverClass("fade-off");
    SetIPhone14ProMaxBlackClass("fade-on");
    setDeepPurpleActive("");
    setGoldActive("");
    setSilverActive("active");
    setBlackActive("");
    setChangeColorText("Silver")
  };

  const clickedBlack = () => {
    SetIPhone14ProMaxDeepPurpleClass("fade-on");
    SetIPhone14ProMaxGoldClass("fade-on");
    SetIPhone14ProMaxSilverClass("fade-on");
    SetIPhone14ProMaxBlackClass("fade-off");
    setDeepPurpleActive("");
    setGoldActive("");
    setSilverActive("");
    setBlackActive("active");
    setChangeColorText("Black")
  };

  return (
    <div className="">
      <div
        className=" text-center gray py-5 border-t text-xl font-bold border-top"
        style={{ borderColor: " rgb(208, 208, 208)" }}
      >
        Get $200-$640 in credit toward iPhone 14 Pro when <br /> you trade in
        iPhone 11 or higher.
        <a> Shop iPhone </a>
      </div>

      <div className=" max-w-[1000px] mx-auto flex justify-between items-center mt-10 mb-24">
        <h1 className=" text-7xl font-bold">Pro. Beyond.</h1>
        <div className=" flex gap-2 items-center">
          <div className=" text-lg font-semibold mr-5">{changeColorText}</div>
          <div
            onClick={() => clickedDeepPurple()}
            className={` w-5 h-5 bg-purple-500 rounded-full cursor-pointer select-none iphone-color-selector relative ${deepPurpleActive}`}
          ></div>
          <div
            onClick={() => clickedGold()}
            className={` w-5 h-5 bg-yellow-100 rounded-full cursor-pointer select-none iphone-color-selector relative ${goldActive}`}
          ></div>
          <div
            onClick={() => clickedSilver()}
            className={` w-5 h-5 bg-slate-100 rounded-full cursor-pointer select-none iphone-color-selector relative ${silverActive}`}
          ></div>
          <div
            onClick={() => clickedBlack()}
            className={` w-5 h-5 bg-gray-900 rounded-full cursor-pointer select-none iphone-color-selector relative ${blackActive}`}
          ></div>
        </div>
      </div>

      <div className=" relative border border-black h-[570px] w-[770px] mx-auto">
        <img
          className={` ${iPhone14ProMaxDeepPurpleClass} absolute top-0 z-10`}
          src={iPhone14ProMaxDeepPurple}
        />
        <img
          className={` ${iPhone14ProMaxGoldClass} absolute top-0`}
          src={iPhone14ProMaxGold}
        />
        <img
          className={` ${iPhone14ProMaxBlackClass} absolute top-0`}
          src={iPhone14ProMaxBlack}
        />
        <img
          className={` ${iPhone14ProMaxSilverClass} absolute top-0`}
          src={iPhone14ProMaxSilver}
        />
      </div>

      <div className=" gray">
        <div className=" py-20 text-center">
          <h1 className=" text-3xl font-semibold text-center mb-3">iPhone 14 Pro and iPhone 14 Pro Max</h1>
          <p className=" text-lg font-semibold text-center text-bit-white">From $999 or $41.62/mo. for 24 mo. before trade‑in*</p>
          <button className=" bg-blue-600 py-1 px-4 rounded-full text-white mt-10 text-lg">Buy</button>
        </div>
        <div>
          cart
        </div>
      </div>
    </div>
  );
};

export default Home;
