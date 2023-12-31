import React from 'react';
import { useLoaderData } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/AdminList.css';
import Table from 'react-bootstrap/Table';

export default function ListAdmin() {
  const { orders } = useLoaderData();

  const handleSendEmail = () => {
    window.location.href = 'mailto:cooksmart56@gmail.com';
  };
  const totalsByIngredient = {};
  orders.forEach((order) =>
    order.forEach((orderItem) => {
      const { ingredientName, amount, unit } = orderItem;
      if (!totalsByIngredient[ingredientName]) {
        totalsByIngredient[ingredientName] = { amount: 0, unit };
      }
      totalsByIngredient[ingredientName].amount += amount;
    })
  );

  return (
    <div className="container mt-5">
      <div className="row">
        <div>
          <h3>Listado de pedidos</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Ingrediente</th>
                <th>Cantidad</th>
                <th>Unidad</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) =>
                order.map((orderItem) => (
                  <tr key={orderItem.id}>
                    <td>{orderItem.username}</td>
                    <td>{orderItem.ingredientName}</td>
                    <td>{orderItem.amount}</td>
                    <td>{orderItem.unit}</td>
                    <td>{orderItem.insertDate}</td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
        <div className="col col-12">
          <h3>Tabla de totales</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Ingrediente</th>
                <th>Cantidad</th>
                <th>Unidad</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(totalsByIngredient).map(([ingredientName, { amount, unit }]) => (
                <tr key={ingredientName}>
                  <td>{ingredientName}</td>
                  <td>{amount}</td>
                  <td>{unit}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className=" d-flex justify-content-center">
          <button className="btnSendEmail" onClick={handleSendEmail}>
            Enviar correo electrónico
          </button>
        </div>
      </div>
    </div>
  );
}
