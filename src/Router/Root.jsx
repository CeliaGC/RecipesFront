import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Component/Navbar";
import '../Style/Home.css';
import FormLogin from "../Component/FormLogin";
import { useState } from 'react';
import Home from "../Pages/home";


function Root() {

  const [User, setUser] = useState([])

  

  
  function handleLogout() {
    setUser([]);


  }

  
  return (
    <>
      <Navbar />
      <main className="container">
        {navigation.state === "loading" && (
          <div className="alert alert-info my-S">Loading...</div>
        )}

        {
          !User.length > 0
            ? <FormLogin setUser={setUser} />

            : <Home User={User} handleLogout={handleLogout} />
        }
     {/*    <Outlet /> */}

      </main>
    </>
  )
}

export default Root;