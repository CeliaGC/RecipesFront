import '../Style/Home.css';




function Home( { user,handleLogout } ) {

  

    return (
      <div className='App'>
          <h1>este es el home</h1>
          <h1>Bienvenido, {user}!</h1>
          <button onClick={handleLogout}>Cerrar sesion</button>
   
        </div>
    )
  }
  
 export default Home;