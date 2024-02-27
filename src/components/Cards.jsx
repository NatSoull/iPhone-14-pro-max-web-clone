import React, { useEffect, useState } from "react";
import "./cards.css"
import { useSelector } from 'react-redux'

import card1DeepPurpleImg from "../img/card-1-deep-purple.jpg"
import card2DeepPurpleImg from "../img/card-2-deep-purple.jpg"
import card3DeepPurpleImg from "../img/card-3-deep-purple.jpg"
import card7DeepPurpleImg from "../img/card-7-deep-purple.jpg"
import card8DeepPurpleImg from "../img/card-8-deep-purple.jpg"
import card11DeepPurpleImg from "../img/card-11-deep-purple.jpg"
import card13DeepPurpleImg from "../img/card-13-deep-purple.jpg"


import card1GoldImg from "../img/card-1-gold.jpg"
import card2GoldImg from "../img/card-2-gold.jpg"
import card3GoldImg from "../img/card-3-gold.jpg"
import card5Img from "../img/card-5.jpg"
import card6Img from "../img/card-6.jpg"
import card7GoldImg from "../img/card-7-gold.jpg"
import card8GoldImg from "../img/card-8-gold.jpg"
import card9Img from "../img/card-9.jpg"
import card10Img from "../img/card-10.jpg"
import card11GoldImg from "../img/card-11-gold.jpg"
import card13GoldImg from "../img/card-13-gold.jpg"


import card1SilverImg from "../img/card-1-silver.jpg"
import card2SilverImg from "../img/card-2-silver.jpg"
import card3SilverImg from "../img/card-3-silver.jpg"
import card7SilverImg from "../img/card-7-silver.jpg"
import card8SilverImg from "../img/card-8-silver.jpg"
import card11SilverImg from "../img/card-11-silver.jpg"
import card13SilverImg from "../img/card-13-silver.jpg"


import card1BlackImg from "../img/card-1-black.jpg"
import card2BlackImg from "../img/card-2-black.jpg"
import card3BlackImg from "../img/card-3-black.jpg"
import card7BlackImg from "../img/card-7-black.jpg"
import card8BlackImg from "../img/card-8-black.jpg"
import card11BlackImg from "../img/card-11-black.jpg"
import card13BlackImg from "../img/card-13-black.jpg"



const Cards = () => {



  const scrolling = useSelector(state => state.scrolling.value)
  const colorActive = useSelector(state => state.colorActive.value)


  const [cardAllContents , setCardAllContents] = useState()


  const [activateCard1Animation, setActivateCard1Animation] = useState(false)
  const [activateCard2Animation, setActivateCard2Animation] = useState(false)
  const [activateCard3Animation, setActivateCard3Animation] = useState(false)
  const [activateCard4DeepPurpleAnimation, setActivateCard4DeepPurpleAnimation] = useState(false)
  const [activateCard4GoldAnimation, setActivateCard4GoldAnimation] = useState(false)
  const [activateCard4SilverAnimation, setActivateCard4SilverAnimation] = useState(false)
  const [activateCard4BlackAnimation, setActivateCard4BlackAnimation] = useState(false)
  const [activateCard7Animation, setActivateCard7Animation] = useState(false)
  const [activateCard8Animation, setActivateCard8Animation] = useState(false)
  const [activateCard13Animation, setActivateCard13Animation] = useState(false)


  window.addEventListener("scroll" , () => {
    if(window.scrollY >= 700){
      setActivateCard1Animation("card-1-animation")
    }
    if(window.scrollY >= 500){
      setActivateCard2Animation("card-2-animation")
    }
    if(window.scrollY >= 800){
      setActivateCard3Animation("card-3-animation")
      console.log("activated")
    }
    if(window.scrollY >= 1300){
      setActivateCard4DeepPurpleAnimation("card-4-deep-purple-animation")
      setActivateCard4GoldAnimation("card-4-gold-animation")
      setActivateCard4SilverAnimation("card-4-silver-animation")
      setActivateCard4BlackAnimation("card-4-black-animation")
    }
    if(window.scrollY >= 1600){
      setActivateCard7Animation("card-7-animation")
    }
    if(window.scrollY >= 2300){
      setActivateCard8Animation("card-8-animation")
    }
    if(window.scrollY >= 3200){
      setActivateCard13Animation("card-13-animation")
    }
  })


  useEffect(() => {
    setCardAllContents(cardAllContentsFunction())
  }, [scrolling , colorActive])



  const cardAllContentsFunction = () => {
    if (colorActive === "deepPurple") {
      return (
        <>
          <div className={`${activateCard1Animation} card-1  bg-black rounded-[25px] pt-10 flex flex-col justify-between items-center overflow-hidden`}>
            <h1 className="purple-text text-transparent text-4xl font-bold text-center">Meet <br /> Dynamic Island</h1>
            <div>
              <img className=" mx-auto h-[450px]" src={card1DeepPurpleImg} />
            </div>
          </div>
          <div className={`card-2 ${activateCard2Animation} bg-black rounded-[25px] flex items-end justify-center relative overflow-hidden`}>
            <img className=" absolute bottom-0 left-0" src={card2DeepPurpleImg} />
            <div className=" z-10 h-[90px]">
              <h3 className=" text-2xl font-bold">
                48MP main camera. <br />
                Mind-blowing detail.
              </h3>
            </div>
          </div>
          <div className={`card-3 ${activateCard3Animation} bg-black rounded-[25px] pt-10 ps-10 overflow-hidden`}>
            <h3 className=" purple-text text-4xl font-semibold text-transparent">
              The <br />
              Mastermind <br />
              behind it all.
            </h3>
            <img className=" mt-8" src={card3DeepPurpleImg} />
          </div>
          <div className={`card-4 ${activateCard4DeepPurpleAnimation} bg-black rounded-[25px] pt-14 ps-12 flex flex-col gap-5`}>
            <h3 className=" purple-text text-2xl font-bold text-transparent tracking-wide">A battery that's</h3>
            <div className="">
              <h1 content="all&nbsp;in," className=" text-6xl font-extrabold text-slate-900 mb-1 h-[70px] relative">all&nbsp;in,</h1>
              <h1 content="&nbsp;&nbsp;all&nbsp;day." className=" text-6xl font-extrabold text-slate-900 h-[70px] relative">&nbsp;&nbsp;all&nbsp;day.</h1>
            </div>
          </div>
          <div className={`card-7 ${activateCard7Animation} rounded-[25px] bg-black flex flex-col justify-between item-center overflow-hidden`}>
            <h3 className="purple-text mt-12 text-center text-4xl font-bold text-transparent">
              Always-On display. <br />
              A subtle way to stay <br />
              in the know.
            </h3>
            <div>
              <img className=" mx-auto" src={card7DeepPurpleImg} />
            </div>
          </div>
          <div className={` card-8 ${activateCard8Animation} rounded-[25px] bg-black pt-10 flex flex-col justify-between items-center overflow-hidden`}>
            <div className=" flex flex-col items-center gap-2">
              <h5 className=" text-white text-2xl font-semibold">Ceramic Shield</h5>
              <h3 className="purple-text text-transparent text-5xl font-semibold">
                Tougher than any <br />
                smartphone glass.
              </h3>
            </div>
            <img src={card8DeepPurpleImg} />
          </div>
          <div className=" card-9 rounded-[25px] bg-black py-16 flex flex-col justify-between">
            <div className="purple-text">
              <h3 className=" text-transparent text-5xl font-bold text-center mb-3">Water</h3>
              <h3 className=" text-transparent text-5xl font-bold text-center">resistance</h3>
            </div>
            <h5 className=" text-xl font-bold text-center">(Phew.)</h5>
          </div>
          <div className=" card-11 rounded-[25px] bg-black py-8 flex flex-col items-center justify-between">
            <h3 className=" text-2xl font-semibold">A camera in a class by itselfie.</h3>
            <img src={card11DeepPurpleImg} />
          </div>
          <div className=" card-12 card-12-purple rounded-[25px] bg-black flex justify-center items-center relative">
            <div>
              <h3 className="purple-text text-transparent text-5xl font-bold text-center">Crash Detaction</h3>
            </div>
          </div>
          <div className={` card-13 ${activateCard13Animation} rounded-[25px] bg-black flex overflow-hidden gap-10`}>
            <div className=" w-[52%] flex flex-col items-end justify-end">
              <div className=" flex flex-col items-center gap-1">
                <h1 className=" purple-text text-transparent text-5xl font-bold">6.7”</h1>
                <h3 className=" text-2xl font-bold">iPhone 14 Pro Max7</h3>
                <img className=" h-[190px] mt-5" src={card13DeepPurpleImg} />
              </div>
            </div>
            <div className=" w-[48%] flex flex-col items-start justify-end">
              <div className=" flex flex-col items-center gap-1">
                <h1 className=" purple-text text-transparent text-5xl font-bold">6.1”</h1>
                <h3 className=" text-2xl font-bold">iPhone 14 Pro7</h3>
                <img className=" -mb-8 mt-5" src={card13DeepPurpleImg} />
              </div>
            </div>
          </div>
        </>
      )
    } else if (colorActive === "gold") {
      return (
        <>
          <div className={`${activateCard1Animation} card-1  bg-black rounded-[25px] pt-10 flex flex-col justify-between items-center overflow-hidden`}>
            <h1 className="gold-text text-transparent text-4xl font-bold text-center">Meet <br /> Dynamic Island</h1>
            <div>
              <img className=" mx-auto h-[450px]" src={card1GoldImg} />
            </div>
          </div>
          <div className={`card-2 ${activateCard2Animation} bg-black rounded-[25px] flex items-end justify-center relative overflow-hidden`}>
            <img className=" absolute bottom-0 left-0" src={card2GoldImg} />
            <div className=" z-10 h-[90px]">
              <h3 className=" text-2xl font-bold">
                48MP main camera. <br />
                Mind-blowing detail.
              </h3>
            </div>
          </div>
          <div className={`card-3 ${activateCard3Animation} bg-black rounded-[25px] pt-10 ps-10 overflow-hidden`}>
            <h3 className=" gold-text text-4xl font-semibold text-transparent">
              The <br />
              Mastermind <br />
              behind it all.
            </h3>
            <img className=" mt-8" src={card3GoldImg} />
          </div>
          <div className={`card-4 ${activateCard4GoldAnimation} bg-black rounded-[25px] pt-14 ps-12 flex flex-col gap-5`}>
            <h3 className=" gold-text text-2xl font-bold text-transparent tracking-wide">A battery that's</h3>
            <div className="">
              <h1 content="all&nbsp;in," className=" text-6xl font-extrabold text-slate-900 mb-1 h-[70px] relative">all&nbsp;in,</h1>
              <h1 content="&nbsp;&nbsp;all&nbsp;day." className=" text-6xl font-extrabold text-slate-900 h-[70px] relative">&nbsp;&nbsp;all&nbsp;day.</h1>
            </div>
          </div>
          <div className={`card-7 ${activateCard7Animation} rounded-[25px] bg-black flex flex-col justify-between item-center overflow-hidden`}>
            <h3 className="gold-text mt-12 text-center text-4xl font-bold text-transparent">
              Always-On display. <br />
              A subtle way to stay <br />
              in the know.
            </h3>
            <div>
              <img className=" mx-auto" src={card7GoldImg} />
            </div>
          </div>
          <div className={` card-8 ${activateCard8Animation} rounded-[25px] bg-black pt-10 flex flex-col justify-between items-center overflow-hidden`}>
            <div className=" flex flex-col items-center gap-2">
              <h5 className=" text-white text-2xl font-semibold">Ceramic Shield</h5>
              <h3 className="gold-text text-transparent text-5xl font-semibold">
                Tougher than any <br />
                smartphone glass.
              </h3>
            </div>
            <img src={card8GoldImg} />
          </div>
          <div className=" card-9 rounded-[25px] bg-black py-16 flex flex-col justify-between">
            <div className="gold-text">
              <h3 className=" text-transparent text-5xl font-bold text-center mb-3">Water</h3>
              <h3 className=" text-transparent text-5xl font-bold text-center">resistance</h3>
            </div>
            <h5 className=" text-xl font-bold text-center">(Phew.)</h5>
          </div>
          <div className=" card-11 rounded-[25px] bg-black py-8 flex flex-col items-center justify-between">
            <h3 className=" text-2xl font-semibold">A camera in a class by itselfie.</h3>
            <img src={card11GoldImg} />
          </div>
          <div className=" card-12 card-12-gold rounded-[25px] bg-black flex justify-center items-center relative">
            <div>
              <h3 className="gold-text text-transparent text-5xl font-bold text-center">Crash Detaction</h3>
            </div>
          </div>
          <div className={` card-13 ${activateCard13Animation} rounded-[25px] bg-black flex overflow-hidden gap-10`}>
            <div className=" w-[52%] flex flex-col items-end justify-end">
              <div className=" flex flex-col items-center gap-1">
                <h1 className=" gold-text text-transparent text-5xl font-bold">6.7”</h1>
                <h3 className=" text-2xl font-bold">iPhone 14 Pro Max7</h3>
                <img className=" h-[190px] mt-5" src={card13GoldImg} />
              </div>
            </div>
            <div className=" w-[48%] flex flex-col items-start justify-end">
              <div className=" flex flex-col items-center gap-1">
                <h1 className=" gold-text text-transparent text-5xl font-bold">6.1”</h1>
                <h3 className=" text-2xl font-bold">iPhone 14 Pro7</h3>
                <img className=" -mb-8 mt-5" src={card13GoldImg} />
              </div>
            </div>
          </div>
        </>
      )
    } else if (colorActive === "silver") {
      return (
        <>
          <div className={`${activateCard1Animation} card-1  bg-black rounded-[25px] pt-10 flex flex-col justify-between items-center overflow-hidden`}>
            <h1 className="silver-text text-transparent text-4xl font-bold text-center">Meet <br /> Dynamic Island</h1>
            <div>
              <img className=" mx-auto h-[450px]" src={card1SilverImg} />
            </div>
          </div>
          <div className={`card-2 ${activateCard2Animation} bg-black rounded-[25px] flex items-end justify-center relative overflow-hidden`}>
            <img className=" absolute bottom-0 left-0" src={card2SilverImg} />
            <div className=" z-10 h-[90px]">
              <h3 className=" text-2xl font-bold">
                48MP main camera. <br />
                Mind-blowing detail.
              </h3>
            </div>
          </div>
          <div className={`card-3 ${activateCard3Animation} bg-black rounded-[25px] pt-10 ps-10 overflow-hidden`}>
            <h3 className=" silver-text text-4xl font-semibold text-transparent">
              The <br />
              Mastermind <br />
              behind it all.
            </h3>
            <img className=" mt-8" src={card3SilverImg} />
          </div>
          <div className={`card-4 ${activateCard4SilverAnimation} bg-black rounded-[25px] pt-14 ps-12 flex flex-col gap-5`}>
            <h3 className=" silver-text text-2xl font-bold text-transparent tracking-wide">A battery that's</h3>
            <div className="">
              <h1 content="all&nbsp;in," className=" text-6xl font-extrabold text-slate-900 mb-1 h-[70px] relative">all&nbsp;in,</h1>
              <h1 content="&nbsp;&nbsp;all&nbsp;day." className=" text-6xl font-extrabold text-slate-900 h-[70px] relative">&nbsp;&nbsp;all&nbsp;day.</h1>
            </div>
          </div>
          <div className={`card-7 ${activateCard7Animation} rounded-[25px] bg-black flex flex-col justify-between item-center overflow-hidden`}>
            <h3 className="silver-text mt-12 text-center text-4xl font-bold text-transparent">
              Always-On display. <br />
              A subtle way to stay <br />
              in the know.
            </h3>
            <div>
              <img className=" mx-auto" src={card7SilverImg} />
            </div>
          </div>
          <div className={` card-8 ${activateCard8Animation} rounded-[25px] bg-black pt-10 flex flex-col justify-between items-center overflow-hidden`}>
            <div className=" flex flex-col items-center gap-2">
              <h5 className=" text-white text-2xl font-semibold">Ceramic Shield</h5>
              <h3 className="silver-text text-transparent text-5xl font-semibold">
                Tougher than any <br />
                smartphone glass.
              </h3>
            </div>
            <img src={card8SilverImg} />
          </div>
          <div className=" card-9 rounded-[25px] bg-black py-16 flex flex-col justify-between">
            <div className="silver-text">
              <h3 className=" text-transparent text-5xl font-bold text-center mb-3">Water</h3>
              <h3 className=" text-transparent text-5xl font-bold text-center">resistance</h3>
            </div>
            <h5 className=" text-xl font-bold text-center">(Phew.)</h5>
          </div>
          <div className=" card-11 rounded-[25px] bg-black py-8 flex flex-col items-center justify-between">
            <h3 className=" text-2xl font-semibold">A camera in a class by itselfie.</h3>
            <img src={card11SilverImg} />
          </div>
          <div className=" card-12 card-12-silver rounded-[25px] bg-black flex justify-center items-center relative">
            <div>
              <h3 className="silver-text text-transparent text-5xl font-bold text-center">Crash Detaction</h3>
            </div>
          </div>
          <div className={` card-13 ${activateCard13Animation} rounded-[25px] bg-black flex overflow-hidden gap-10`}>
            <div className=" w-[52%] flex flex-col items-end justify-end">
              <div className=" flex flex-col items-center gap-1">
                <h1 className=" silver-text text-transparent text-5xl font-bold">6.7”</h1>
                <h3 className=" text-2xl font-bold">iPhone 14 Pro Max7</h3>
                <img className=" h-[190px] mt-5" src={card13SilverImg} />
              </div>
            </div>
            <div className=" w-[48%] flex flex-col items-start justify-end">
              <div className=" flex flex-col items-center gap-1">
                <h1 className=" silver-text text-transparent text-5xl font-bold">6.1”</h1>
                <h3 className=" text-2xl font-bold">iPhone 14 Pro7</h3>
                <img className=" -mb-8 mt-5" src={card13SilverImg} />
              </div>
            </div>
          </div>
        </>
      )
    } else if (colorActive === `black`) {
      return (
        <>
          <div className={`${activateCard1Animation} card-1  bg-black rounded-[25px] pt-10 flex flex-col justify-between items-center overflow-hidden`}>
            <h1 className="black-text text-transparent text-4xl font-bold text-center">Meet <br /> Dynamic Island</h1>
            <div>
              <img className=" mx-auto h-[450px]" src={card1BlackImg} />
            </div>
          </div>
          <div className={`card-2 ${activateCard2Animation} bg-black rounded-[25px] flex items-end justify-center relative overflow-hidden`}>
            <img className=" absolute bottom-0 left-0" src={card2BlackImg} />
            <div className=" z-10 h-[90px]">
              <h3 className=" text-2xl font-bold">
                48MP main camera. <br />
                Mind-blowing detail.
              </h3>
            </div>
          </div>
          <div className={`card-3 ${activateCard3Animation} bg-black rounded-[25px] pt-10 ps-10 overflow-hidden`}>
            <h3 className=" black-text text-4xl font-semibold text-transparent">
              The <br />
              Mastermind <br />
              behind it all.
            </h3>
            <img className=" mt-8" src={card3BlackImg} />
          </div>
          <div className={`card-4 ${activateCard4BlackAnimation} bg-black rounded-[25px] pt-14 ps-12 flex flex-col gap-5`}>
            <h3 className=" black-text text-2xl font-bold text-transparent tracking-wide">A battery that's</h3>
            <div className="">
              <h1 content="all&nbsp;in," className=" text-6xl font-extrabold text-slate-900 mb-1 h-[70px] relative">all&nbsp;in,</h1>
              <h1 content="&nbsp;&nbsp;all&nbsp;day." className=" text-6xl font-extrabold text-slate-900 h-[70px] relative">&nbsp;&nbsp;all&nbsp;day.</h1>
            </div>
          </div>
          <div className={`card-7 ${activateCard7Animation} rounded-[25px] bg-black flex flex-col justify-between item-center overflow-hidden`}>
            <h3 className="black-text mt-12 text-center text-4xl font-bold text-transparent">
              Always-On display. <br />
              A subtle way to stay <br />
              in the know.
            </h3>
            <div>
              <img className=" mx-auto" src={card7BlackImg} />
            </div>
          </div>
          <div className={` card-8 ${activateCard8Animation} rounded-[25px] bg-black pt-10 flex flex-col justify-between items-center overflow-hidden`}>
            <div className=" flex flex-col items-center gap-2">
              <h5 className=" text-white text-2xl font-semibold">Ceramic Shield</h5>
              <h3 className="black-text text-transparent text-5xl font-semibold">
                Tougher than any <br />
                smartphone glass.
              </h3>
            </div>
            <img src={card8BlackImg} />
          </div>
          <div className=" card-9 rounded-[25px] bg-black py-16 flex flex-col justify-between">
            <div className={`black-text`}>
              <h3 className=" text-transparent text-5xl font-bold text-center mb-3">Water</h3>
              <h3 className=" text-transparent text-5xl font-bold text-center">resistance</h3>
            </div>
            <h5 className=" text-xl font-bold text-center">(Phew.)</h5>
          </div>
          <div className=" card-11 rounded-[25px] bg-black py-8 flex flex-col items-center justify-between">
            <h3 className=" text-2xl font-semibold">A camera in a class by itselfie.</h3>
            <img src={card11BlackImg} />
          </div>
          <div className=" card-12 card-12-black rounded-[25px] bg-black flex justify-center items-center relative">
            <div>
              <h3 className="black-text text-transparent text-5xl font-bold text-center">Crash Detaction</h3>
            </div>
          </div>
          <div className={` card-13 ${activateCard13Animation} rounded-[25px] bg-black flex overflow-hidden gap-10`}>
            <div className=" w-[52%] flex flex-col items-end justify-end">
              <div className=" flex flex-col items-center gap-1">
                <h1 className=" black-text text-transparent text-5xl font-bold">6.7”</h1>
                <h3 className=" text-2xl font-bold">iPhone 14 Pro Max7</h3>
                <img className=" h-[190px] mt-5" src={card13BlackImg} />
              </div>
            </div>
            <div className=" w-[48%] flex flex-col items-start justify-end">
              <div className=" flex flex-col items-center gap-1">
                <h1 className=" black-text text-transparent text-5xl font-bold">6.1”</h1>
                <h3 className=" text-2xl font-bold">iPhone 14 Pro7</h3>
                <img className=" -mb-8 mt-5" src={card13BlackImg} />
              </div>
            </div>
          </div>
        </>
      )
    }
  }






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

            {cardAllContents}







            <div className="card-5 bg-black rounded-[25px] flex justify-center items-end pb-6">
              <div className=" text-center flex flex-col gap-1">
                <h5 className=" text-xl font-semibold">Pro video</h5>
                <h3 className=" text-4xl font-bold">Film like a Pro</h3>
              </div>
            </div>

            <div className="card-6 rounded-[25px] relative overflow-hidden z-10">
              <img className=" absolute top-0 left-0 h-full -z-10" src={card6Img} />
              <div className="h-[40%] w-[100%] z-10 text-center flex flex-col gap-1 pt-14">
                <h5 className=" text-2xl font-bold">Action mode</h5>
                <h3 className=" text-4xl font-bold">Shaky shots,</h3>
                <h3 className=" text-4xl font-bold">stable video.</h3>
              </div>
            </div>







            <div className=" card-10 rounded-[25px] bg-black relative overflow-hidden z-10">
              <img className=" absolute h-full top-0 left-0 object-cover -z-10" src={card10Img} />
              <h3 className=" text-white mt-10 text-center text-4xl font-bold tracking-wide">
                Emergency SOS <br />
                via satellite
              </h3>
            </div>

            

            

           

          </div>


          <div className=" py-10">
            <h1 className=" text-5xl font-bold mb-3">Ways to save</h1>
            <h1 className=" text-5xl font-bold">on iPhone.</h1>
            <p className=" text-5xl font-bold">Pro Gyi & WATCH DOG</p>
          </div>

          <div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Cards;
