import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../Style/NavbarMenu.css";

function Navbarmenu() {
    return (
      <Navbar expand="lg" className="navbarmenu" style={{ background: "#8B8961", textAlign: "center", borderRadius:'15px'}} >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbarmenu-nav" gap={30}>
          <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/UserList'>Usuarios</Nav.Link>
            <Nav.Link href='/AdminRecipeView'>Recetas</Nav.Link>
            <Nav.Link href='/List'>Lista de Pedidos</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  
  export default Navbarmenu;



