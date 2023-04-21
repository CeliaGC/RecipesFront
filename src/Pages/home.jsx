import '../Style/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import Navb from '../Component/Navbar';





function Home( { user, handleLogout } ) {

  

    return (
      
      <div className='App'style={{ backgroundColor: '#D6C6B4' }}>
        <Navb/>
       
          <h1>este es el home</h1>
          <h1>Hola {user}, gusto en saludarte!</h1>
          <Button variant="primary" type="submit" onClick={handleLogout}>Cerrar sesion</Button>
        </div>
    )
  }
  
 export default Home;