import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Component/navbar";



function Root() {
  const navigation = useNavigation()
  return (
    <>
    <Navbar></Navbar>
   
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