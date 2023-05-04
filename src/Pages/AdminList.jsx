import React from 'react';
import {  useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/AdminList.css'

export default function ListAdmin() {
  const {orders} = useLoaderData();
  console.log  (orders)
  const handleSendEmail = () => {
    window.location.href = 'mailto:cooksmart56@gmail.com';
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="row">
      {orders.map((order) => (
        <div key={order.id} className="col col-4">
            El profe ha pedido esto:
            {order.map(orderItem => {
              return (
                <Card style={{ width: '13rem' }} className="m-4">
             
                <Card.Body>
                  <Card.Text>
                    Uduario
                    {orderItem.idUser}
                    {orderItem.UserName}
                  </Card.Text>
                  <Card.Text>
                    Ingrediente
                    {orderItem.idIngredient}
                    {orderItem.IngredientName}
                  </Card.Text>
                  <Card.Text>
                    Cantidad
                    {orderItem.amount}
                  </Card.Text>
                  <Card.Text>
                    Unidad
                    {orderItem.unit}
                  </Card.Text>
                </Card.Body>
                
              </Card>
              )
            })}
            
          
        </div>
      ))}
     <div className="col col-12 d-flex justify-content-center">
     <button className="btnSendEmail" onClick={handleSendEmail}>Enviar correo electrónico</button>
        </div>
      </div>
    </div>
  );
}

