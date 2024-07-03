import React, { useContext } from "react";
import { Search } from "./Form";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import { type History } from "../context/Context";

type Props = {
  suggestions: Search[] | undefined;
  setSuggestion: React.Dispatch<React.SetStateAction<Search[] | undefined>>;
  loadingSuggestions: boolean;
  setLoadingSuggestions: React.Dispatch<React.SetStateAction<boolean>>;
  noSuggestions: boolean;
  setNoSuggestions: React.Dispatch<React.SetStateAction<boolean>>;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setShowHistory: React.Dispatch<React.SetStateAction<boolean>>;
  refer: React.RefObject<HTMLDivElement>;
};

const AutoSuggestion: React.FC<Props> = ({
  suggestions,
  loadingSuggestions,
  noSuggestions,
  setLoadingSuggestions,
  setSuggestion,
  setNoSuggestions,
  setInput,
  setShowHistory,
  refer,
}: Props) => {
  const context = useContext(Context);

  if (!context) {
    return <div>Context is not available</div>;
  }

  const { setHistory, history } = context;

  const navigate = useNavigate();

  const handleSelect = (id: string, title: string, year: string) => {
    navigate(`/movie/${id}`);
    setLoadingSuggestions(false);
    setSuggestion([]);
    setNoSuggestions(false);
    setInput("");
    setShowHistory(false);

    if (!history?.some((item) => item.id === id)) {
      const newHist: History = { id: id, title: title, year: year };
      setHistory((prev) => {
        if (!prev) {
          return [newHist];
        }

        return prev.length === 10 ? [...prev.slice(1), newHist] : [...prev, newHist];
      });
    }
  };

  return (
    <div
      className="absolute top-10 min-w-full bg-slate-900 rounded-b-md text-white"
      ref={refer}
    >
      {!loadingSuggestions ? (
        !noSuggestions ? (
          <ul className="divide-y-2 divide-slate-600 z-50">
            {suggestions?.map((suggestion) => (
              <li
                className="py-2 px-4 hover:bg-slate-700 cursor-pointer text-nowrap"
                key={suggestion.imdbID}
                onClick={() =>
                  handleSelect(
                    suggestion.imdbID,
                    suggestion.Title,
                    suggestion.Year
                  )
                }
              >
                {suggestion.Title}{" "}
                <span className="text-sm text-slate-300 ml-3">
                  {suggestion.Year}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center p-3" style={{ width: "100%" }}>
            No result
          </p>
        )
      ) : (
        <Box
          sx={{ display: "flex", justifyContent: "center", padding: "0.75rem" }}
        >
          <CircularProgress size={30} color="success" />
        </Box>
      )}
    </div>
  );
};

export default AutoSuggestion;
