import { GraduationCap } from "lucide-react";
import { menuItems } from "../../config/menuItems.js";
import { useUser } from "../../context/UserContext.jsx";
import { cn } from "../../lib/utils.js";

export function Sidebar({ activeItem = "dashboard", onItemClick }) {
  const { user } = useUser();

  const filteredMenu = menuItems.filter((item) =>
    item.roles.includes(user.role)
  );

  return (
    <aside className="w-64 bg-white border-r h-screen">
      <div className="p-6 border-b">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <GraduationCap className="text-white" />
          </div>
          <div>
            <h2 className="font-semibold">School ERP</h2>
            <p className="text-xs text-gray-500">
              {user.role} Panel
            </p>
          </div>
        </div>
      </div>

      <nav className="p-4">
        <ul className="space-y-1">
          {filteredMenu.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <li key={item.id}>
                <button
                  onClick={() => onItemClick(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-2.5 rounded-lg",
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
