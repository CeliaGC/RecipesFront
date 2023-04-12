import '../Style/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";




function Home( { UserName,handleLogout } ) {

  

    return (
      <div className='App'>
          <h1>este es el home</h1>
          <h1>Bienvenido, {UserName}!</h1>
          <Button variant="primary" type="submit" onClick={handleLogout}>Cerrar sesion</Button>
        </div>
    )
  }
  
 export default Home;