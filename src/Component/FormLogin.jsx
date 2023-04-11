import "../Style/FormLogin.css";
import { useState } from "react"



export function FormLogin() {
    const [nombre, setNombre] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()

        if (nombre === "" || password === "") {
            setError(true)
            return
        }

    }


    return (
        <section>
            <h1>Login</h1>
            <form className="formulario"
            onSubmit={handleSubmit}>

                <input type="text"
                    value={nombre}
                    onChange={event => setNombre(event.target.value)} />
                <input type="password"
                value={password}
                onChange={event => setPassword(event.target.value)} />
                <button>Iniciar sesion</button>
            </form>
            {error && <p>Todos los campos son obligatorios</p>}
           
        </section>  


    )
} 

/* import React, { useState } from 'react';


function FormLogin() {
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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} required />
      </div>
      <div>
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
      </div>
      <button type="submit">Registrarse</button>
    </form>
  );
}
export default FormLogin; */