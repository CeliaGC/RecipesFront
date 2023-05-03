import React from "react";
import { FaUserCircle } from 'react-icons/fa';
import { HiOutlineSearch } from 'react-icons/hi';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown, Container, Row ,Col} from 'react-bootstrap';
import Logo2 from "../assets/Logo2.png";


const NavbarLog = () => {

  return (
    <Navbar expand="lg"  style={{ backgroundColor: "#F2AA85", height: '100px'}}>
    <Container fluid>
      <Navbar.Brand href="/Menu" style={{marginLeft:'50px'}}><img src={Logo2} style={{width: '6rem'}} /></Navbar.Brand>
      <div >
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
    <Button variant="link" href="/NavbarPrueba"><FaUserCircle size={25} style={{ backgroundColor: 'none', color: 'black', size: '2em', marginRight:'-35em' }} /></Button>
        <Form className="d-flex">
        <FormControl
            type="text"
            placeholder="Buscar"
            className="mr-sm-2" style={{backgroundColor: 'transparent',  borderColor:'black'}}  />
          <Button variant="light" style={{marginRight:'50px',backgroundColor: 'transparent', border: 'none' }}><HiOutlineSearch size={25}/></Button>
        </Form>
      </Navbar.Collapse>
      </div>
    </Container>
  </Navbar>
);
}
export default NavbarLog;
