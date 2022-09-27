import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { GiFruitTree } from 'react-icons/gi';
import './style.css'

const AppNavbar = () => {
    return (
        <>
        <Navbar fixed = 'sticky' className="nav_style" variant="light">
        <Container>
        <Navbar.Brand href="src\pages\index.js" className='brand'>
            <GiFruitTree className='img'/>{' '}
            Fruityvice
          </Navbar.Brand>
          <Nav className="me-auto links">
            <Nav.Link className='links' href="#home">Home</Nav.Link>
            <Nav.Link className='links' href="#about">About</Nav.Link>
            <Nav.Link className='links' href="#contact">Contact us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <h1>This is the Home Page</h1>
      </>
    );
  };
    
  export default AppNavbar;