import React from 'react';
import CardRecipe from "../Component/CardRecipe";
import NavbarViewTeacher from "../Component/NavbarViewTeacher";
import 'bootstrap/dist/css/bootstrap.min.css';


function MenuRecipe() {
  return (
    <div >
    <NavbarViewTeacher></NavbarViewTeacher>
    <CardRecipe/>

    
       
    </div>
  )
}

export default MenuRecipe
