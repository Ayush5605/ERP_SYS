import { GraduationCap, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { menuItems } from "../../config/menuItems.js";
import { useUser } from "../../context/UserContext.jsx";
import { cn } from "../../lib/utils.js";

export function Sidebar({ activeItem = "dashboard", onItemClick }) {
  const { user } = useUser();
  const [openMenu, setOpenMenu] = useState(null);

  if (!user) return null;

  // Filter parent menus by role
  const filteredMenu = menuItems.filter((item) =>
    item.roles.includes(user.role)
  );

  // Auto-open parent menu if a child is active (important for refresh)
  useEffect(() => {
    const parent = filteredMenu.find(
      (item) =>
        item.children &&
        activeItem.startsWith(item.id + "/")
    );

    if (parent) {
      setOpenMenu(parent.id);
    }
  }, [activeItem, filteredMenu]);

  return (
    <aside className="w-64 bg-white border-r h-screen flex flex-col">
      
      {/* HEADER */}
      <div className="p-6 border-b flex-shrink-0">
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

      {/* NAV */}
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-1">
          {filteredMenu.map((item) => {
            const Icon = item.icon;
            const hasChildren = item.children?.length > 0;
            const isOpen = openMenu === item.id;

            const isParentActive =
              activeItem === item.id ||
              activeItem.startsWith(item.id + "/");

            // Filter children by role (important for security)
            const visibleChildren = item.children?.filter((child) =>
              child.roles.includes(user.role)
            );

            return (
              <li key={item.id}>
                {/* PARENT ITEM */}
                <button
                  onClick={() => {
                    if (hasChildren) {
                      setOpenMenu(isOpen ? null : item.id);
                    } else {
                      onItemClick(item.id);
                    }
                  }}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-2.5 rounded-lg transition",
                    isParentActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </div>

                  {hasChildren && (
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        isOpen && "rotate-180"
                      )}
                    />
                  )}
                </button>

                {/* CHILD ITEMS */}
                {hasChildren && isOpen && (
                  <ul className="ml-8 mt-1 space-y-1">
                    {visibleChildren.map((child) => {
                      const isChildActive =
                        activeItem === `${item.id}/${child.id}`;

                      return (
                        <li key={child.id}>
                          <button
                            onClick={() =>
                              onItemClick(`${item.id}/${child.id}`)
                            }
                            className={cn(
                              "w-full text-left px-3 py-2 rounded-md text-sm transition",
                              isChildActive
                                ? "bg-blue-50 text-blue-600"
                                : "text-gray-600 hover:bg-gray-50"
                            )}
                          >
                            {child.label}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
