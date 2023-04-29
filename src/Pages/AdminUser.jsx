
import { useLoaderData } from "react-router-dom";
import { Container, Row, Col, Navbar, Nav, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import React from "react";
import {AiFillHome} from 'react-icons/ai';
import { useContext } from "react";
import { BsPersonFill } from 'react-icons/bs';
import { MdFoodBank } from "react-icons/md";
import { MdBorderColor } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Style/AdminUser.css";
import M14 from "../assets/M14.jpg";
import M15 from "../assets/M15.jpg";
import M16 from "../assets/M16.jpg";
import M17 from "../assets/M17.jpg";
import M18 from "../assets/M18.jpg";
import M19 from "../assets/M19.jpg";
import M20 from "../assets/M20.jpg";
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
          <Navbar expand="lg" style={{ backgroundColor: "#8B8961", flexDirection: "column", borderRadius: '15px', textAlign: 'center', marginTop:'20px'}}>
            <Nav className="flex-column">
            <Nav.Link  href='/' style={{ color: "white", marginBottom: "1rem" }}>
                  <AiFillHome className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", marginBottom: "10px", size: "20px" }} /> Home
                </Nav.Link>
              <Nav.Link href="/UserList" style={{ color: "white", marginBottom: "1rem" }}>
                <BsPersonFill className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", marginBottom: "10px", size: "20px" }} /> Usuarios
              </Nav.Link>
              <Nav.Link  href='/AdminRecipeView' style={{ color: "white", marginBottom: "1rem" }}>
                <MdFoodBank className="my-icon mr-2"  style={{ backgroundColor: "none", color: "white", size: "2em", marginBottom: "10px", size: "4em" }} /> Recetas
              </Nav.Link>
              <Nav.Link  href= '/List' style={{ color: "white", marginBottom: "1rem" }}>
                <MdBorderColor className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", size: "2em", marginBottom: "10px", size: "4em" }} /> Lista de Pedidos
              </Nav.Link>
              <Nav.Link href= '/' style={{ color: "white", marginBottom: "1rem" }}>
                <MdBorderColor className="my-icon mr-2" style={{ backgroundColor: "none", color: "white", size: "2em", marginBottom: "10px", size: "4em" }} onClick={handleLogout} /> Cerrar sesión
              </Nav.Link>
            </Nav>
          </Navbar>
        </Col>
        <Col xs={12} sm={10}>
          <div style={{ marginTop: "10px", marginLeft: "auto", marginRight: "auto" }}>
            <Card style={{ marginTop: '-50px' }}>

              <Card.Body>
                <Card.Title>Bienvenid@ a tu espacio personal</Card.Title>
                <Card.Text>
                  Aquí podrás supervisar y gestionar todas las operaciones de los usuarios, así como controlar los pedidos de ingredientes y mantener actualizadas las recetas,  para que sólo te preocupes en crear una experiencia culinaria única para tus comensales!.
                </Card.Text>
                <Card.Img variant="top" src={M17} />
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminUser;
