import React from 'react';
import NavbarViewTeacher from "../Component/NavbarViewTeacher";
import AdminList from "../Pages/AdminList";
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function OrderList() {

  return (
    <div >
  <Row>
      <Col xs={12} sm={2}>
         <NavbarViewTeacher/> 
        </Col>
        <Col>
    <AdminList/>
    </Col> 
    </Row> 
    </div>
  )
}

export default OrderList;
