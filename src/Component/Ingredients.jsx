
import React, { useState } from 'react';


const IngredientTable = () => {
  
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState({
    checked: false,
    name: '',
    quantity: '',
    unit: 'kg' 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewIngredient({ ...newIngredient, [name]: value });
  };

  const handleAddIngredient = () => {
    if (newIngredient.name !== '' && newIngredient.quantity !== '' && newIngredient.unit !== '') {
      setIngredients([...ingredients, newIngredient]);
      setNewIngredient({
        checked: false,
        name: '',
        quantity: '',
        unit: 'kg' 
      });
    }
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Ingrediente</th>
            <th>Cantidad</th>
            <th>Unidad</th>
          </tr>
        </thead>

        <tbody>
          
          {ingredients.map((ingredient, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  checked={ingredient.checked}
                  onChange={() => {
                    const updatedIngredients = [...ingredients];
                    updatedIngredients[index].checked = !ingredient.checked;
                    setIngredients(updatedIngredients);
                  }}
                />
              </td>
              <td>{ingredient.name}</td>
              <td>{ingredient.quantity}</td>
              <td>{ingredient.unit}</td>
            </tr>
          ))}
          <tr>
            <td>
              <input
                type="checkbox"
                checked={newIngredient.checked}
                onChange={() => setNewIngredient({ ...newIngredient, checked: !newIngredient.checked })}
              />
            </td>
            <td>
              <input
                type="text"
                name="name"
                value={newIngredient.name}
                onChange={handleInputChange}
                placeholder="Nombre del ingrediente"
              />
            </td>
            <td>
              <input
                type="text"
                name="quantity"
                value={newIngredient.quantity}
                onChange={handleInputChange}
                placeholder="Cantidad"
              />
            </td>
            <td>
              <select
                name="unit"
                value={newIngredient.unit}
                onChange={handleInputChange}
              >
                <option value="kg">kg</option>
                <option value="gr">gr</option>
                <option value="paquete">paquete</option>
              </select>
            </td>
            <td>
              <button className="btn btn-primary" onClick={handleAddIngredient}>
                Agregar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IngredientTable;

