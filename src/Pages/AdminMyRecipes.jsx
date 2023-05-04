import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import "../Style/AdminRecipe.css";
import {UserContext} from "../Contexts/UserContext";
import { useContext } from "react";

const AdminMyRecipes = () => {
  const {recipes} = useLoaderData();
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(3);
  const [showAddRecipeForm, setShowAddRecipeForm] = useState(false);
  const [newRecipe, setNewRecipe] = useState({ id: null, name: '', category: '' });
  const { userStorage, setUserStorage } = useContext(UserContext);


 
  const userName = userStorage.item4;
  
  const adminRecipes = recipes.filter(recipe => recipe.posterName == userName)
  console.log(adminRecipes);
  const renderRecipes = adminRecipes.map((recipe) => {
    return (
      
      <Col xs={12} md={4} key={recipe.id}>
        <Card className="mb-5 recipe-card">
          <Card.Body>
            <Card.Title>{recipe.name}</Card.Title>
            <Card.Text>{recipe.category}</Card.Text>
            <div className="btn-group">
              <Button  size="sm" style={{ backgroundColor: "rgba(139, 137, 97, 1)" }}>
                Editar
              </Button>
              <Button size="sm" style={{ backgroundColor: "rgba(139, 137, 97, 1)" }}>
                Eliminar
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  });
  
  
  
  return (
    <Container>
      <Row>
        <Col>
        <h3 style={{marginTop:'60px', marginLeft: '390px'}}>Mis recetas</h3>
          <Row style={{marginTop:'50px'}}>{renderRecipes}</Row> 
        </Col>
      </Row>
    </Container>
  );
};
export default AdminMyRecipes;