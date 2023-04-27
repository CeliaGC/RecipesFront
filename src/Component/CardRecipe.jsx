
import React from 'react';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import { useLoaderData } from 'react-router';

function CardRecipe()  {
  const {recipes, categories} = useLoaderData ();
  

  console.log(recipes);
  console.log (categories);
  
  return (
    <div className="container">
      <div className="row">
        {recipes.map((recipe) => {
           
          return (
            <div className="col-md-6 col-lg-4 mb-3">    
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{recipe.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{recipe.posteBy}</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">{recipe.categoryName}</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">{recipe.author}</Card.Subtitle>
                  <Card.Text>
                    {recipe.category.id}
                  </Card.Text>
                  <Card.Link href={`/ViewRecipe/${recipe.id}`}>Ver</Card.Link>
                </Card.Body>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
     
    )

};
 
export default CardRecipe;

{/* <h3>{recipe.category}</h3> */}