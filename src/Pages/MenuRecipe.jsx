import React from 'react';
import CardRecipe from "../Component/CardRecipe";
import NavbarViewTeacher from "../Component/NavbarViewTeacher";
import 'bootstrap/dist/css/bootstrap.min.css';
import C7A from "../assets/C3.jpg";



function MenuRecipe() {
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-md-3">
        <NavbarViewTeacher />
      </div>
      <div className="col-md-9">
        <CardRecipe />
      </div>
    </div>
  </div>
  )
}

export default MenuRecipe
