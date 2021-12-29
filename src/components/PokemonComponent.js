import React from 'react';
import { useParams, Link, Route } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import './PokemonComponent.css';

const PokemonComponent = props => {
  const { pokemon } = useParams();

  let pokemonData = props.Pokemon.find(
    indPokemon => indPokemon.name === pokemon
  );

  return (
    <>
      <Container fluid='sm'>
        <div className='image-container d-flex justify-content-center'>
          <img src={pokemonData.image} alt={pokemonData.name} />
        </div>
        <div className='pokemon-data-container d-flex justify-content-center flex-column align-items-center'>
          <h3>{pokemonData.name}</h3>
          <p>{pokemonData.description}</p>
          <div className='types-container'>
            <strong>Types:</strong>
            {pokemonData.types.map(type => (
              <Link to={`/types/${type}`}>
                <button className={`btn-${type}`}>{type}</button>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default PokemonComponent;
