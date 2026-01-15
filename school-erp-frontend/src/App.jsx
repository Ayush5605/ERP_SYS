import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DashboardLayout from "./layouts/DahboardLayout.jsx";

import Dashboard from "./pages/Dashboard.jsx";

/* Normal pages */
import Students from "./pages/students/Students.jsx";
import Academics from "./pages/academics/Academics";
import Fees from "./pages/fees/Fees.jsx";
import Attendance from "./pages/attendance/Attendance.jsx";
import Examination from "./pages/examination/Examination";

/* Super Admin pages */
import Schools from "./pages/super-admin/Schools.jsx";
import Subscriptions from "./pages/super-admin/Subscriptions.jsx";
import Security from "./pages/super-admin/Security.jsx";

import { UserProvider } from "./context/UserContext.jsx";
import Homewrok from "./pages/homework/Homework";
import Inventory from "./pages/inventory/Inventory";
import Library from "./pages/library/Library";
import Transport from "./pages/transport/Transport";
import AuditLog from "./pages/super-admin/AuditLogs";
import Settings from "./pages/super-admin/Settings";
import Hostel from "./pages/hostel/Hostel";
import Overview from "./pages/super-admin/Overview";
import Admin from "./pages/super-admin/Admin";

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          {/* MAIN LAYOUT */}
          <Route element={<DashboardLayout />}>
            {/* ROLE-BASED DASHBOARD */}
            <Route path="/dashboard" element={<Dashboard />} />

            {/* SIDEBAR ROUTES */}
            <Route path="/academics" element={<Academics/>}/>
            <Route path="/students" element={<Students />} />
            <Route path="/examination" element={<Examination/>}/>
            <Route path="homework" element={<Homewrok/>}/>
            <Route path="/hostel" element={<Hostel/>}/>
            <Route path="/inventory" element={<Inventory/>}/>
            <Route path="/library" elements={<Library/>}/>
            <Route path="/transport" element={<Transport/>}/>

            <Route path="/fees" element={<Fees />} />
            <Route path="/attendance" element={<Attendance />} />

            {/* SUPER ADMIN ROUTES */}
            <Route path="/super-admin/schools" element={<Schools />} />
            <Route path="/super-admin/subscriptions" element={<Subscriptions />} />
            <Route path="/super-admin/security" element={<Security />} />
            <Route path="/super-admin/auditlog" element={<AuditLog/>}/>
            <Route path="/super-admin/setting" element={<Settings/>}/>
            <Route path="/super-admin/sa-dashboard" element={<Overview/>}/>
            <Route path="/super-admin/school-admins" element={<Admin/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}
