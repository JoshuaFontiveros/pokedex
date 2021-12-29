import React from 'react';
import {
  Navbar,
  Container,
  Nav,
  Button,
  NavDropdown,
  Tab,
  Tabs,
  Sonnet,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = props => {
  const pokemonType = useSelector(state => state.pokemonTypes);
  return (
    <Container fluid='sm'>
      <Navbar expand='lg' className='navbar'>
        <Container>
          <Navbar.Brand>Pokedex</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav>
              <Nav.Link>
                <Container fluid='sm' className='nav-types'>
                  Types:
                  {pokemonType.map(typeList => (
                    <Link to={`/types/${typeList.type}`}>
                      <button className={`btn-${typeList.type} btn-nav`}>
                        {typeList.type}
                      </button>
                    </Link>
                  ))}
                </Container>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
