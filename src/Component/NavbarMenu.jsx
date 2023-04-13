import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../Style/NavbarMenu.css";

function Navbarmenu() {
    return (
      <Navbar expand="lg" className="navbarmenu">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbarmenu-nav" gap={30}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#menu">Menú</Nav.Link>
            <Nav.Link href="#mis-recetas">Mis recetas</Nav.Link>
            <Nav.Link href="#mis-ingredientes">Mis ingredientes</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  
  export default Navbarmenu;
