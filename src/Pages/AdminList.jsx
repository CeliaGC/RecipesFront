
import React from 'react';
import {  useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function ListAdmin() {
  const {orders} = useLoaderData();
  console.log  (orders)
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="row">
      {orders.map((order) => (
        <div key={order.id} className="col col-4">
            
            <Card style={{ width: '13rem' }} className="m-4">
             
              <Card.Body>
                <Card.Text>
                  Uduario
                  {order.idUser}
                  {order.UserName}
                </Card.Text>
                <Card.Text>
                  Ingrediente
                  {order.idIngredient}
                  {order.IngredientName}
                </Card.Text>
                <Card.Text>
                  Cantidad
                  {order.amount}
                </Card.Text>
                <Card.Text>
                  Unidad
                  {order.unit}
                </Card.Text>
              </Card.Body>
              
            </Card>
          
        </div>
      ))}
    </div>
  </div>
  
  );
}

