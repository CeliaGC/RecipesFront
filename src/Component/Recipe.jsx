import React from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css"; 


const RecipeCard = () => {
  return (
    <div className="container">
      <div className="row">
      <div className="col-md-6">
          <Card>
            <Card.Body>
              <div className="row">
                <div className="col-md-3">
                  <strong>Nombre del Plato</strong>
                  <p>Nombre del plato aquí</p>
                </div>
                <div className="col-md-3">
                  <strong>Dificultad</strong>
                  <p>Dificultad aquí</p>
                </div>
                <div className="col-md-3">
                  <strong>Categoría</strong>
                  <p>Categoría aquí</p>
                </div>
                <div className="col-md-3">
                  <strong>Número de Personas</strong>
                  <p>Número de personas aquí</p>
                </div>
              </div>
              <hr />
              <strong>Ingredientes</strong>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Ingrediente</th>
                    <th>Cantidad</th>
                    <th>Unidad</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ingrediente 1</td>
                    <td>1</td>
                    <td>unidad</td>
                  </tr>
                  <tr>
                    <td>Ingrediente 2</td>
                    <td>200</td>
                    <td>gramos</td>
                  </tr>
                  
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6">
          <Card>
            <Card.Body>
              <Card.Title>Título de la Card Izquierda</Card.Title>
              <Card.Text>
                Texto de la Card Izquierda
              </Card.Text>
              <Card.Title>Alergenos</Card.Title>
              <ul>
                <li>Alergeno 1</li>
                <li>Alergeno 2</li>
                <li>Alergeno 3</li>
              </ul>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary">Botón 1</Button>{" "}
              <Button variant="secondary">Botón 2</Button>
            </Card.Footer>
          </Card>
        </div>
        
      </div>
    </div>
  );
};

export default RecipeCard;
