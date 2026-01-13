// pages/Dashboard.jsx
import StudentDashboard from "./Dashboard/StudentDashboard.jsx";
import ParentDashboard from "./Dashboard/ParentDashboard.jsx";
import AdminDashboard from "./Dashboard/AdminDashboard.jsx";

import { dashboardMock } from "../data/dashboardMock.js";
import { useUser } from "../context/UserContext.jsx";

export default function Dashboard() {
  const { user } = useUser(); 

  console.log(user);

  if(!user){
    return <p className="text-gray-500">Loading Dashboard...</p>
  }

  switch (user.role) {
    case "STUDENT":
      return <StudentDashboard data={dashboardMock} />;

    case "PARENT":
      return <ParentDashboard data={dashboardMock} />;

    

    default:
      return <p>Unauthorized</p>;
  }
}
