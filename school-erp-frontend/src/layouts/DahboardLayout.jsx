import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Sidebar } from "../components/common/Sidebar.jsx";
import { TopNavbar } from "../components/common/TopNavbar.jsx";

export default function DashboardLayout() {
  const navigate = useNavigate();
  const location=useLocation();

  const activeItem=location.pathname
  .replace("/dashboard/","")
  .replace("/super-admin/","super-admin/")

  const handleSidebarClick = (item) => {
    
    navigate(`/${item}`);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      
      <Sidebar
        activeItem={activeItem}
        onItemClick={handleSidebarClick}
      />

      <div className="flex flex-col flex-1">
        <TopNavbar/>
      

      
      <main className="flex-1 overflow-y-auto p-6">
        <Outlet />
      </main>
    </div>
  </div>
  );
}
