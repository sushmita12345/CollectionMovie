import React, { useState } from "react";
import "./styles.css";

const movies = {
  Horror: [
    { name: "The Conjuring", genres: "Horror", directors: "James Wan" },
    { name: "Annabelle", genres: "Horror", directors: "David F. Sandberg" },
    {
      name: "Don't knock twice",
      genres: "Horror",
      directors: "Caradog W. James"
    }
  ],
  Thriller: [
    {
      name: "Breathe: Into the Shadows",
      genres: "Suspense",
      directors: "Mayank Sharma"
    },
    {
      name: "The Widow",
      genres: "Suspense",
      directors: "Sam Donavan, Olly Blackburn"
    },
    { name: "Kruthi", genres: "Suspense", director: "Manu Warrier" }
  ],
  Adventures: [
    {
      name: "The Lord of Rings",
      genres: "mystery",
      director: "Peter Jackson"
    },
    {
      name: "Wheel Of Time",
      genres: "mystery",
      director: "Rosamund Pike, Daniel Henney, Josha Stradowski"
    },
    { name: "Harry Potter", genres: "mystery", director: "Chris Colombus" }
  ],
  Action: [
    { name: "The Wall", genres: "Action", director: "Doug Liman" },
    { name: "Sherlock Holmes", genres: "Action", director: "Guy Ritchie" },
    { name: "Commando", genres: "Action", director: "Deven Bhojani" }
  ]
};

export default function App() {
  const [userInput, setuserInput] = useState("Horror");
  function showClickHandler(show) {
    setuserInput(show);
  }

  return (
    <div className="App">
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
                {movies.name}, {movies.genres}, {movies.director}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
