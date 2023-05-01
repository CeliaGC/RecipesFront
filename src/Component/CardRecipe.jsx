import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import { useLoaderData } from 'react-router';

function CardRecipe()  {
  const {recipes} = useLoaderData ();
  const [searchTerm, setSearchTerm] = useState("");
  
  
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  
  return (
    <div className="container">
      <div className="d-flex justify-content-end">
        <div className="col-4">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </div>
      </div>
      <div className="row">
        {filteredRecipes.map((recipe) => {
           
          return (
            <div className="col-md-6 col-lg-4 mb-3">    
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{recipe.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{recipe.posterName}</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">{recipe.category}</Card.Subtitle>
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
