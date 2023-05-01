
import React from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/RecipeInfo.css";


  
const RecipeCard = ({ recipe, addToIngredient }) => {
 
  const handleAddToIngredients = () => {
    addToIngredient(recipe.ingredients);
  };
  console.log(recipe.ingredient)
 
  return (
    <section>
      <div className="card-info" >
        <div className="card-body">
          <div className="row">
            <div className="col-md-7">
              <Card>
                <Card.Body>
                  <div className="row">
                    <div className="col-md-3">
                      <strong>Nombre del Plato</strong>
                      <p>{recipe.name}</p>
                    </div>
                    <div className="col-md-3">
                      <strong>Categoría</strong>
                      <p>{recipe.categoryName}</p>
                    </div>
                    <div className="col-md-3">
                      <strong>Número de Personas: 4</strong>
                    </div>
                    <div className="col-md-3">
                      <strong>Autor</strong>
                      <p>{recipe.author}</p>
                    </div>
                  </div> 
                  <Table striped bordered hover responsive>
                    <thead>
                      <tr>
                        
                        <th>Ingrediente</th>
                        <th>Cantidad</th>
                        <th>Unidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recipe.ingredients.map(ingredient => (
                        <tr key={ingredient.id}>
                         
                          <td>{ingredient.ingredientName}</td>
                          <td>{ingredient.amount}</td>
                          <td>{ingredient.unit}</td>
                        </tr>
                      ))}
                      
                    </tbody>
                  
                  </Table>

                </Card.Body>
              </Card>
            </div>
            <div className="col-md-5">
              <div className="col-md-6">
                <Card>
                  <Card.Body>
                    <Card.Title>Preparación</Card.Title>
                    <Card.Text>{recipe.instructions}</Card.Text>
                    <Card.Title>Observaciones</Card.Title>
                    <Card.Text>{recipe.observations}</Card.Text>
                    <Card.Title>Materiales</Card.Title>
                    <Card.Text>{recipe.materials}</Card.Text>
                    <Card.Title>Alergenos</Card.Title>
                    <ul>
                      {recipe.alergens.map(alergen => (
                        <li key={alergen.id}>{alergen.alergenName}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="row mt-auto">
                <div className="card-footer d-flex justify-content-between">
                <button className="btn btn-secondary" onClick={handleAddToIngredients}>Guardar ingredientes</button>
                <button className="btn btn-secondary" href='/Menu'>Menú</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeCard;


