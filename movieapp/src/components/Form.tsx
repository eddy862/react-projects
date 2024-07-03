import React, { ChangeEvent, useEffect, useState, useRef } from "react";
import axios from "axios";
import AutoSuggestion from "./AutoSuggestion";
import useDebounce from "../hook/useDebounce";
import History from "./History";

type Props = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

export type Search = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

const Form: React.FC<Props> = ({ setInput, input }: Props) => {
  const [suggestions, setSuggestion] = useState<Search[] | undefined>([]);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const [noSuggestions, setNoSuggestions] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  const debouncedQuery = useDebounce(input, 500);

  useEffect(() => {
    const fetchSuggestion = async (query: string): Promise<void> => {
      setLoadingSuggestions(true);
      setNoSuggestions(false);

      try {
        const res = await axios.get(
          `https://www.omdbapi.com/?apikey=1685660f&s=${query}`
        );
        const data: Search[] | undefined = res.data.Search;
        setSuggestion(data);
        data === undefined && setNoSuggestions(true);
      } catch (err) {
        console.error("Error fetching suggestion: ", err);
      } finally {
        setLoadingSuggestions(false);
      }
    };

    if (debouncedQuery.trim().length >= 4) {
      fetchSuggestion(debouncedQuery.trim());
    } else {
      setSuggestion([]);
      setLoadingSuggestions(false);
      setNoSuggestions(false);
    }
  }, [debouncedQuery]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if (e.target.value.trim().length === 0) {
      setShowHistory(true);
    } else {
      setShowHistory(false);
    }
  };

  const sugRef = useRef<HTMLDivElement>(null);
  const histRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      sugRef.current &&
      !sugRef.current.contains(e.target as Node) &&
      histRef.current &&
      !histRef.current.contains(e.target as Node) &&
      inputRef.current &&
      !inputRef.current.contains(e.target as Node)
    ) {
      setShowHistory(false);
      setLoadingSuggestions(false);
      setSuggestion([]);
      setNoSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex justify-center">
      <form action="" className="flex relative">
        <input
          type="text"
          placeholder="Enter movie title"
          className="outline-none px-4 py-2 rounded-full border-2 border-emerald-400 focus:outline-4 focus:outline-sky-400 focus:outline-offset-0 bg-transparent"
          value={input}
          onChange={handleInputChange}
          onFocus={(e) => e.target.value.length === 0 && setShowHistory(true)}
          ref={inputRef}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 absolute translate-x-1/2 translate-y-1/2 right-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </form>
      <AutoSuggestion
        suggestions={suggestions}
        setSuggestion={setSuggestion}
        loadingSuggestions={loadingSuggestions}
        setLoadingSuggestions={setLoadingSuggestions}
        noSuggestions={noSuggestions}
        setNoSuggestions={setNoSuggestions}
        setInput={setInput}
        setShowHistory={setShowHistory}
        refer={sugRef}
      />
      <History showHistory={showHistory} refer={histRef}/>
    </div>
  );
};

export default Form;
