import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import './LoginModal.css'; // Importar los estilos CSS

const LoginModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Iniciar sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="email@email.com" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="*******" />
            <Form.Text className="text-muted">
              <a href="#">¿Ha olvidado su contraseña?</a>
            </Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit">
          Iniciar sesión
        </Button>
        <Button variant="secondary" onClick={props.onHide}>
          Cerrar
        </Button>
        <Form.Text className="text-muted">
          ¿No está registrado aún? <a href="#">Regístrese aquí</a>
        </Form.Text>
      </Modal.Footer>
    </Modal>
  );
};

const Login = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setShowLoginModal(true)}>Iniciar sesión</Button>

      <LoginModal show={showLoginModal} onHide={() => setShowLoginModal(false)} />
    </div>
  );
};

export default Login;
