import React from "react";
import { type Search } from "./Form";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

type Props = {
  suggestions: Search[] | undefined;
  loadingSuggestions: boolean;
  noSuggestions: boolean;
  clickItem: (id: string, title: string, year: string) => void;
  refer: React.RefObject<HTMLDivElement>;
};

const AutoSuggestion: React.FC<Props> = ({
  suggestions,
  loadingSuggestions,
  noSuggestions,
  clickItem,
  refer,
}: Props) => {
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
                  clickItem(
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
