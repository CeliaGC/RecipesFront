import { Outlet, useNavigation } from "react-router-dom";

import Navbar from "../Component/Navbar";
import Recipe from "../Component/Recipe"



function Root() {
  const navigation = useNavigation()
  return (
    <>
    <Navbar></Navbar>
     <Recipe></Recipe>
      <main className="container">
        {navigation.state === "loading" && (
          <div className="alert alert-info my-S">Loading...</div>
        )}
        <Outlet />
      </main>
    </>
  )
}

export default Root