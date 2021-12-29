import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './PokemonDisplay.css';
import { Container, Row, Col } from 'react-bootstrap';

const PokemonDisplay = props => {
  const { type } = useParams();

  return (
    <Container>
      <Row>
        {props.Pokemon.filter(pokemon => {
          if (type === 'All') {
            return pokemon;
          }
          return pokemon.types.includes(type);
        }).map(pokemon => (
          <Col className='pokemon-container'>
            <div className='image-container'>
              <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <Link to={`/${pokemon.name}`} className='no-style'>
              {pokemon.name}
            </Link>
            <strong>Types:</strong>
            <span className='btn-container'>
              {pokemon.types.map(pokemonType => {
                if (pokemonType.length > 0) {
                }
                return (
                  <button className={`btn-${pokemonType} btn-all`}>
                    {pokemonType}
                  </button>
                );
              })}
            </span>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PokemonDisplay;
