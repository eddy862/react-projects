import React from "react";

function Result({ userIcon, GeminiIcon, message }) {
  return (
    <div className="result my-10 dark:text-slate-100">
      <div className="result-title flex items-center gap-5 mb-6">
        <img src={userIcon} alt="" />
        <p>{message.user}</p>
      </div>
      {message.imgSrc && <img className="w-60 mb-8 rounded-xl" src={message.imgSrc}/>}
      <div className="result-data flex items-start gap-5">
        <img src={GeminiIcon} alt="" />
        {message.loading ? (
          <div className="loader flex flex-col gap-3 w-full">
            <hr />
            <hr />
            <hr />
          </div>
        ) : (
          <p className="result-content" dangerouslySetInnerHTML={{ __html: message.model }}></p>
        )}
      </div>
    </div>
  );
}

export default Result;


