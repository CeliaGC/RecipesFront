import React from "react";
import {  Nav, Container, Row } from 'react-bootstrap';



const Navbar= () => {

  return (
  
    <Navbar expand="lg" variant="light" style={{ marginBottom: '-20px', backgroundColor: "#F2AA85" }} >
    <Container className="d-flex flex-column flex-md-row">
        <Nav className="w-100 justify-content-around flex-row">
            <Nav.Link href='/' style={{ color: "black", marginBottom: "1rem", fontSize:'35px' }}>CookSmart</Nav.Link>
            <Nav.Link href='/FormLogin' style={{ color: "black", marginBottom: "1rem", marginLeft: '20px', fontSize:'20px' }}>
                Iniciar sesión</Nav.Link>
            <Nav.Link href='/' style={{ color: "black", marginBottom: "1rem", fontSize:'20px' }}>Acceso a blog
                
            </Nav.Link>
        </Nav>
    </Container>
</Navbar>
);
}


export default Navbar;
