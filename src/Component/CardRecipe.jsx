
// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useLoaderData } from 'react-router';

// function CardRecipe()  {
//   const {recipe, params} = useLoaderData ();
  

//   console.log(recipe);
//   console.log (params);
  
//   return (
//     <div className="container mt-4">
//       {recipe.map((recipe) => {
//         if (recipe.categoryRecipe === params.recipeCategory) {
//           return (
//       <div className="row justify-content-center">
//         <h3>{recipe.category}</h3>
//         <div className="col-md-6">

//           <Card style={{ width: '18rem' }}>
//             <Card.Body>
//               <Card.Title>{recipe.name}</Card.Title>
//               <Card.Subtitle className="mb-2 text-muted">4 Personas</Card.Subtitle>
//               <Card.Text>
//                 {recipe.category}
//               </Card.Text>
//               <Card.Link href="#">Añadir receta</Card.Link>
//               <Card.Link href="#">Favorito</Card.Link>
//             </Card.Body>
//           </Card>

//         </div>

//       </div>
//         )}})}
//      </div> 
//     )

// };
 
// export default CardRecipe;

import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLoaderData } from 'react-router';

function CardRecipe() {
  const { recipes } = useLoaderData();
  console.log(recipes);
  return (
    <div className="container mt-4">
      <div className="row justify-content-center d-flex flex-wrap">
        {recipes.map((recipe) => (
          <div className="col-md-3" key={recipe.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">4 Personas</Card.Subtitle>
                <Card.Text>{recipe.category}</Card.Text>
                <Card.Link href="#">Añadir receta</Card.Link>
                <Card.Link href="#">Favorito</Card.Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardRecipe;


