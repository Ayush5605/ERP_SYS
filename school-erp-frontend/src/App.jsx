import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function AdminDashboard() {
  return <h1>Admin Dashboard</h1>;
}

function StudentDashboard(){
  return <h1>Student Dashboard</h1>
}

function TeacherDashboard() {
  return <h1>Teacher Dashboard</h1>;
}

function ParentDashboard() {
  return <h1>Parent Dashboard</h1>;
}


function Super_Admin_Dashboard() {
  return <h1>Super Admin Dashboard</h1>;
}



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute allowedRole="ADMIN">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/teacher/dashboard"
          element={
            <ProtectedRoute allowedRole="TEACHER">
              <TeacherDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/dashboard"
          element={
            <ProtectedRoute allowedRole="STUDENT">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />


        <Route
          path="/parent/dashboard"
          element={
            <ProtectedRoute allowedRole="PARENT">
              <ParentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/super-admin/dashboard"
          element={
            <ProtectedRoute allowedRole="SUPER-ADMIN">
              <Super_Admin_Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
