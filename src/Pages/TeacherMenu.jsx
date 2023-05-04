import React from 'react';
import NavbarViewTeacher from "../Component/NavbarViewTeacher";
import CardMenu from "../Component/CardMenu";
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function TeacherMenu() {

  return (
    <div >
  <Row>
      <Col xs={12} sm={2}>
         <NavbarViewTeacher/> 
        </Col>
        <Col>
    <CardMenu/>
    </Col> 
    </Row> 
    </div>
  )
}

export default TeacherMenu;

