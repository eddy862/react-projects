import React, { useContext } from "react";
import { Context } from "../context/Context";

type Props = {
  showHistory: boolean;
  refer: React.RefObject<HTMLDivElement>;
  clickItem: (id: string, title: string, year: string) => void;
};

const HistoryList: React.FC<Props> = ({
  showHistory,
  refer,
  clickItem,
}: Props) => {
  const context = useContext(Context);

  if (!context) {
    return <div>Context is not available</div>;
  }

  const { history } = context;

  return (
    <div
      className="absolute top-10 min-w-full bg-slate-900 rounded-b-md text-white"
      ref={refer}
    >
      {!(history === undefined || history.length === 0) && showHistory && (
        <>
          <p className="px-3 py-2 text-sm font-semibold text-slate-300">
            History (Recent 10 result)
          </p>
          <ul className="divide-y-2 divide-slate-600 z-50">
            {history.map((history) => (
              <li
                key={history.id}
                className="py-2 px-4 hover:bg-slate-700 cursor-pointer text-nowrap"
                onClick={() => clickItem(history.id, history.title, history.year)}
              >
                {history.title}
                <span className="text-sm text-slate-300 ml-3">
                  {history.year}
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default HistoryList;
