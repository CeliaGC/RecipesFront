import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import M7 from "../assets/M7.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CardMenu() {
  const { categories } = useLoaderData();
  

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
  <div className="row">
    {categories.map((category) => (
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


  );
}