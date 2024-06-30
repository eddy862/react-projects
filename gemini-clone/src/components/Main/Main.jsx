import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets/assets";
import { Context } from "../../Context/Context";
import Navbar from "./Navbar";
import Greet from "./Greet";
import Card from "./Card";
import Result from "./Result";
import Search from "./Search";
import BottomInfo from "./BottomInfo";

function Main() {
  const {
    onSent,
    showResult,
    input,
    setInput,
    currentMsg,
    imgSrc,
    setImgSrc,
    setFile
  } = useContext(Context);

  return (
    <div className="main flex-1 relative dark:bg-gray-950">
      <Navbar icon={assets.user_icon} />
      <div className="main-container m-auto p-5">
        {!showResult ? (
          <>
            <Greet />
            <div className="cards grid grid-cols-1 sm:grid-cols-4 gap-4">
              <Card
                icon={assets.compass_icon}
                text="What's the reaction to and impact of autonomous vehicles"
                setInput={setInput}
              />
              <Card
                icon={assets.bulb_icon}
                text="Settle a debate: how shold you store bread?"
                setInput={setInput}
              />
              <Card
                icon={assets.message_icon}
                text="Plan a low-carb meal with what's available my fringe"
                setInput={setInput}
              />
              <Card
                icon={assets.code_icon}
                text="Help write SQL to generate a report"
                setInput={setInput}
              />
            </div>
          </>
        ) : (
          <div className="result-container overflow-y-scroll">
            {currentMsg.map((item, index) => (
              <Result
                key={index}
                userIcon={assets.user_icon}
                GeminiIcon={assets.gemini_icon}
                message={item}
              />
            ))}
          </div>
        )}
      </div>

      <div className="main-bottom m-auto absolute w-full px-5 py-0">
        <Search
          input={input}
          setInput={setInput}
          onSent={onSent}
          imgIcon={assets.gallery_icon}
          micIcon={assets.mic_icon}
          sendIcon={assets.send_icon}
          imgSrc={imgSrc}
          setImgSrc={setImgSrc}
          setFile={setFile}
        />
        <BottomInfo />
      </div>
    </div>
  );
}

export default Main;
