import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './components/Home';
import Header from './components/Header';
import PokemonComponent from './components/PokemonComponent';
import PokemonDisplay from './components/PokemonDisplay';
import { Button, Container } from 'react-bootstrap';
import './App.css';

const App = props => {
  const pokemons = useSelector(state => state.pokemon);
  return (
    <>
      <link rel='icon' href='./public/pokeball.png' />
      <Header />
      <Switch>
        <Route path='/Home'>
          <Home />
        </Route>
        <Route path='/types/:type'>
          <PokemonDisplay Pokemon={pokemons} />
        </Route>
        <Route path='/:pokemon'>
          <PokemonComponent Pokemon={pokemons} />
        </Route>
      </Switch>
    </>
  );
};

export default App;
