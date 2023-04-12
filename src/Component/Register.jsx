import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "../Style/Register.css";

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Enviar datos al servidor
  };

  return (
    <div className="registration-form-container">
        
      <div className="registration-form-title">
      </div>
      <Form onSubmit={handleSubmit}>
        <h2>Registro</h2>
        <Form.Group className="mb-3">
          <Form.Label><FontAwesomeIcon icon={faUser} /> Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre" value={name} onChange={handleNameChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label><FontAwesomeIcon icon={faEnvelope} /> Correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="Correo electrónico" value={email} onChange={handleEmailChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label><FontAwesomeIcon icon={faLock} /> Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} required />
        </Form.Group>
        <Button variant="primary" type="submit">Registrarse</Button>
      </Form>
    </div>
  );
}

export default RegisterForm;
