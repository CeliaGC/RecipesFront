import "../Style/FormLogin.css";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";




/*export function FormLogin({setUser}) {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
      event.preventDefault()
  
      if (name === "" || password === "") {
          setError(true)
          return
      }
  
      setError(false)
  
      setUser([name])
  }
  


    return (
        <section>
            <h1>Login</h1>
            <form className="formulario"
            onSubmit={handleSubmit}>

                <input type="text"
                    value={name}
                    onChange={event => setName(event.target.value)} />
                <input type="password"
                value={password}
                onChange={event => setPassword(event.target.value)} />
                <button>Iniciar sesion</button>
            </form>
            {error && <p>Todos los campos son obligatorios</p>}
           
        </section>  


    )
} */



function FormLogin({setUserEmail}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

      const handleSubmit = (event) => {
      event.preventDefault()
  
      if (email === "" || password === "") {
          setError(true)
          return
      }
  
      setError(false)
  
      setUserEmail([email])
  }
  


  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="registration-form-container">
      <div className="registration-form-title">
      </div>
      <Form onSubmit={handleSubmit} className="center-form">
        <h2 style={{marginBottom: '40px'}}>Iniciar sesión</h2>
        <Form.Group className="mb-3" style={{width:'300px'}}>
        <Form.Label><FontAwesomeIcon icon={faEnvelope} /> Correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="Introduce tu correo" value={email} onChange={handleEmailChange} required style={{ border: 'none'}}/>
          <hr className="my-3"/>
        </Form.Group>
        <Form.Group className="mb-3" style={{width:'300px'}}>
          <Form.Label><FontAwesomeIcon icon={faLock} /> Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Introduce tu contraseña" value={password} onChange={handlePasswordChange} required style={{ border: 'none'}}/>
          <hr className="my-3"/>

        </Form.Group>
        <Button variant="primary" type="submit" style={{background:'#F2AA85', border: 'none'}}>Iniciar sesión</Button>
        {error && <p>Todos los campos son obligatorios</p>}
      </Form>
    
    </div>
  );
}
export default FormLogin;