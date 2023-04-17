import React from 'react';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router';
import "bootstrap/dist/css/bootstrap.min.css";

export default function CardMenu() {
  const { categories } = useLoaderData();


  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    {categories.map((category) => (
        <Card key={category.id} style={{ width: '13rem' }} className="m-2">
          {/* <Card.Img
//         style={{ width: '100%' }} 
//         src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       /> */}
          <Card.Body>
            <Card.Text>
              {category.name}
            </Card.Text>
          </Card.Body>
        </Card>
    ))}
    </div>
  );
}