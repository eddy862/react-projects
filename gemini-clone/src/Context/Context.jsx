import { createContext, useState } from "react";
import { run } from "../config/gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [currentMsg, setCurrentMsg] = useState([]);
  const [prevMsgs, setPrevMsgs] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentMsgIndex, setCurrentMsgIndex] = useState(0);
  const [numMsg, setNumMsg] = useState(1);
  const [imgSrc, setImgSrc] = useState("");
  const [file, setFile] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const newChat = () => {
    setShowResult(false);
    setCurrentMsg([]);
    setNumMsg(prevMsgs.length + 1);
  };

  const onSent = async () => {
    if (input.trim() && !loading) {
      const newMessage = { user: input, model: null, loading: true, imgSrc: file ? imgSrc : null };
      setCurrentMsg((prev) => [...prev, newMessage]);

      setLoading(true);
      setInput("");
      setShowResult(true);
      setImgSrc("");
      setFile("");

      let response;

      response = file ? await run(input, currentMsg, file) : await run(input, currentMsg);

      //insert bold tag when encounter '**'
      const newString1 = codeBlock(boldFont(response));

      //insert break tag when encounter '*'
      const newString2 = newString1.split("*").join("<br/>");

      const msgWithResp = { user: input, model: newString2, loading: false, imgSrc: file ? imgSrc : null }

      setCurrentMsg((prev) =>
        prev.map((msg, index) =>
          index === prev.length - 1
            ? msgWithResp
            : msg
        )
      );

      setLoading(false);
      //should use a map with index of current msg
      setPrevMsgs((prev) => {
        const updatedPrevMsgs = [...prev];
        if (!updatedPrevMsgs[numMsg - 1]) {
          updatedPrevMsgs[numMsg - 1] = [
            ...currentMsg,
            msgWithResp,
          ];
        } else {
          updatedPrevMsgs[currentMsgIndex] = [
            ...updatedPrevMsgs[currentMsgIndex],
            msgWithResp,
          ];
        }
        return updatedPrevMsgs;
      });
    }
  };

  const boldFont = (string) => {
    const responseArray = string.split("**");
    let newString = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i % 2 === 0) {
        newString += responseArray[i];
      } else {
        newString += "<b>" + responseArray[i] + "</b>";
      }
    }
    return newString;
  };

  const codeBlock = (string) => {
    const responseArray = string.split("```");
    let newString = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i % 2 === 0) {
        newString += responseArray[i];
      } else {
        newString += "<code>" + responseArray[i] + "</code><br/>";
      }
    }
    return newString;
  };

  const contextValue = {
    input,
    setInput,
    showResult,
    setShowResult,
    onSent,
    newChat,
    currentMsg,
    setCurrentMsg,
    prevMsgs,
    setPrevMsgs,
    currentMsgIndex,
    setCurrentMsgIndex,
    loading,
    setLoading,
    imgSrc,
    setImgSrc,
    file,
    setFile,
    isDarkMode,
    setIsDarkMode
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
