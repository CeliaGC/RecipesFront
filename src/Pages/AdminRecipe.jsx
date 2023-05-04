import React from "react";
import {  Row, Col } from "react-bootstrap";
import "../Style/AdminRecipe.css";
import NavbarView from "../Component/NavbarView";
import CardRecipe from "../Component/CardRecipe";
import FormRecipe from "../Component/FormRecipe"


const AdminRecipe = () => {

  return(

    <Row>
    <Col xs={12} sm={2}>
       <NavbarView/> 
      </Col>
      
      <Col>
      <h2 style={{marginTop:'60px', marginLeft: '260px'}}>Lista de receta</h2>
      <CardRecipe style= {{marginLeft:'30px'}}/>
      </Col>
      </Row>
      
  )
}
export default AdminRecipe;
