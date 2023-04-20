import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Style/AdminIngredientList.css"

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("").then((response) => {
      setRecipes(response.data);
    });
  }, []);

  return (
    <div className="row">
      <div className="col-md-6">
        <h2>Lista de recetas</h2>
        <ul className="list-group">
          {recipes.map((recipe) => (
            <li key={recipe.id} className="list-group-item">
              {recipe.name}
              <IngredientsList ingredients={recipe.ingredients} />
            </li>
          ))}
        </ul>
      </div>
      <TotalIngredientsList />
    </div>
  );
}

function IngredientsList({ ingredients }) {
  const [showIngredients, setShowIngredients] = useState(false);

  function handleClick() {
    setShowIngredients(!showIngredients);
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-primary float-right"
        onClick={handleClick}
      >
        {showIngredients ? "Ocultar ingredientes" : "Mostrar ingredientes"}
      </button>
      {showIngredients && (
        <ul className="list-group">
          {ingredients.map((ingredient) => (
            <li key={ingredient.id} className="list-group-item">
              {ingredient.name} - {ingredient.quantity}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

function TotalIngredientsList() {
  const [totalIngredients, setTotalIngredients] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [types, setTypes] = useState({});

  useEffect(() => {
    axios.get("").then((response) => {
      setTotalIngredients(response.data);
      const typesObj = {};
      response.data.forEach((ingredient) => {
        typesObj[ingredient.name] = ingredient.type;
      });
      setTypes(typesObj);
    });
  }, []);

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleFilterChange(event) {
    setFilterTerm(event.target.value);
  }

  return (
    <div className="col-md-6">
      <h2>Lista total de ingredientes</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="Buscar por nombre de ingrediente"
          className="form-control"
          onChange={handleSearchChange}
        />
      </div>
      <div className="form-group">
        <select className="form-control" onChange={handleFilterChange}>
          <option value="">Filtrar por tipo de ingrediente</option>
          {Object.keys(types).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <ul className="list-group">
        {Object.keys(totalIngredients)
          .filter((ingredient) =>
            ingredient.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .filter((ingredient) =>
            filterTerm === "" || types[ingredient] === filterTerm
          )
          .map((ingredient) => (
            <li key={ingredient} className="list-group-item">
              {ingredient} - {totalIngredients[ingredient]} unidades
            </li>
          ))}
   </ul>
  </div>
);
}
export default RecipeList;
