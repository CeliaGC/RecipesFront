import React from 'react';
import NavbarView from "../Component/NavbarView";
import AdminList from "../Pages/AdminList";
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function AdminListView() {

  return (
    <div >
  <Row>
      <Col xs={12} sm={2}>
         <NavbarView/> 
        </Col>
        <Col>
    <AdminList/>
    </Col> 
    </Row> 
    </div>
  )
}

export default AdminListView;

