import React, { useRef } from 'react'
import lang from '../utils/languageConstant';
import { useDispatch, useSelector } from 'react-redux';
import openai from "../utils/openai";
import { API_OPTIONS } from '../utils/constant';
import { addGptMovieResult } from '../utils/gptSlice';


const GptSearchBar = () => {
    const langkey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    const searchMovieTMDB = async (movie) => {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/" +
          movie +
          "?include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      const json = data.json();
      return json.results;
    };

    const handleGptSearchClick = async () => {

      const searchTextValue = searchText.current.value;
      const gptQuery =
        "Act as Movie Recommendation system and suggest some movies for the query" +
        searchTextValue+".only give me names of 5 movie as comma seperatd example result:Gadar,soley,Don,3 idots";

       // open api call for search
      const gptResult = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
      if (!gptResult.choices){
        //error handling
      }
        const gptMovies = gptResult.choices?.[0]?.message?.content.split(",");
        const result = gptMovies.map((movie) => searchMovieTMDB(movie));
        const tmdbResult = await Promise.all(result);
        dispatch(
          addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResult })
        );
    };


  return (
    <div className="md:pt-[10%] pt-[50%]  flex justify-center">
      <form
        className="md:w-1/2 w-full bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-2 m-2 col-span-9 rounded-sm"
          placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-2 col-span-3 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar
