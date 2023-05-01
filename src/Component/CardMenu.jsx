import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import M7 from "../assets/M7.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CardMenu() {
  const { categories } = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");


  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredCategories = categories.filter((category) => {
    return category.name.toLowerCase().includes(searchTerm.toLowerCase());
  });


  return (
    <section>
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

      <div className="container text-center mt-5">
        <h3>Menu</h3>
        <div className="row">
          {filteredCategories.map((category) => (
            <div key={category.id} className="col col-4">
              <Link to={`/MenuRecipe/${category.id}`} className="text-decoration-none">
                <Card style={{ width: '13rem' }} className="m-4">
                  <Card.Img
                    style={{ width: '100%' }}
                    src={M7}
                  />
                  <Card.Body>
                    <Card.Text>
                      {category.name}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>


  );
}