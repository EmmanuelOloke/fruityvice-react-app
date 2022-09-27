import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { GiFruitTree } from 'react-icons/gi';
import './style.css'

const AppNavbar = () => {
    return (
        <Navbar fixed = 'sticky' className="nav_style" variant="light">
        <Container>
        <Navbar.Brand href="src\pages\index.js" className='brand'>
            <GiFruitTree className='img'/>{' '}
            Fruityvice
          </Navbar.Brand>
          <Nav className="me-auto links">
            <Nav.Link className='links' href="src\pages\index.js">Home</Nav.Link>
            <Nav.Link className='links' href="src\pages\about.js">About</Nav.Link>
            <Nav.Link className='links' href="src\pages\contact.js">Contact us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  };
    
  export default AppNavbar;