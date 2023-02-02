import './App.css';
import SearchIcon from './search.svg'
import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

//

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=bdd4af76'

const movie1 = 
  {
    "Title": "Hollywood's Master Storytellers: Spiderman Live",
    "Year": "2006",
    "imdbID": "tt2158533",
    "Type": "movie",
    "Poster": "N/A"
}


const App = () => {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`) //it will call our API
    const data = await response.json(); // it will get the data

    setMovies(data.Search)
  }

useEffect(() =>{
  searchMovies('Spiderman');
}, [])

  return (
    <div className='app'>
      <h1>MovieZilla</h1>
      <div className="search">
        <input 
        placeholder='Search Movies'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)}/>
     </div>
      
      {
        movies?.length > 0
        ? (
          <div className="container">
          {movies.map((movie) => (
            <MovieCard  movie={movie}/>
          ))}
         </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }
      
    </div>
      
  );
}

export default App;
