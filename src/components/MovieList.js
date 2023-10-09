import React from 'react'
import MovieCard from './MovieCard';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const MovieList = ({ rowID,title, movies }) => {
  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
      <h1 className="md:text-3xl text-lg py-6 px-2 text-white">{title}</h1>
      <div className="p-2 flex items-center group relative">
        <FaAngleLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          className="flex w-full h-full scroll-smooth md:overflow-x-hidden md:whitespace-nowrap scrollbar-hide relative"
          id={"slider" + rowID}
        >
          <div className="">
            {movies &&
              movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  item={movie}
                  posterPath={movie.poster_path}
                />
              ))}
          </div>
        </div>
        <FaAngleRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default MovieList
