import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import {FaUserCircle} from 'react-icons/fa';
import {HiOutlineSearch} from 'react-icons/hi';


const NavbarLog = () => {
  

  return (
    <Navbar style={{ backgroundColor: "#F2AA85", height: '100px'}} >
      
      <Navbar.Brand href="/Menu" style={{marginLeft:'50px'}}>
       
        <span className="ml-">CookSmart</span>
      </Navbar.Brand>

     
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    
        <Nav>
          <Nav.Link href="#login">
         
          </Nav.Link>
        </Nav>
        <Button variant="link" href="/FormLogin"><FaUserCircle size={25} style={{ backgroundColor: 'none', color: 'black', size: '2em', marginRight:'-35em' }} /></Button>
        <Form inline className="d-flex col-xs-6 ">
          <FormControl
            type="text"
            placeholder="Buscar"
            className="mr-sm-2" style={{backgroundColor: 'transparent',  borderColor:'black'}}  />
          <Button variant="light" style={{marginRight:'50px',backgroundColor: 'transparent', border: 'none' }}><HiOutlineSearch size={25}/></Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarLog;