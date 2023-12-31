import React from 'react';
import RecipeInfo from "../Component/RecipeInfo";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLoaderData } from 'react-router-dom';

 
function Recipe() {
  const {recipe} = useLoaderData ()
  
  const addToIngredient = async (ingredients) => {
    const addListRecipe = JSON.parse(localStorage.getItem( "addListRecipe")) || []
  console.log("add List array", addListRecipe);
 addListRecipe.push(...ingredients);
  localStorage.setItem( "addListRecipe", JSON.stringify (addListRecipe));

}

 
  return (
    <div >
      
    <RecipeInfo recipe={recipe} addToIngredient={addToIngredient}/>

    </div>
  )
}

export default Recipe