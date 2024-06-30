import React, { useRef, useState } from "react";
import TextForm from "./TextForm";

function Search({ input, onSent, setInput, imgIcon, micIcon, sendIcon, imgSrc, setImgSrc, setFile }) {
  const [fileName, setFileName] = useState("");

  const imgInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgSrc(reader.result);
      };
      reader.readAsDataURL(file);
      setFile(file);
      setFileName(file.name);
    }
  };

  const removeFile = () => {
    setImgSrc("");
    setFile("");
  }

  return (
    <div
      className={`search-box flex items-center justify-between gap-2 dark:bg-gray-900 bg-slate-100 ${
        imgSrc ? "rounded-xl" : "rounded-full"
      } px-5 py-2 has-[:focus]:bg-slate-200 dark:has-[:focus]:bg-gray-800 dark:text-slate-100`}
    >
      <div className="flex flex-1 flex-col gap-3 p-3">
        <TextForm input={input} setInput={setInput} onSent={onSent} />
        {imgSrc && (
          <div className="group input-img p-1 w-fit bg-slate-300 rounded-md relative">
            <img src={imgSrc} />
            {fileName && (
              <span className="tooltip-text absolute bg-slate-700 text-center p-0.5 px-2 rounded-md text-white">
                {fileName}
              </span>
            )}
            <span
              className="absolute text-white bg-black opacity-20 w-5 h-5 flex items-center justify-center right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2 rounded-full cross cursor-pointer hover:opacity-70"
              onClick={removeFile}
            >
              &#10006;
            </span>
          </div>
        )}
      </div>
      <div className="flex items-center">
        <div className="search-img relative">
          <input
            className="hidden"
            type="file"
            accept="image/*"
            ref={imgInputRef}
            onChange={handleFileChange}
          />
          <img
            className="p-3 hover:bg-slate-300 dark:hover:bg-gray-500 rounded-full"
            src={imgIcon}
            alt=""
            onClick={() => imgInputRef.current.click()}
          />
          <span className="tooltip-text absolute bg-slate-700 text-center p-0.5 px-2 rounded-md text-white">
            Upload image
          </span>
        </div>
        <div className="search-img relative">
          <img
            className="p-3 hover:bg-slate-300 dark:hover:bg-gray-500 rounded-full"
            src={micIcon}
            alt=""
          />
          <span className="tooltip-text absolute bg-slate-700 text-center p-0.5 px-2 rounded-md text-white">
            Use microphone
          </span>
        </div>
        <div className="search-img relative">
          <img
            className="p-3 hover:bg-slate-300 dark:hover:bg-gray-500 rounded-full"
            src={sendIcon}
            alt=""
            onClick={() => onSent()}
          />
          <span className="tooltip-text absolute bg-slate-700 text-center p-0.5 px-2 rounded-md text-white">
            Submit
          </span>
        </div>
      </div>
    </div>
  );
}

export default Search;
