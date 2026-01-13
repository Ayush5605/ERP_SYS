import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./layouts/DahboardLayout.jsx";
import { ROLES } from "./constants/roles.js";

import AdminDashboard from "./pages/Dashboard/AdminDashboard.jsx";
import TeacherDashboard from "./pages/Dashboard/TeacherDashboard.jsx";
import StudentDashboard from "./pages/Dashboard/StudentDashboard.jsx";
import ParentDashboard from "./pages/Dashboard/ParentDashboard.jsx";
import SuperAdminDashboard from "./pages/Dashboard/SuperAdminDashboard.jsx";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* DASHBOARD LAYOUT */}
        <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<Dashboard/>}/>


          <Route
            path="admin"
            element={
              <ProtectedRoute allowedRole={ROLES.ADMIN}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="teacher"
            element={
              <ProtectedRoute allowedRole={ROLES.TEACHER}>
                <TeacherDashboard />
              </ProtectedRoute>
            }
          />

          
          <Route
            path="super-admin"
            element={
              <ProtectedRoute allowedRole={ROLES.SUPER_ADMIN}>
                <SuperAdminDashboard />
              </ProtectedRoute>
            }
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}
