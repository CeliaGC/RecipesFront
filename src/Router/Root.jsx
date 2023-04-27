/* import { Outlet, useNavigation } from "react-router-dom";
import '../Style/Home.css';
import FormLogin from "../Component/FormLogin";
import { useState } from 'react';
import Home from "../Pages/Home";


function Root() {

  const navigation = useNavigation()
  
  return (
    <>
      <main className="container">
        {navigation.state === "loading" && (
          <div className="alert alert-info my-S">Loading...</div>
        )}

      
      <Outlet />

      </main>
    </>
  )
}

export default Root; */