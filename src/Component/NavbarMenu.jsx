import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../Style/NavbarMenu.css";

function Navbarmenu() {
    return (
      <Navbar expand="lg" className="navbarmenu">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbarmenu-nav" gap={30}>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/Menu'>Menú</Nav.Link>
            <Nav.Link href='/MyRecipe'>Mis recetas</Nav.Link>
            <Nav.Link href='/List'>Mis ingredientes</Nav.Link>
            <Nav.Link href="https://www.ucam.edu/estudios/grados/gastronomia-presencial">Blog</Nav.Link>
            <Nav.Link href='/ViewMenu'>ViewMenu</Nav.Link>
            <Nav.Link href='/EditRecipe'>EditRecipe</Nav.Link>
            <Nav.Link href='/MenuRecipe'>MenuRecipe</Nav.Link>
            <Nav.Link href='/ViewRecipe'>ViewRecipe</Nav.Link>
            <Nav.Link href='/AdminCategory'>AdminCategory</Nav.Link>
            <Nav.Link href='/AdminRecipe'>AdminRecipe</Nav.Link>
            <Nav.Link href='/AdminUser'>AdminUser</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  
  export default Navbarmenu;
