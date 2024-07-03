import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import "./Favourites.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FavoriteCard from "./FavoriteCard";

type Props = {};

type Filter = "Date Added" | "Release Date" | "Rating";

const Favourite: React.FC = ({}: Props) => {
  //check context and handle remove items
  const context = useContext(Context);

  if (!context) {
    return <div>Context is not available</div>;
  }

  const { favorites, setFavorites } = context;

  //handle open filter menu
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClickFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  //order logics
  const orderByDate = (ascending: boolean = true) => {
    const sortedList = favorites?.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return ascending ? dateA - dateB : dateB - dateA;
    });

    setFavorites(sortedList);
    setAnchorEl(null);
    setSelectedFilter("Date Added");
  };

  const orderByReleaseDate = (ascending: boolean = true) => {
    const sortedList = favorites?.sort((a, b) => {
      const dateA = a.release
        ? new Date(a.release.split(" ").reverse().join(" "))
        : new Date(0);
      const dateB = b.release
        ? new Date(b.release.split(" ").reverse().join(" "))
        : new Date(0);
      return ascending
        ? dateA.getTime() - dateB.getTime()
        : dateB.getTime() - dateA.getTime();
    });

    setFavorites(sortedList);
    setAnchorEl(null);
    setSelectedFilter("Release Date");
  };

  const orderByRating = (ascending: boolean= true) => {
    const sortedList = favorites?.sort((a, b) => {
      const ratingA = a.rate && a.rate !== "N/A" ? parseFloat(a.rate) : 0;
      const ratingB = b.rate && b.rate !== "N/A" ? parseFloat(b.rate) : 0;

      return ascending ? ratingA - ratingB : ratingB - ratingA;
    });

    setFavorites(sortedList);
    setAnchorEl(null);
    setSelectedFilter("Rating");
  };

  //handle select asc or dsc
  const [isAsc, setIsAsc] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState<Filter>("Date Added");

  const handleChangeOrder = () => {
    setIsAsc((prev) => !prev);
    switch (selectedFilter) {
      case "Date Added":
        orderByDate(!isAsc);
        break;
      case "Rating":
        orderByRating(!isAsc);
        break;
      case "Release Date":
        orderByReleaseDate(!isAsc);
    }
  };

  return (
    <>
      {favorites?.length === 0 || favorites === undefined ? (
        <p className="text-xl font-semibold">No favorite movies</p>
      ) : (
        <div className="w-full h-full">
          <div className="flex items-center justify-between mb-3">
            <div className="text-2xl font-bold">My Favorites</div>
            <div className="inline-flex items-center gap-5">
              <div className="inline-flex items-center gap-0">
                <div>
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClickFilter}
                  >
                    filter by:
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    <MenuItem onClick={() => orderByDate(isAsc)}>Date Added</MenuItem>
                    <MenuItem onClick={() => orderByReleaseDate(isAsc)}>
                      Release Date
                    </MenuItem>
                    <MenuItem onClick={() => orderByRating(isAsc)}>Rating</MenuItem>
                  </Menu>
                </div>
                <div className="capitalize text-slate-500">{selectedFilter}</div>
              </div>
              <div className="inline-flex items-center gap-2">
                <div className="uppercase text-blue-700">Order:</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={`size-4 cursor-pointer text-slate-500 hover:text-green-600 ${
                    !isAsc ? "rotate-180" : ""
                  }`}
                  onClick={() => handleChangeOrder()}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  />
                </svg>
              </div>
            </div>
          </div>
          {favorites?.map((movie, index) => (
            <FavoriteCard key={index} movie={movie}/>
          ))}
        </div>
      )}
    </>
  );
};

export default Favourite;
