

function ViewMenu() {

  const isLogged = JSON.parse(localStorage.getItem("userData"));
  console.log(isLogged);
  
    return (
      <div className='App'>
          {isLogged ? <h1>estoy loggeado</h1> : <h1>no estoy loggeado</h1>}
          <h1>este es el catalogo de un Menu concreto, ensalada</h1>
        </div>
    )
  }
  
  export default ViewMenu