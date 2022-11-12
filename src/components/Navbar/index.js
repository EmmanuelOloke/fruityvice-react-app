import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GiFruitBowl } from 'react-icons/gi';
import './style.css';

const AppNavbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" fixed="sticky" className="nav_style" variant="light">
        <Container>
          <Navbar.Brand href="/" className="brand">
            <GiFruitBowl className="img" /> Fruityvice
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className=".navbar-collapse">
            <Nav className="ms-auto ">
              <Nav.Link className="links" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="links" href="/about">
                About
              </Nav.Link>
              <Nav.Link className="links" href="/about#team">
                Team
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
