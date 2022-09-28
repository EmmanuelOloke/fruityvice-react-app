import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { GiFruitBowl } from 'react-icons/gi';
import './style.css'

const AppNavbar = () => {
    return (
        <>
        <Navbar collapseOnSelect expand='sm' fixed = 'sticky' className="nav_style" variant="light">
        <Container>
        <Navbar.Brand href="/" className='brand'>
            <GiFruitBowl className='img'/>{' '}
            Fruityvice
          </Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse>
            <Nav className="me-auto links">
            <Nav.Link className='links' href="home">Home</Nav.Link>
            <Nav.Link className='links' href="about">About</Nav.Link>
            <Nav.Link className='links' href="contact">Contact us</Nav.Link>
          </Nav>
          </Navbar.Collapse>

         
        </Container>
      </Navbar>
      {/* <h1>This is the Home Page</h1> */}
      </>
    );
  };
    
  export default AppNavbar;