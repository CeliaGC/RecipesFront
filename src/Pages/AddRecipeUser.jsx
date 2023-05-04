import React from 'react';
import NavbarView from "../Component/NavbarView";
import PostRecipe from "../Pages/PostRecipe";
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function AddRecipeUser () {

  return (
    <div >
  <Row>
      <Col xs={12} sm={2}>      
         <NavbarView/> 
        </Col>
        <Col>
    <PostRecipe/>
    </Col> 
    </Row> 
    </div>
  )
}
export default AddRecipeUser;
