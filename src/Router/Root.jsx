import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Component/Navbar";
import '../Style/Home.css';
import FormLogin from "../Component/FormLogin";
import { useState } from 'react';
import Home from "../Pages/home";


function Root() {
  const [UserEmail, setUserEmail] = useState([])
  const [UserName, setUserName] = useState([])

  
  const navigation = useNavigation()
  
  function handleLogout() {
    setUserEmail([]);
    navigation.navigate("/FormLogin");
  }

  
  return (
    <>
      <Navbar />
      <main className="container">
        {navigation.state === "loading" && (
          <div className="alert alert-info my-S">Loading...</div>
        )}

        {
          !UserEmail.length > 0
            ? <FormLogin setUserEmail={setUserEmail} />

            : <Home UserName={UserName} handleLogout={handleLogout} />
        }
     {/*    <Outlet /> */}

      </main>
    </>
  )
}

export default Root;