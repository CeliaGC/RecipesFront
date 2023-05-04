import React from 'react';
import { Row, Col } from 'react-bootstrap';
import NavbarMenu from "../Component/NavbarMenu";
import Ingredients from "../Component/Ingredients";
import NavbarView from "../Component/NavbarView";
import 'bootstrap/dist/css/bootstrap.min.css';



function RecipeList() {

  return (
    <div >
      <Row>
        <Col xs={12} sm={2}>
          <NavbarView />
        </Col>

        <Col xs={12} sm={10} style={{marginTop:'53px'}}>
          
          <Ingredients />
        </Col>
      </Row>
    </div>
  )
}

export default RecipeList