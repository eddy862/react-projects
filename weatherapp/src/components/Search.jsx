import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import AutoSuggestion from "./AutoSuggestion";
import APIkey from "../APIkey";
import axios from "axios";
import { proxyUrl } from "../APIkey";

function Search() {
  const { query, setQuery } = useContext(Context);

  const [suggestions, setSuggestions] = useState([]);
  const [loadingSuggestiona, setLoadingSuggestiona] = useState(false);
  const [noResult, setNoResult] = useState(false);

  const handleQuery = (e) => {
    setQuery(e.target.value);

    const fetchSuggestion = async () => {
      setNoResult(false);
      setLoadingSuggestiona(true);
      try {
        const res = await axios.get(
          proxyUrl +
            `https://api.weatherapi.com/v1/search.json?key=${APIkey}&q=${e.target.value}`
        );
        const data = res.data;
        setSuggestions(data);
        if (data.length === 0) {
          setNoResult(true);
        } else {
          setNoResult(false);
        }
      } catch (err) {
        console.error("Error fetching autocomplete suggestions: ", err);
      } finally {
        setLoadingSuggestiona(false);
      }
    };

    if (e.target.value.trim().length >= 4) {
      fetchSuggestion();
    } else {
      setSuggestions([]);
      setNoResult(false);
    }
  };

  return (
    <div className="relative md:w-96">
      <input
        className="bg-blue-200 outline-none px-3 py-2 rounded-full w-full"
        type="text"
        value={query}
        onChange={(e) => handleQuery(e)}
        placeholder="Search city"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
        className="absolute right-5 top-3"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
      </svg>
      <ul className="absolute bg-white w-full divide-y">
        {!loadingSuggestiona ? (
          suggestions.map((item) => (
            <AutoSuggestion
              key={item.id}
              item={item}
              setSuggestions={setSuggestions}
            />
          ))
        ) : (
          <p className="p-3 text-center">Loading...</p>
        )}
        {noResult && <p className="p-3 text-center">No Result Found</p>}
      </ul>
    </div>
  );
}

export default Search;
