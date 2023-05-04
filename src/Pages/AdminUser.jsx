import { Container, Row, Col, Navbar, Nav, Card, NavDropdown} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import React from "react";
import {AiFillHome} from 'react-icons/ai';
import { useContext } from "react";
import { BsPersonFill } from 'react-icons/bs';
import { MdFoodBank } from "react-icons/md";
import { MdBorderColor } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Style/AdminUser.css";
import C8 from "../assets/C8.jpg";
import NavbarView from '../Component/NavbarView';


import { UserContext } from "../Contexts/UserContext";


function AdminUser() {

  const { userStorage, setUserStorage } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserStorage("");
    navigate('/');
  };

  return (

    <Container fluid>
      <Row>
        <Col xs={12} sm={2}>
         <NavbarView/> 
        </Col>
        <Col xs={12} sm={10}>
          <div style={{ marginTop: "70px", marginLeft: "auto", marginRight: "auto" }}>
            <Card style={{ marginTop: '-50px', border:'none' }}>

              <Card.Body>
                <Card.Title>Bienvenid@ a tu espacio personal</Card.Title>
                <Card.Text>
                  Aquí podrás supervisar y gestionar todas las operaciones de los usuarios, así como controlar los pedidos de ingredientes y mantener actualizadas las recetas,  para que sólo te preocupes en crear una experiencia culinaria única para tus comensales!.
                </Card.Text>
                <Card.Img variant="top" src={C8} />
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminUser;
