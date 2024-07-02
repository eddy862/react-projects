import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { Context } from "../context/Context";
import { type Favorite } from "../context/Context";

type Props = {};

type Movie = {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Ratings: string;
  Released: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
};

function MovieDetails({}: Props) {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState<Movie | undefined>(undefined);

  const { movieId } = useParams<{movieId: string}>();

  const context = useContext(Context);

  if (!context) {
    return <div>Context is not available</div>;
  }

  const { favorites, setFavorites } = context;

  const addToFav = (newFav: Favorite) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites) {
        return [newFav];
      }

      return [...prevFavorites, newFav]
    });
  };

  const movieExistInFavs = (id: string | undefined): boolean => {
    if (favorites) {
      return favorites?.some((item) => item.id === id);
    }

    return false;
  };

  useEffect(() => {
    const fetchMovie = async () => {
      setMovie(undefined);
      setLoading(true);
      try {
        const res = await axios.get(
          `https://www.omdbapi.com/?apikey=1685660f&i=${movieId}&plot=full`
        );
        const data = res.data;
        setMovie(data);
      } catch (err) {
        console.log("Error fetching movie details", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="w-full h-full">
          <div
            className="flex gap-10 p-6 rounded-xl"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
          >
            <div className="w-80">
              <img className="rounded-lg" src={movie?.Poster} alt="" />
            </div>
            <div className="inline-flex flex-col flex-1 gap-2">
              <div className="text-3xl font-bold">
                {movie?.Title}{" "}
                <span className="font-semibold text-gray-500">
                  ({movie?.Year})
                </span>
              </div>
              <div className="flex divide-x-2 divide-slate-400">
                <div className="pr-5">{movie?.Released}</div>
                <div className="px-5">{movie?.Genre}</div>
                <div className="pl-5">{movie?.Runtime}</div>
              </div>
              <div className="flex items-center gap-4">
                <Box sx={{ width: "30%" }}>
                  <LinearProgress
                    variant="determinate"
                    value={parseFloat(movie?.imdbRating || "0") * 10}
                  />
                </Box>
                {movie?.imdbRating}/10
              </div>
              <div>
                <button
                  className={`text-white font-bold px-5 py-2 rounded-full ${
                    !movieExistInFavs(movie?.imdbID)
                      ? "bg-yellow-500 hover:scale-105 transition active:bg-yellow-300"
                      : "bg-gray-500 cursor-default"
                  } `}
                  onClick={() =>
                    addToFav({
                      title: movie?.Title,
                      plot: movie?.Plot,
                      rate: movie?.imdbRating,
                      release: movie?.Released,
                      year: movie?.Year,
                      id: movie?.imdbID,
                      imgUrl: movie?.Poster
                    })
                  }
                  disabled={movieExistInFavs(movie?.imdbID)}
                >
                  {!movieExistInFavs(movie?.imdbID)
                    ? "Add To favorites"
                    : "Added to Favorites"}
                </button>
              </div>
              <div className="text-xl font-bold">Overview</div>
              <div className="inline-block">{movie?.Plot}</div>
              <div className="flex gap-10">
                <div>
                  <div className="font-bold">{movie?.Director}</div>
                  <div>Director</div>
                </div>
                <div>
                  <div className="font-bold">{movie?.Writer}</div>
                  <div>Writer</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-6 gap-6 p-6 rounded-xl bg-white">
            <div className="grid grid-cols-3 gap-y-2">
              <div>
                <div className="font-bold">Country</div>
                <div>{movie?.Country}</div>
              </div>
              <div>
                <div className="font-bold">Language</div>
                <div>{movie?.Language}</div>
              </div>
              <div>
                <div className="font-bold">Awards</div>
                <div>{movie?.Awards}</div>
              </div>
              <div>
                <div className="font-bold">Revenue</div>
                <div>{movie?.BoxOffice}</div>
              </div>
              <div>
                <div className="font-bold">Metascore</div>
                <div>{movie?.Metascore}</div>
              </div>
              <div>
                <div className="font-bold">DVD</div>
                <div>{movie?.DVD}</div>
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold">Actors</div>
              <div className="flex divide-x-2 divide-slate-400 mt-2">
                {movie?.Actors.split(", ").map((actor, index) => (
                  <div
                    key={index}
                    className={`px-5 ${index === 0 ? "pl-0" : ""}`}
                  >
                    {actor}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieDetails;
