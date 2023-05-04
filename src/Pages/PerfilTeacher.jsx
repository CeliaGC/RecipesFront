import React from 'react';
import NavbarView from "../Component/NavbarView";
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Perfil from "../Component/Perfil";
import NavbarViewTeacher from '../Component/NavbarViewTeacher';



function PerfilAdmin() {

  return (
    <div >
  <Row>
      <Col xs={12} sm={2}>
         <NavbarViewTeacher/> 
        </Col>
        <Col>
        <Perfil />
    </Col> 
    </Row> 
    </div>
  )
}

export default PerfilAdmin;
