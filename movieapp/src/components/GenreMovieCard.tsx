import React from "react";
import { type Movie } from "./MovieDetails";
import { Link } from "react-router-dom";

type Props = {
  movie: Movie;
};

const GenreMovieCard: React.FC<Props> = ({movie}: Props) => {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div className="flex items-center mb-4 bg-white rounded-xl overflow-hidden shadow-lg h-44">
        <div className="w-36 h-full overflow-hidden">
          <img className="w-full h-full object-cover" src={movie.Poster} alt="" />
        </div>
        <div className="flex flex-col gap-3 flex-1 py-3 px-5">
          <div className="inline-flex items-center divide-x-2 divide-slate-400">
            <div className="pr-4 font-semibold">{movie.imdbRating}/10</div>
            <div className="pl-4">
              <div className="font-bold text-lg">
                {movie.Title} ({movie.Year})
              </div>
              <div className="text-slate-500">{movie.Released}</div>
            </div>
          </div>
          <div>{movie.Plot}</div>
        </div>
      </div>
    </Link>
  );
};

export default GenreMovieCard;
