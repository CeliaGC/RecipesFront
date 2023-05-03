import React from 'react';
import NavbarViewTeacher from "../Component/NavbarViewTeacher";
import List from "../Pages/List";
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function TeacherList() {

  return (
    <div >
  <Row>
      <Col xs={12} sm={2}>
         <NavbarViewTeacher/> 
        </Col>
        <Col>
    <List/>
    </Col> 
    </Row> 
    </div>
  )
}

export default TeacherList;

