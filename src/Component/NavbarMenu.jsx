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
            <Nav.Link href='/List'>Lista</Nav.Link>
            {/* <Nav.Link href="https://www.ucam.edu/estudios/grados/gastronomia-presencial">Blog</Nav.Link> */}
            <Nav.Link href='/AdminCategory'>ACategoria</Nav.Link>
            <Nav.Link href='/AdminRecipe'>AReceta</Nav.Link>
            <Nav.Link href='/AdminUser'>AUsuario</Nav.Link>
            <Nav.Link href='/AdminList'>ALista</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  
  export default Navbarmenu;
