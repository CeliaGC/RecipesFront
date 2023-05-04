import React from 'react';
import NavbarViewTeacher from "../Component/NavbarViewTeacher";
import PostRecipe from "../Pages/PostRecipe";
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function AddRecipeTeacher () {

  return (
    <div >
  <Row>
      <Col xs={12} sm={2}>
         <NavbarViewTeacher/> 
        </Col>
        <Col>
    <PostRecipe/>
    </Col> 
    </Row> 
    </div>
  )
}
export default AddRecipeTeacher;