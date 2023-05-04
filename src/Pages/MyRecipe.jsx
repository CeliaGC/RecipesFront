import React from 'react';
import NavbarMenu from "../Component/NavbarMenu";
import CardRecipe from "../Component/CardRecipe";
import 'bootstrap/dist/css/bootstrap.min.css';


function MenuRecipe() {
  return (
    <div >
      
      <CardRecipe />

      <div className="card-footer d-flex justify-content-between">
        <button className="btn btn-secondary">Añadir receta</button>
      </div>
      



    </div>
  )
}

export default MenuRecipe