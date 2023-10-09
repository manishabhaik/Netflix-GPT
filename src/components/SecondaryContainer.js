import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies = useSelector(store=>store.movies)
  return (
    <div className="bg-black w-screen">
      <div className="md:-mt-52 relative z-10 px-2 md:px-10">
        <MovieList
          rowID="1"
          title={"New Playing"}
          movies={movies.nowPlayingMovies}
        />
      </div>
      <div className="px-2 md:px-10">
        <MovieList
          rowID="2"
          title={"Upcomming"}
          movies={movies.upcommingMovies}
        />
        <MovieList
          rowID="3"
          title={"Top Rated Movies"}
          movies={movies.topRatedMovies}
        />
        <MovieList
          rowID="4"
          title={"Popular On Netflix"}
          movies={movies.popularMovies}
        />
      </div>
    </div>
  );
}

export default SecondaryContainer
