import React from 'react';
import NavbarMenu from "../Component/NavbarMenu";
import RecipeInfo from "../Component/RecipeInfo";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLoaderData } from 'react-router-dom';

 
function Recipe() {
  const {recipe, categories} = useLoaderData ()
 
  return (
    <div >
    <NavbarMenu/>
    <RecipeInfo recipe={recipe} categories={categories}/>

    
       
    </div>
  )
}

export default Recipe