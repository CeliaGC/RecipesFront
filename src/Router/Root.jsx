import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Component/Navbar";
import NavbarMenu from "../Component/NavbarMenu"


function Root() {
  const navigation = useNavigation()
  return (
    <>
      <Navbar/>
      <main className="container">
        {navigation.state === "loading" && (
          <div className="alert alert-info my-S">Loading...</div>
        )}
        <NavbarMenu />
        <Outlet />

      </main>
      
    </>
  )
}

export default Root