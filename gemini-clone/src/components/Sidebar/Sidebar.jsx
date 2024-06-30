import React, { useContext, useState, useEffect } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets/assets";
import { Context } from "../../Context/Context";
import SidebarBottomItem from "./SidebarBottomItem";
import PrevPrompts from "./PrevPrompts";
import Menu from "./Menu";
import NewChat from "./NewChat";

function Sidebar() {
  const [extended, setExtended] = useState(false);
  const { prevMsgs, newChat, setCurrentMsg, setCurrentMsgIndex, setShowResult } = useContext(Context);

  const loadMsg = (msgIndex) => {
    setShowResult(true);
    setCurrentMsg(prevMsgs[msgIndex]);
    setCurrentMsgIndex(msgIndex);
  };

  return (
    <div
      className={`sidebar sm:inline-flex flex-col justify-between dark:bg-gray-900 bg-slate-100 dark:text-slate-100 relative hidden sm:visible ${
        extended ? "extended" : ""
      }`}
    >
      <div className="top">
        <Menu
          extended={extended}
          icon={assets.menu_icon}
          setExtended={setExtended}
        />
        <NewChat
          extended={extended}
          icon={assets.plus_icon}
          newChat={newChat}
        />

        <div className="recent flex flex-col mt-5 gap-1">
          <p className={`recent-title mb-3 ml-3 ${extended ? "extended" : ""}`}>
            Recent
          </p>
          {prevMsgs.map((item, index) => (
            <PrevPrompts
              extended={extended}
              title={item[0].user}
              key={index}
              index={index}
              icon={assets.message_icon}
              loadMsg = {loadMsg}
            />
          ))}

        </div>
      </div>
      <div className="bottom flex flex-col gap-1">
        <SidebarBottomItem
          extended={extended}
          icon={assets.question_icon}
          text="Help"
        />
        <SidebarBottomItem
          extended={extended}
          icon={assets.history_icon}
          text="Activity"
        />
        <SidebarBottomItem
          extended={extended}
          icon={assets.setting_icon}
          text="Setting"
        />
      </div>
    </div>
  );
}

export default Sidebar;
