/* import { Outlet, useNavigation } from "react-router-dom";
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

export default Layout; */