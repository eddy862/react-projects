import React from "react";
import { Link } from "react-router-dom";
import { type Genre } from "./GenreDetail";

type Props = {};

const genres: {name: Genre, poster: string}[] = [
  {
    name: "action",
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    name: "comedy",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    name: "drama",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
  },
  {
    name: "horror",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_SX300.jpg",
  },
  {
    name: "romance",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
  },
  {
    name: "scifi",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    name: "fantasy",
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    name: "thriller",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    name: "mystery",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTczNDk4NTQ0OV5BMl5BanBnXkFtZTcwNDAxMDgxNw@@._V1_SX300.jpg",
  },
  {
    name: "adventure",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg",
  },
  {
    name: "animation",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg",
  },
  {
    name: "documentary",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjAwMjU5NTAzOF5BMl5BanBnXkFtZTgwMjQwODQxMDI@._V1_SX300.jpg",
  },
];

const Genres: React.FC = (props: Props) => {
  return (
    <div className="h-full w-full">
      <div className="text-2xl font-bold mb-4">Genres</div>
      <ul className="grid grid-cols-4 gap-5">
        {genres.map((genre, index) => (
          <Link to={`/genre/${genre.name.toLowerCase()}`}>
            <div className="group py-2 bg-white rounded-lg shadow-lg flex flex-col items-center" key={index}>
              <div className="h-60 w-40 mb-2 overflow-hidden rounded-md">
                <img className="group-hover:scale-110 transition w-full h-full object-cover" src={genre.poster} alt="" />
              </div>
              <div className="font-semibold text-xl capitalize">{genre.name}</div>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Genres;
