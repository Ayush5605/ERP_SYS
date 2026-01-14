import { Bell, Search, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { useUser } from "../../context/UserContext";
import { ROLES } from "../../constants/roles.js";

export function TopNavbar() {
  const { user } = useUser();

  if(!user){
    return null;
  }

  const canShowSearch = [
    ROLES.ADMIN,
    ROLES.TEACHER,
    ROLES.SUPER_ADMIN
  ].includes(user.role);

  const isStudentorParent=[
    ROLES.STUDENT,
    ROLES.PARENT
  ].includes(user.role);

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        {canShowSearch && (
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search students, staff, classes..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {isStudentorParent && (
            <h1 className="text-lg font-semibold text-gray-900">
                School ERP
            </h1>
        )}
      </div>

      
      <div className="flex items-center gap-4">
        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell className="w-5 h-5 text-gray-600" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500 text-white text-xs">
            5
          </Badge>
        </button>

        <div className="h-8 w-px bg-gray-200" />

        <button className="flex items-center gap-3 hover:bg-gray-50 rounded-lg p-2 transition-colors">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-blue-600 text-white">
              {user.name?.[0] || "U"}
            </AvatarFallback>
          </Avatar>

          <div className="text-left hidden md:block">
            <p className="text-sm font-medium text-gray-900">
              {user.name || "User"}
            </p>
            <p className="text-xs text-gray-500">
              {user.role}
            </p>
          </div>

          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </header>
  );
}
