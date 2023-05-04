import React from 'react';
import NavbarView from "../Component/NavbarView";
import AdminMyRecipes from "../Pages/AdminMyRecipes";
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function AMyRecipeView() {

  return (
    <div >
  <Row>
      <Col xs={12} sm={2}>
         <NavbarView/> 
        </Col>
        <Col>
    <AdminMyRecipes/>
    </Col> 
    </Row> 
    </div>
  )
}

export default AMyRecipeView;

