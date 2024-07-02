import React, { useContext } from "react";
import { Context } from "../context/Context";
import "./Favourites.css";
import { useNavigate } from "react-router-dom";

type Props = {};

const Favourite: React.FC = (props: Props) => {
  const context = useContext(Context);

  if (!context) {
    return <div>Context is not available</div>;
  }

  const { favorites, setFavorites } = context;

  const removeFav = (id: string | undefined) => {
    const updatedFavs = favorites?.filter((movie) =>
      movie.id === id ? null : movie
    );

    setFavorites(updatedFavs);
  };

  const navigate = useNavigate();

  const handleClickTitle = (id: string | undefined) => {
    navigate(`/movie/${id}`);
  };

  return (
    <>
      {favorites?.length === 0 || favorites === undefined ? (
        <p>No favorite movies</p>
      ) : (
        <div className="w-full h-full">
          {favorites?.map((movie, index) => (
            <div
              key={index}
              className="flex items-center mb-5 bg-white rounded-xl overflow-hidden shadow-lg h-52"
            >
              <div className="w-36 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={movie.imgUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-3 flex-1 py-3 px-5">
                <div className="inline-flex items-center divide-x-2 divide-slate-400">
                  <div className="pr-4 font-semibold">{movie.rate}/10</div>
                  <div className="pl-4">
                    <div
                      className="font-bold text-lg hover:text-blue-500 cursor-pointer"
                      onClick={() => handleClickTitle(movie.id)}
                    >
                      {movie.title} ({movie.year})
                    </div>
                    <div className="text-slate-500">{movie.release}</div>
                  </div>
                </div>
                <div className="favourite-plot">{movie.plot}</div>
                <div>
                  <button
                    className="bg-gray-500 hover:bg-gray-400 px-4 py-2 rounded-full font-bold text-white"
                    onClick={() => removeFav(movie.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Favourite;
