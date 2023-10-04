import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {
  return (
    <div className="p-2">
      <h1 className="md:text-3xl text-lg py-6 px-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList
