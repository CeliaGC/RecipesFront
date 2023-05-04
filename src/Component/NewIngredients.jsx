import React, { useState, useEffect } from 'react';
import {Form, Button } from 'react-bootstrap';

function IngredientesForm({ addToIngredient }) {
  const [ingredientes, setIngredientes] = useState([]);
  const [ingrediente, setIngrediente] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [unidad, setUnidad] = useState('');
  const unidades = ['g', 'kg', 'ml', 'L', 'ud', 'cs'];
  const localStorageKey = 'ingredientes';

  useEffect(() => {
    const ingredientesGuardados = JSON.parse(localStorage.getItem(localStorageKey));
    if (ingredientesGuardados) {
      setIngredientes(ingredientesGuardados);
    }
  }, []);

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
  
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(ingredientes));
  }, [ingredientes]);

  return (
    <div>
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
          <Form.Select value={unidad} onChange={e => setUnidad(e.target.value)}>
            <option value="">-- Seleccionar --</option>
            {unidades.map((unidad, index) => (
              <option key={index} value={unidad}>
                {unidad}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button variant="primary" onClick={handleAgregar}>
          Agregar
        </Button>
      </Form>
    </div>
  );
}

export default IngredientesForm;