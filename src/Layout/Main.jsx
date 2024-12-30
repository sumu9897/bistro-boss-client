import { Outlet } from "react-router-dom"
import Footer from "../pages/shared/Footer/Footer"
import Navbar from "../pages/shared/NavBar/Navbar"

const Main = () => {
  return (
    <div>
        <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Main
