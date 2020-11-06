import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import styled from "styled-components";
import img from "./images/rm-bg.jpg";


import Character from "./components/Character";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const fetchCharacters = () => {
    axios.get("https://rickandmortyapi.com/api/character/")
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
      <StyledContainer>
      {
        characters.map((item) => {
          if (count < 5){
            count++;
            return <Character key={item.id} details={item} />;
          }
          return null;
        })
      }
      </StyledContainer>
    </div>
  );
}

export default App;

const StyledContainer = styled.div`
    background-image: url(${img});
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-size: cover;
    margin: 0;
    padding: 0;
    border: 1px solid black;
    height: 100vh;
`;