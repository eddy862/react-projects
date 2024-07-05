import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { type Movie } from "./MovieDetails";
import GenreMovieCard from "./GenreMovieCard";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import GenreDetailSkeleton from "./GenreDetailSkeleton";

const genreKeywords: Record<Genre, string[]> = {
  action: ["action", "fight", "battle", "war"],
  comedy: ["comedy", "funny", "humor", "laugh"],
  drama: ["drama", "serious", "emotional"],
  horror: ["horror", "scary", "fear"],
  romance: ["romance", "love", "relationship"],
  scifi: ["sci-fi", "science fiction", "future"],
  fantasy: ["fantasy", "magic", "myth"],
  thriller: ["thriller", "suspense", "intense"],
  mystery: ["mystery", "detective", "investigation"],
  adventure: ["adventure", "journey", "explore"],
  animation: ["animation", "cartoon", "animated"],
  documentary: ["documentary", "real", "true story"],
};

export type Genre =
  | "action"
  | "comedy"
  | "drama"
  | "horror"
  | "romance"
  | "scifi"
  | "fantasy"
  | "thriller"
  | "mystery"
  | "adventure"
  | "animation"
  | "documentary";

type Props = {};

const removeLetter = (str: string, letter: string): string => {
  const regex = new RegExp(letter, "gi");
  return str.replace(regex, "");
};

const GenreDetail: React.FC = ({}: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [allMovieLoaded, setAllMovieLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10;

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;

  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const totalPages = Math.ceil(movies.length / moviesPerPage);

  const { genreName } = useParams<{ genreName: Genre }>();

  useEffect(() => {
    const fetchMovieByGenre = async (genre: Genre) => {
      const keywords = genreKeywords[genre];
      let movies: any[] = [];
      setLoading(true);

      try {
        for (const keyword of keywords) {
          const res = await axios.get(
            `https://www.omdbapi.com/?apikey=1685660f&s=${keyword}`
          );
          const data = res.data.Search;
          movies = [...movies, data];
        }
      } catch (err) {
        console.error("Error fetching movies by genre: ", err);
      } finally {
        setLoading(false);
      }

      return movies;
    };

    const filterMoviesByExactGenre = async (movies: any[], genre: string) => {
      setAllMovieLoaded(false);
      try {
        for (const moviesArray of movies) {
          for (const movie of moviesArray) {
            const res = await axios.get(
              `https://www.omdbapi.com/?apikey=1685660f&i=${movie.imdbID}`
            );
            const data: Movie = res.data;

            if (
              removeLetter(data.Genre, "-")
                .toLowerCase()
                .split(", ")
                .includes(genre)
            ) {
              setMovies((prev) => [...prev, data]);
            }
          }
        }
      } catch (err) {
        console.error("Error filtering movies by exact genre: ", err);
      } finally {
        setAllMovieLoaded(true)
      }
    };

    const fetchFilterMovies = async () => {
      if (genreName) {
        const genreMovies = await fetchMovieByGenre(genreName);
        filterMoviesByExactGenre(genreMovies, genreName);
      }
    };

    fetchFilterMovies();
  }, [genreName]);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  return (
    <>
      <div className="w-full h-full">
        <div className="capitalize text-2xl font-bold mb-3">
          {genreName} Movies
        </div>
        <Typography className="h-8">Page: {currentPage}</Typography>
        {loading ? (
          <GenreDetailSkeleton />
        ) : (
          <>
            {currentMovies.map((movie, index) => (
              <GenreMovieCard key={index} movie={movie} />
            ))}
            {!allMovieLoaded && movies.length < indexOfLastMovie && <GenreDetailSkeleton />}
            <Pagination
              className="h-14 flex items-start justify-center"
              count={totalPages}
              page={currentPage}
              onChange={handleChangePage}
            />
          </>
        )}
      </div>
    </>
  );
};

export default GenreDetail;
