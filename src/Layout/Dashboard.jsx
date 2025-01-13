import { FaAd, FaCalendar, FaHome, FaList, FaMailBulk, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-primary">
        <h3 className="uppercase text-center font-bold text-3xl py-8 px-4">Bistro Boss</h3>
        <ul className="menu">
          <li>
            <NavLink to={"/dashboard/userHome"}>
              <FaHome></FaHome>User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/reservation"}>
              <FaCalendar></FaCalendar> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}>
              <FaShoppingCart></FaShoppingCart>My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/review"}>
              <FaAd></FaAd> Review
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/bookings"}>
              <FaList></FaList> My Bookings
            </NavLink>
          </li>

          <div className="divider"></div>

          <li>
            <NavLink to={"/"}>
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>
              <FaList></FaList> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={""}>
              <FaShoppingBag></FaShoppingBag> Shop
            </NavLink>
          </li>
          <li>
            <NavLink to={""}>
              <FaMailBulk></FaMailBulk> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
