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