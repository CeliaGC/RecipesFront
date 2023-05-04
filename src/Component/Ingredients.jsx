import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import { orderHandler } from "../Handlers/orderHandler";
import "bootstrap/dist/css/bootstrap.min.css";

function List() {
  
  const [addListRecipe, setListRecipe] = useState(JSON.parse(localStorage.getItem("addListRecipe")) || []);
 
  const [order, setOrders] = useState([]);
  const [ingredientName, setIngredientName] = useState('');
  const [amount, setAmount] = useState('');
  const [unit, setUnit] = useState('');

  const removAddListRecipe = () => {
    localStorage.clear();
    setListRecipe([]);
  };
 
  const [newIngredient, setNewIngredient] = useState({
    ingredientName: "",
    amount: "",
    unit: "gr",
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
      unit: "gr",
    });

    const newTotalAmounts = calculateTotalAmounts(updatedList);
    setTotalAmounts(newTotalAmounts);
  };
  
  const calculateTotalAmounts = (list) => {
    if (!list) {
      return null;
    }
    const totalAmounts = {};
  list.forEach((ingredient) => {
    const key = `${ingredient.ingredientName}-${ingredient.unit}`;
    if (!totalAmounts[key]) {
      totalAmounts[key] = 0;
    }
    totalAmounts[key] += parseFloat(ingredient.amount);
  });
  return totalAmounts;
  };
  const [totalAmounts, setTotalAmounts] = useState(calculateTotalAmounts(addListRecipe));
  const [ingredients, setIngredients] = useState("");
  const removeAddListRecipe = () => {
    setIngredients("");
    // mensaje de confirmación borrados
    alert("Los ingredientes han sido borrados.");
  };

  const handleSendIngredients = () => {
    // mensaje de confirmación enviados
    alert("Los ingredientes han sido enviados.");
  };

  const handleAddNewIngredient = () => {
    // mensaje de confirmación añadidos
    alert("Ingrediente añadido.");
  };


  const handleAdd = () => {
    const order = {
      ingredient: ingredientName,
      amount: amount,
      unit: unit
    };
    setOrders([...order]);
    setIngredientName('');
    setAmount('');
    setUnit('');

  };
  const handleSubmit = async (event) => {

    event.preventDefault();

    let order = {
       ingredientName, amount, unit,
    };
    console.log("componente", order)
    await orderHandler.addOrder(order);

  };

  return (
<div >
  <Card style={{border:'none'}}>
    <Card.Body>
      <div>
        <h4 style={{marginBottom:'30px', textAlign:'center'}}>Tabla de ingredientes</h4>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Ingrediente</th>
              <th>Cantidad</th>
              <th>Unidad</th>
            </tr>
          </thead>
          <tbody>
            {addListRecipe.map((ingredient) => (
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
                        <option value="gr">gr</option>
                        <option value="ml">ml</option>
                        <option value="unidad">und</option>
                        <option value="cantidad suficiente">C/S</option>
                      </select>
                    </div>
                    <div className="col-auto">
                      <button type="submit" onClick={handleAddNewIngredient} className="btn btn-primary">
                        Añadir nuevo ingrediente
                      </button>
                      
                    </div>
                  </div>
                </form>
              </td>
            </tr>
          </tfoot>
        </Table>
      </div>
      <div>
        <h4 style={{marginBottom:'30px', textAlign:'center'}}>Tabla de totales</h4>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Ingrediente</th>
              <th>Cantidad</th>
              <th>Unidad</th>
            </tr>
          </thead>
          <tbody onSubmit={handleAdd} >
            {Object.entries(totalAmounts).map(([key, amount], index) => {
              const [ingredientName, unit] = key.split("-");

              return (
                <tr key={index}>
                  <td>{ingredientName}</td>
                  <td>{amount}</td>
                  <td>{unit}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </Card.Body>

    <div className="card-footer d-flex flex-row justify-content-between">
    {ingredients ? (
        <Alert variant="success">Los ingredientes son: {ingredients}</Alert>
      ) : (
        <Alert variant="danger">No hay ingredientes.</Alert>
      )}
    <button className="btn btn-primary" onClick={() => removAddListRecipe()}>Borrar ingredientes</button>
      <button className="btn btn-primary" onClick={handleSubmit}  >Enviar ingredientes</button>
    </div>

  </Card>
</div>

  )

};

export default List;