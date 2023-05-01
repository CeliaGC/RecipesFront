import React from 'react';
import NavbarMenu from "../Component/NavbarMenu";
import CardMenu from "../Component/CardMenu";

import 'bootstrap/dist/css/bootstrap.min.css';


function Menu() {

  const isLogged = JSON.parse(localStorage.getItem("userData"));
  console.log(isLogged);
    

  return (
    <div >
        {isLogged ? <h1>estoy loggeado</h1> : <h1>no estoy loggeado</h1>}
    <NavbarMenu/>
  
    <h3>Menu</h3>
    <CardMenu/>

    
       
    </div>
  )
}

export default Menu

