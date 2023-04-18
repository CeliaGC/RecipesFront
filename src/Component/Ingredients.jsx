import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";



function List () {
  const [addListRecipe, setListRecipe] = useState(JSON.parse(localStorage.getItem("addListRecipe")) || []);
 
  const removeaddListRecipe = () => {
    localStorage.removeItem("addListRecipe");
    setListRecipe([]);
  }
 
 return (

  <div>
   
      
        <Card>
          <Card.Body>
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
                {addListRecipe.map(ingredient => (
                  <tr key={ingredient.id}>

                    <td>{ingredient.ingredientName}</td>
                    <td>{ingredient.amount}</td>
                    <td>{ingredient.unit}</td>
                  </tr>
                ))}

              </tbody>
              <div className="card-footer d-flex justify-content-between">
                <button className="btn btn-primary" onClick={() => removeaddListRecipe()}>Borrar ingredientes</button>
              </div>
            </Table>

          </Card.Body>
        </Card>
    </div>
    
 


  )



};

export default List;










































// const IngredientTable = () => {
  
//   const [ingredients, setIngredients] = useState([]);
//   const [newIngredient, setNewIngredient] = useState({
//     checked: false,
//     name: '',
//     quantity: '',
//     unit: 'kg' 
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewIngredient({ ...newIngredient, [name]: value });
//   };

//   const handleAddIngredient = () => {
//     if (newIngredient.name !== '' && newIngredient.quantity !== '' && newIngredient.unit !== '') {
//       setIngredients([...ingredients, newIngredient]);
//       setNewIngredient({
//         checked: false,
//         name: '',
//         quantity: '',
//         unit: 'kg' 
//       });
//     }
//   };

//   return (
//     <div>
//       <table className="table">
//         <thead>
//           <tr>
//             <th></th>
//             <th>Ingrediente</th>
//             <th>Cantidad</th>
//             <th>Unidad</th>
//           </tr>
//         </thead>

//         <tbody>
          
//           {ingredients.map((ingredient, index) => (
//             <tr key={index}>
//               <td>
//                 <input
//                   type="checkbox"
//                   checked={ingredient.checked}
//                   onChange={() => {
//                     const updatedIngredients = [...ingredients];
//                     updatedIngredients[index].checked = !ingredient.checked;
//                     setIngredients(updatedIngredients);
//                   }}
//                 />
//               </td>
//               <td>{ingredient.name}</td>
//               <td>{ingredient.quantity}</td>
//               <td>{ingredient.unit}</td>
//             </tr>
//           ))}
//           <tr>
//             <td>
//               <input
//                 type="checkbox"
//                 checked={newIngredient.checked}
//                 onChange={() => setNewIngredient({ ...newIngredient, checked: !newIngredient.checked })}
//               />
//             </td>
//             <td>
//               <input
//                 type="text"
//                 name="name"
//                 value={newIngredient.name}
//                 onChange={handleInputChange}
//                 placeholder="Nombre del ingrediente"
//               />
//             </td>
//             <td>
//               <input
//                 type="text"
//                 name="quantity"
//                 value={newIngredient.quantity}
//                 onChange={handleInputChange}
//                 placeholder="Cantidad"
//               />
//             </td>
//             <td>
//               <select
//                 name="unit"
//                 value={newIngredient.unit}
//                 onChange={handleInputChange}
//               >
//                 <option value="kg">kg</option>
//                 <option value="gr">gr</option>
//                 <option value="paquete">paquete</option>
//               </select>
//             </td>
//             <td>
//               <button className="btn btn-primary" onClick={handleAddIngredient}>
//                 Agregar
//               </button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default IngredientTable;

