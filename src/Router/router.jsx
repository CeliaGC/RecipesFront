import { Outlet, useNavigation } from "react-router-dom";
import Navb from "../Component/Navbar";
import Footer from "../Component/footer";


function Root() {
  const navigation = useNavigation()
  return (
    <>
      <Navb/>
      <main className="container">
        {navigation.state === "loading" && (
          <div className="alert alert-info my-S">Loading...</div>
        )}
        <Outlet />
        <Footer />
      
      </main>
    </>
  )
}

export default Root;