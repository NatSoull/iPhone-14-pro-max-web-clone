import React, { useEffect } from "react";
import "./hero.css";
import iPhone14ProMaxBlack from "../img/iPhone-14-pro-max(black).jpg";
import iPhone14ProMaxSilver from "../img/iPhone-14-pro-max(silver).jpg";
import iPhone14ProMaxGold from "../img/iPhone-14-pro-max(gold).jpg";
import iPhone14ProMaxDeepPurple from "../img/iPhone-14-pro-max(deep-purple).jpg";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { changeColorActive } from "../feature/services/colorActiveSlice"

const Hero = () => {
  const [iPhone14ProMaxDeepPurpleClass, SetIPhone14ProMaxDeepPurpleClass] =
    useState("fade-off");
  const [iPhone14ProMaxGoldClass, SetIPhone14ProMaxGoldClass] =
    useState("fade-on -z-10 ");
  const [iPhone14ProMaxSilverClass, SetIPhone14ProMaxSilverClass] =
    useState("fade-on -z-10");
  const [iPhone14ProMaxBlackClass, SetIPhone14ProMaxBlackClass] =
    useState("fade-on -z-10");

  const colorActive = useSelector(state => state.colorActive.value)
  // console.log(colorActive)
  const dispatch = useDispatch()

  const [changeColorText, setChangeColorText] = useState("Deep Purple");

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
    dispatch(changeColorActive("deepPurple"))
    setChangeColorText("Deep Purple");
  };

  const clickedGold = () => {
    SetIPhone14ProMaxDeepPurpleClass("fade-on");
    SetIPhone14ProMaxGoldClass("fade-off");
    SetIPhone14ProMaxSilverClass("fade-on");
    SetIPhone14ProMaxBlackClass("fade-on");
    dispatch(changeColorActive("gold"))
    setChangeColorText("Gold");
  };

  const clickedSilver = () => {
    SetIPhone14ProMaxDeepPurpleClass("fade-on");
    SetIPhone14ProMaxGoldClass("fade-on");
    SetIPhone14ProMaxSilverClass("fade-off");
    SetIPhone14ProMaxBlackClass("fade-on");
    dispatch(changeColorActive("silver"))
    setChangeColorText("Silver");
  };

  const clickedBlack = () => {
    SetIPhone14ProMaxDeepPurpleClass("fade-on");
    SetIPhone14ProMaxGoldClass("fade-on");
    SetIPhone14ProMaxSilverClass("fade-on");
    SetIPhone14ProMaxBlackClass("fade-off");
    dispatch(changeColorActive("black"))
    setChangeColorText("Black");
  };

  // const [fadeOff, setFadeOff] = useState("deepPurple")


  return (
    <div className="mx-3 md:mx-auto">
      <div
        className=" text-center gray py-5 border-t text-xl font-semibold md:font-bold border-top"
        style={{ borderColor: " rgb(208, 208, 208)" }}
      >
        Get $200-$640 in credit toward iPhone 14 Pro when <br /> you trade in
        iPhone 11 or higher.
        <a> Shop iPhone </a>
      </div>

      <div className=" max-w-[1000px] mx-auto flex justify-between items-center mt-10 mb-24">
        <h1 className=" text-5xl md:text-7xl font-bold">Pro. Beyond.</h1>
        <div className=" flex gap-2 items-center top-0 right-0">
          <div className=" text-lg font-semibold mr-5">{changeColorText}</div>
          <div
            onClick={() => clickedDeepPurple()}
            className={`${colorActive === "deepPurple" ? "active" : null} w-5 h-5 bg-purple-500 rounded-full cursor-pointer select-none iphone-color-selector relative `}
          ></div>
          <div
            onClick={() => clickedGold()}
            className={`${colorActive === "gold" ? "active" : null} w-5 h-5 bg-yellow-100 rounded-full cursor-pointer select-none iphone-color-selector relative`}
          ></div>
          <div
            onClick={() => clickedSilver()}
            className={`${colorActive === "silver" ? "active" : null} w-5 h-5 bg-slate-100 rounded-full cursor-pointer select-none iphone-color-selector relative `}
          ></div>
          <div
            onClick={() => clickedBlack()}
            className={`${colorActive === "black" ? "active" : null} w-5 h-5 bg-gray-900 rounded-full cursor-pointer select-none iphone-color-selector relative `}
          ></div>
        </div>
      </div>

      <div className=" relative bg-black h-[570px] max-w-[770px] mx-auto">
        <img
          className={`${iPhone14ProMaxDeepPurpleClass} absolute top-0`}
          src={iPhone14ProMaxDeepPurple}
        />
        <img
          className={`${iPhone14ProMaxGoldClass} absolute top-0`}
          src={iPhone14ProMaxGold}
        />
        <img
          className={`${iPhone14ProMaxSilverClass} absolute top-0`}
          src={iPhone14ProMaxSilver}
        />
        <img
          className={`${iPhone14ProMaxBlackClass} absolute top-0`}
          src={iPhone14ProMaxBlack}
        />
      </div>

      
    </div>
  );
};

export default Hero;
