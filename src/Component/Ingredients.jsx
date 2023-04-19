import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";



function List () {
  const [addListRecipe, setListRecipe] = useState(JSON.parse(localStorage.getItem("addListRecipe")) || []);
 
  const removeaddListRecipe = () => {
    localStorage.removeItem("addListRecipe");
    setListRecipe([]);
  };
  const [newIngredient, setNewIngredient] = useState({
    ingredientName: "",
    amount: "",
    unit: "kg",
  });

  const handleInputChange = (event) => {
    setNewIngredient({
      ...newIngredient,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newRecipe = {
      ...newIngredient,
      id: addListRecipe.length + 1,
    };
    const updatedList = [...addListRecipe, newRecipe];
    setListRecipe(updatedList);
    localStorage.setItem("addListRecipe", JSON.stringify(updatedList));
    setNewIngredient({
      ingredientName: "",
      amount: "",
      unit: "kg",
    });
  };

 
 return (

  <div>    
        <Card>
          <Card.Body>
            <Table striped bordered hover responsive>
              <thead>
                <tr>

                  <th>Ingrediente</th>
                  <th>Cantidad</th>
                  <th>Unidad</th>
                </tr>
              </thead>
              <tbody>
                {addListRecipe.map(ingredient => (
                  <tr key={ingredient.id}>

                    <td>{ingredient.ingredientName}</td>
                    <td>{ingredient.amount}</td>
                    <td>{ingredient.unit}</td>
                  </tr>
                ))}
                

              </tbody>
              <tfoot>
              <tr>
                <td colSpan="3">
                  <form onSubmit={handleFormSubmit}>
                    <div className="form-row">
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Ingrediente"
                          name="ingredientName"
                          value={newIngredient.ingredientName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Cantidad"
                          name="amount"
                          value={newIngredient.amount}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col">
                        <select
                          className="form-control"
                          name="unit"
                          value={newIngredient.unit}
                          onChange={handleInputChange}
                        >
                          <option value="kg">kg</option>
                          <option value="gr">gr</option>
                          <option value="litros">litros</option>
                        </select>
                      </div>
                      <div className="col-auto">
                        <button type="submit" className="btn btn-primary">
                          Añadir nuevo ingrediente
                        </button>
                      </div>
                    </div>
                  </form>
                </td>
              </tr>
            </tfoot>
          </Table>
        </Card.Body>
       
         <div className="card-footer d-flex justify-content-between">
                <button className="btn btn-primary" onClick={() => removeaddListRecipe()}>Borrar ingredientes</button>
          </div>
        
      </Card>
           
    </div>

  )



};

export default List;







