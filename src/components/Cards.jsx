import React, { useEffect, useState } from "react";
import "./cards.css"
import card1GoldImg from "../img/card-1-gold.jpg"
import cardGold2Img from "../img/card-2-gold.jpg"
import cardGold3Img from "../img/card-3-gold.jpg"
import cardGold5Img from "../img/card-5.jpg"
import cardGold6Img from "../img/card-6.jpg"
import cardGold7Img from "../img/card-7-gold.jpg"
import cardGold8Img from "../img/card-8-gold.jpg"
import cardGold9Img from "../img/card-9.jpg"
import cardGold10Img from "../img/card-10.jpg"
import cardGold11Img from "../img/card-11-gold.jpg"
import cardGold13Img from "../img/card-13-gold.jpg"
import { useSelector } from 'react-redux'

import card1DeepPurpleImg from "../img/card-1-deepPurple.jpg"

const Cards = () => {

  const [trackingScroll, setTrackingScroll] = useState(0)

  

  addEventListener("scroll" , e => {
    const scrolled = scrollY
    setTrackingScroll(scrolled)
  })

  // console.log(trackingScroll)

  const colorActive = useSelector(state => state.colorActive.value)

  const [card1AllContents, setCard1AllContents] = useState(``)



  const card1AllContentsFunction = () => {
    if(colorActive === "deepPurple"){
      return (
        `<div className= ${trackingScroll >= 700 ? "card-1-animation" : null}"card-1  bg-black rounded-[25px] pt-10 flex flex-col justify-between items-center overflow-hidden">
          <h1 className="purple-text text-transparent text-4xl font-bold text-center"">Meet <br /> Dynamic Island</h1>
            <div>
              <img className=" mx-auto h-[450px]" src={card1DeepPurpleImg}/>
            </div>
        </div>`
      )
    }else if(colorActive === "gold"){
      return (
        `<div className= ${trackingScroll >= 700 ? "card-1-animation" : null}"card-1  bg-black rounded-[25px] pt-10 flex flex-col justify-between items-center overflow-hidden">
          <h1 className="gold-text text-transparent text-4xl font-bold text-center"">Meet <br /> Dynamic Island</h1>
            <div>
              <img className=" mx-auto h-[450px]" src={card1GoldImg}/>
            </div>
        </div>`
      )
    }
  }

  useEffect(() => {
    setCard1AllContents(card1AllContentsFunction())
  } , [])
  


  return (
    <div>
      <div className=" gray pt-20">
        <div className=" max-w-[1000px] mx-auto">

          <div className=" pb-20 text-center">
            <h1 className=" text-3xl font-semibold text-center mb-3">
              iPhone 14 Pro and iPhone 14 Pro Max
            </h1>
            <p className=" text-lg font-semibold text-center text-bit-white">
              From $999 or $41.62/mo. for 24 mo. before trade‑in*
            </p>
            <button className=" bg-blue-600 py-1 px-4 rounded-full text-white mt-10 text-lg">
              Buy
            </button>
          </div>

          <div className="grid-card-group mb-20">

          {card1AllContents}

            <div className={`card-2 ${trackingScroll >= 500 ? "card-2-animation" : null} bg-black rounded-[25px] flex items-end justify-center relative overflow-hidden`}>
              <img className=" absolute bottom-0 left-0" src={card2Img}/>
                <div className=" z-10 h-[90px]">
                  <h3 className=" text-2xl font-bold">
                    48MP main camera. <br />
                    Mind-blowing detail.
                  </h3>
                </div>
            </div>

            <div className={`card-3 ${trackingScroll >= 800 ? "card-3-animation" : null} bg-black rounded-[25px] pt-10 ps-10 overflow-hidden`}>
                <h3 className=" gold-text text-4xl font-semibold text-transparent">
                  The <br/>
                  Mastermind <br/>
                  behind it all.
                </h3>
                <img className=" mt-8" src={card3Img}/>
            </div>

            <div className={`card-4 ${trackingScroll >= 1300 ? "card-4-gold-animation" : null} bg-black rounded-[25px] pt-14 ps-12 flex flex-col gap-5`}>
              <h3 className=" gold-text text-2xl font-bold text-transparent tracking-wide">A battery that's</h3>
              <div className="">
                <h1 content="all&nbsp;in," className=" text-6xl font-extrabold text-slate-900 mb-1 h-[70px] relative">all&nbsp;in,</h1>
                <h1 content="&nbsp;&nbsp;all&nbsp;day." className=" text-6xl font-extrabold text-slate-900 h-[70px] relative">&nbsp;&nbsp;all&nbsp;day.</h1>
              </div>
            </div>

            <div className="card-5 bg-black rounded-[25px] flex justify-center items-end pb-6">
              <div className=" text-center flex flex-col gap-1">
                <h5 className=" text-xl font-semibold">Pro video</h5>
                <h3 className=" text-4xl font-bold">Film like a Pro</h3>
              </div>
            </div>

            <div className="card-6 rounded-[25px] relative overflow-hidden z-10">
              <img className=" absolute top-0 left-0 h-full -z-10" src={card6Img}/>
              <div className="h-[40%] w-[100%] z-10 text-center flex flex-col gap-1 pt-14">
                <h5 className=" text-2xl font-bold">Action mode</h5>
                <h3 className=" text-4xl font-bold">Shaky shots,</h3>
                <h3 className=" text-4xl font-bold">stable video.</h3>
              </div>
            </div>

            <div className={`card-7 ${trackingScroll >= 1600 ? "card-7-animation" : null} rounded-[25px] bg-black flex flex-col justify-between item-center overflow-hidden`}>
              <h3 className="gold-text mt-12 text-center text-4xl font-bold text-transparent">
                Always-On display. <br />
                A subtle way to stay <br />
                in the know.
              </h3>
              <div>
                <img className=" mx-auto" src={card7Img}/>
              </div>
            </div>

            <div className={` card-8 ${trackingScroll >= 2300 ? "card-8-animation" : null} rounded-[25px] bg-black pt-10 flex flex-col justify-between items-center overflow-hidden`}>
              <div className=" flex flex-col items-center gap-2">
                <h5 className=" text-white text-2xl font-semibold">Ceramic Shield</h5>
                <h3 className="gold-text text-transparent text-5xl font-semibold">
                  Tougher than any <br />
                  smartphone glass.
                </h3>
              </div>
              <img src={card8Img}/>
            </div>

            <div className=" card-9 rounded-[25px] bg-black py-16 flex flex-col justify-between">
              <div className="gold-text">
                <h3 className=" text-transparent text-5xl font-bold text-center mb-3">Water</h3>
                <h3 className=" text-transparent text-5xl font-bold text-center">resistance</h3>
              </div>
              <h5 className=" text-xl font-bold text-center">(Phew.)</h5>
            </div>

            <div className=" card-10 rounded-[25px] bg-black relative overflow-hidden z-10">
              <img className=" absolute h-full top-0 left-0 object-cover -z-10" src={card10Img}/>
              <h3 className=" text-white mt-10 text-center text-4xl font-bold tracking-wide">
                Emergency SOS <br />
                via satellite
              </h3>
            </div>

            <div className=" card-11 rounded-[25px] bg-black py-8 flex flex-col items-center justify-between">
              <h3 className=" text-2xl font-semibold">A camera in a class by itselfie.</h3>
              <img src={card11Img}/>
            </div>

            <div className=" card-12 rounded-[25px] bg-black flex justify-center items-center relative">
              <div>
                <h3 className="gold-text text-transparent text-5xl font-bold text-center">Crash Detaction</h3>      
              </div>
            </div>

            <div className={` card-13 ${trackingScroll >= 3200 ? "card-13-animation" : null} rounded-[25px] bg-black flex overflow-hidden gap-10`}>
              <div className=" w-[52%] flex flex-col items-end justify-end">
                <div className=" flex flex-col items-center gap-1">
                  <h1 className=" gold-text text-transparent text-5xl font-bold">6.7”</h1>
                  <h3 className=" text-2xl font-bold">iPhone 14 Pro Max7</h3>
                  <img className=" h-[190px] mt-5" src={card13Img}/>
                </div>
              </div>
              <div className=" w-[48%] flex flex-col items-start justify-end">
                <div className=" flex flex-col items-center gap-1">
                  <h1 className=" gold-text text-transparent text-5xl font-bold">6.1”</h1>
                  <h3 className=" text-2xl font-bold">iPhone 14 Pro7</h3>
                  <img className=" -mb-8 mt-5" src={card13Img}/>
                </div>
              </div>
            </div>

          </div>


          <div className=" py-10">
            <h1 className=" text-5xl font-bold mb-3">Ways to save</h1>
            <h1 className=" text-5xl font-bold">on iPhone.</h1>
          </div>

          <div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Cards;
