import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import logo from "../assets/logo.png";

const NavbarLog = () => {
  return (
    <Navbar style={{ backgroundColor: "#F2AA85" }} >
      
      <Navbar.Brand href="/Menu">
        <img
          src={logo}
          alt="Logo"
          width="70"
          height="70"
          className="d-inline-block"
          style={{ marginLeft: "0.5rem" }}
        />
        <span className="ml-">CookSmart</span>
      </Navbar.Brand>

     
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    
        <Nav>
          <Nav.Link href="#login">
            {/* <i className="fa fa-user-circle-o" aria-hidden="true" /> Login */}
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
           <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
            </svg> 
          </Nav.Link>
        </Nav>
        <Form inline className="d-flex col-xs-6 ">
          <FormControl
            type="text"
            placeholder="Buscar"
            className="mr-sm-2"
          />
          <Button variant="light">Buscar</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarLog;
