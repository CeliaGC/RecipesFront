<<<<<<< HEAD
import { Outlet, useNavigation } from "react-router-dom";
=======
/* import { Outlet, useNavigation } from "react-router-dom";
>>>>>>> feature/login
import Navbar from "../Component/Navbar";


function Layout() {
  const navigation = useNavigation()
  return (
    <>
      <Navbar/>
      <main className="container">
        {navigation.state === "loading" && (
          <div className="alert alert-info my-S">Loading...</div>
        )}
        <Outlet />
      </main>
    </>
  )
}

<<<<<<< HEAD
export default Layout
=======
export default Layout; */
>>>>>>> feature/login
