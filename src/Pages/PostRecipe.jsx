import React from 'react';
import NavbarMenu from "../Component/NavbarMenu";
import FormRecipe from "../Component/FormRecipe";
import 'bootstrap/dist/css/bootstrap.min.css';


function MenuRecipe() {
  return (
    <div >
   {/*  <NavbarMenu/> */}
    {/* <h3>Editar receta</h3>
    <FormRecipe/> */}
    <h3 style={{marginTop:'60px'}}>Añadir nueva receta</h3>
    <FormRecipe/> 
   
   

    
       
    </div>
  )
}

export default MenuRecipe;