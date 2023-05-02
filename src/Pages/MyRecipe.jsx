import React from 'react';
import NavbarMenu from "../Component/NavbarMenu";
import CardRecipe from "../Component/CardRecipe";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from "react-bootstrap";


function MenuRecipe() {

  const handleAddRecipe = () => {
    // mostrar mensaje de añadir receta
    alert("Receta añadida.")}
  return (
    <div >
      
      <NavbarMenu />
      
      <CardRecipe />

      <div className="card-footer d-flex justify-content-between">
        <button className="btn btn-secondary" onClick={handleAddRecipe}>Añadir receta</button>
      </div>

    </div>

  )
  }

export default MenuRecipe;