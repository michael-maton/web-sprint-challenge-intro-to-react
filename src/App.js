import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import Character from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // const [character, setCharacter] = useState("");

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);
  const fetchCharacters = () => {
    axios.get("https://swapi.dev/api/people/")
      .then((res) => {
        setCharacters(res.data.results);
        console.log(res.data);
      })
      .catch(() => {
        debugger;
      });
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  let count = 0;

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characters.map((item) => {
          count++;
          return <Character key={count} details={item} />;
        })
      }
    </div>
  );
}

export default App;
