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
import C2 from "../assets/C2.jpg";
import NavbarViewTeacher from '../Component/NavbarViewTeacher';
import { UserContext } from "../Contexts/UserContext";



function TeacherUser() {

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
         <NavbarViewTeacher/> 
        </Col>
        <Col xs={12} sm={10}>
          <div style={{ marginTop: "70px", marginLeft: "auto", marginRight: "auto" }}>
            <Card style={{ marginTop: '-50px', border:'none' }}>

              <Card.Body>
                <Card.Title style={{marginBottom: '30px'}}>Bienvenid@ a tu espacio personal</Card.Title>
                
                <Card.Img variant="top" src={C2} />
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TeacherUser;
