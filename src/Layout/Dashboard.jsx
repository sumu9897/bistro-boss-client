import { Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <div>
      <div className="w-64 min-h-full bg-primary">
        <ul className="menu">
            <li></li>
        </ul>
      </div>
      <div><Outlet/></div>

    </div>
  )
}

export default Dashboard
