import React, { useState } from "react";
import "./styles.css";

const movies = {
  Horror: [
    { name: "The Conjuring", genres: "Horror", director: "James Wan", rating: 4.5 },
    { name: "Annabelle", genres: "Horror", director: "David F. Sandberg", rating: 4.5 },
    {
      name: "Don't knock twice",
      genres: "Horror",
      director: "Caradog W. James", rating: 4.5
    }
  ],
  Thriller: [
    {
      name: "Breathe: Into the Shadows",
      genres: "Suspense",
      director: "Mayank Sharma", rating: 4.5
    },
    {
      name: "The Widow",
      genres: "Suspense",
      director: "Sam Donavan, Olly Blackburn", rating: 4.5
    },
    { name: "Kruthi", genres: "Suspense", director: "Manu Warrier", rating: 4.5 }
  ],
  Adventures: [
    {
      name: "The Lord of Rings",
      genres: "mystery",
      director: "Peter Jackson", rating: 4.5
    },
    {
      name: "Wheel Of Time",
      genres: "mystery",
      director: "Rosamund Pike, Daniel Henney, Josha Stradowski", rating: 4.5
    },
    { name: "Harry Potter", genres: "mystery", director: "Chris Colombus", rating: 4.5 }
  ],
  Action: [
    { name: "The Wall", genres: "Action", director: "Doug Liman", rating: 4.5 },
    { name: "Sherlock Holmes", genres: "Action", director: "Guy Ritchie", rating: 4.5 },
    { name: "Commando", genres: "Action", director: "Deven Bhojani", rating: 4.5 }
  ]
};

export default function App() {
  const [userInput, setuserInput] = useState("Horror");
  function showClickHandler(show) {
    setuserInput(show);
  }

  return (
    <div className="App">
      <div className="wrapper">
        <h1>Movies Collection</h1>
        <div className="center">
          {Object.keys(movies).map((show) => (
            <button onClick={() => showClickHandler(show)}>{show}</button>
          ))}
        </div>
        <div className="center">
          <ul className="non-bullet">
            {movies[userInput].map((movies) => (
              <li key={movies.name}>
                <div className="movies">
                  {movies.name}, {movies.genres}, {movies.director}, {movies.rating}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
