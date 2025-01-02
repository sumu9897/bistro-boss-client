import { Outlet, useLocation } from "react-router-dom"
import Footer from "../pages/shared/Footer/Footer"
import Navbar from "../pages/shared/NavBar/Navbar"

const Main = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('login')
  return (
    <div>
        {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  )
}

export default Main
