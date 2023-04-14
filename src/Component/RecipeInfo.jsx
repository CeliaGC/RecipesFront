import React from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/RecipeInfo.css";


const RecipeCard = () => {
  return (

    <section>
      <div className="card">
        <div className="card-body">
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
                </Card>
              </div>
            </div>
            <div className="row mt-auto">
              <div className="col-md-12">
                <div className="card-footer d-flex justify-content-between">
                  <button className="btn btn-primary">Botón</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  );
};

export default RecipeCard;
