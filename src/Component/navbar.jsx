import React from "react";
import { Button, Form, FormControl, Nav, Navbar, NavDropdown, Container, Row ,Col} from 'react-bootstrap';


const NavbarLog = () => {

  return (
    <Navbar expand="lg" variant="light" style={{ marginBottom: '-20px', backgroundColor: "#F2AA85" }} >
    <Container className="d-flex flex-column flex-md-row">
        <Nav className="w-100 justify-content-around flex-row">
            <Nav.Link href='/' style={{ color: "black", marginBottom: "1rem" }}>CookSmart</Nav.Link>
            <Nav.Link href='/FormLogin' style={{ color: "black", marginBottom: "1rem", marginLeft: '20px' }}>
                Iniciar sesión</Nav.Link>
            <Nav.Link href='/' style={{ color: "black", marginBottom: "1rem" }}>Acceso a blog
                
            </Nav.Link>
        </Nav>
    </Container>
</Navbar>
);
}
export default NavbarLog;
