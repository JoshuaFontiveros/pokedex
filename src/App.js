import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./components/Home";
import Header from "./components/Header";
import PokemonComponent from "./components/PokemonComponent";
import PokemonDisplay from "./components/PokemonDisplay";
import "./App.css";

const App = (props) => {
  const pokemons = useSelector((state) => state.pokemon);
  return (
    <>
      <link rel="icon" href="./public/pokeball.png" />
      <Header />
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/types/:type" element={<PokemonDisplay Pokemon={pokemons} />} />
        <Route path="/:pokemon" element={<PokemonComponent Pokemon={pokemons} />}/>
      </Routes>
    </>
  );
};

export default App;
