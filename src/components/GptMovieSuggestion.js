import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { gptMovieNames, gptMovies } = useSelector((store) => store.gpt);
  if (!gptMovieNames) return null;

  return (
    <div className="p-4 m-4 bg-black bg-opacity-90">
      <div>
        {gptMovieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            name={gptMovies[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
