import React, { useState } from 'react';
import { Table, Form, Button } from 'react-bootstrap';

function IngredientesForm() {
  const [ingredientes, setIngredientes] = useState([]);
  const [ingrediente, setIngrediente] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [unidad, setUnidad] = useState('');

  const handleAgregar = () => {
    const nuevoIngrediente = {
      ingrediente: ingrediente,
      cantidad: cantidad,
      unidad: unidad
    };
    setIngredientes([...ingredientes, nuevoIngrediente]);
    setIngrediente('');
    setCantidad('');
    setUnidad('');
  };

  return (
    <div>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Ingrediente</th>
            <th>Cantidad</th>
            <th>Unidad</th>
          </tr>
        </thead>
        <tbody>
          {ingredientes.map((ingrediente, index) => (
            <tr key={index}>
              <td>{ingrediente.ingrediente}</td>
              <td>{ingrediente.cantidad}</td>
              <td>{ingrediente.unidad}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Form>
        <Form.Group controlId="ingrediente">
          <Form.Label>Ingrediente</Form.Label>
          <Form.Control type="text" value={ingrediente} onChange={e => setIngrediente(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="cantidad">
          <Form.Label>Cantidad</Form.Label>
          <Form.Control type="text" value={cantidad} onChange={e => setCantidad(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="unidad">
          <Form.Label>Unidad</Form.Label>
          <Form.Control type="text" value={unidad} onChange={e => setUnidad(e.target.value)} />
        </Form.Group>
        <Button variant="primary" onClick={handleAgregar}>
          Agregar
        </Button>
      </Form>
      
    </div>
  );
}

export default IngredientesForm;
