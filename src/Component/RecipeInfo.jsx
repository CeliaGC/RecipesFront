import React from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/RecipeInfo.css";

const RecipeCard = ({ recipe, addToIngredient }) => {
 
  const handleAddToIngredients = () => {
    addToIngredient(recipe.ingredients);
  };
  //   const addToIngredient = async (ingredients) => {
  //     const addListRecipe = JSON.parse(localStorage.getItem( "addListRecipe")) || []
  //   console.log("add List array", addListRecipe);
  //  addListRecipe.push(...ingredients);
  //   localStorage.setItem( "addListRecipe", JSON.stringify (addListRecipe));

  // }

  // const addToIngredient = () => {
  //   const addListRecipe = JSON.parse(localStorage.getItem("addListRecipe")) || [];
  //   const ingredients = [...recipe.ingredients];
  //   addListRecipe.push(ingredients);
  //   localStorage.setItem("addListRecipe", JSON.stringify(addListRecipe));
  // }



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
                      <p>{recipe.name}</p>
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
                      {recipe.ingredients.map(ingredient => (
                        <tr key={ingredient.id}>
                         
                          <td>{ingredient.ingredientName}</td>
                          <td>{ingredient.amount}</td>
                          <td>{ingredient.unit}</td>
                        </tr>
                      ))}
                      
                    </tbody>
                    <div className="card-footer d-flex justify-content-between">
                        {/* <button className="btn btn-primary"  onClick={() => addToIngredient(recipe.ingredients)}>Guardar ingredientes</button> */}
                       <button className="btn btn-primary" onClick={handleAddToIngredients}>Guardar ingredientes</button> 
                      </div>
                  </Table>

                </Card.Body>
              </Card>
            </div>
            <div className="col-md-6">
              <div className="col-md-6">
                <Card>
                  <Card.Body>
                    <Card.Title>Preparación</Card.Title>
                    <Card.Text>{recipe.instructions}</Card.Text>

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


