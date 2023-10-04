import { createSlice } from "@reduxjs/toolkit";

const gptSearch = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        gptMovieNames:null,
        gptMovies:null,
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult:(state,action)=>{
            const {movieNames,movieResults} =action.payload;
            state.gptMovieNames = movieNames;
            state.gptMovies = movieResults;
        }
    }
});
export const { toggleGptSearchView, addGptMovieResult } = gptSearch.actions;
export default gptSearch.reducer;
