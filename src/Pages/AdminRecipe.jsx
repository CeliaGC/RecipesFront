import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import AdminRecipe from "../pages/AdminRecipe.jsx";

function AdminRecipe() {
    return (
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="recipeName">
                <Form.Label>Nombre de la receta</Form.Label>
                <Form.Control type="text" placeholder="Ingrese el nombre de la receta" />
              </Form.Group>
  
              <Form.Group controlId="recipeIngredients">
                <Form.Label>Ingredientes</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Ingrese los ingredientes separados por coma" />
              </Form.Group>
  
              <Form.Group controlId="recipeInstructions">
                <Form.Label>Instrucciones</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Ingrese las instrucciones" />
              </Form.Group>
  
              <Button variant="primary" type="submit">
                Agregar receta
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }

  