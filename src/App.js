import React from "react";
import { useState, useEffect } from 'react'

import MovieCard from "./MovieCard";

import './App.css'
import SearchIcon from './search.svg'

const API_URL = 'https://omdbapi.com?apikey=561fef86';

const movie1 = {
    "Title": "Spiderman the Verse",
    "Year": "2019–",
    "imdbID": "tt12122034",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg"
}

const App = () => {

    const [movies,setMovies] = useState([]);
    const [searchterm, SetSearchTerm] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch (`${API_URL}&s=${title}`)
        const data = await response.json()

        setMovies(data.Search)
    }

    useEffect(()=> {
        searchMovies('Spiderman')
    },[]);

    return (
        <div className="app">
                <h1>MovieLand</h1>
                <div className="search">
                    <input placeholder="Search for movies" value={searchterm} onChange={(e) => SetSearchTerm(e.target.value)} />
                    <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchterm)}></img>
                </div>
            {
            movies?.length > 0 
                ?(
                <div className="container">
                    {movies.map((movie)=> ( <MovieCard movie={movie} />))
                    }
                </div>
                ):(
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
                )
            }   
        </div>
    );
}

export default App;