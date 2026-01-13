import {
  LayoutDashboard,
  Users,
  DollarSign,
  Calendar,
  BookOpen,
  ClipboardList,
  FileText,
  UserCog,
  Bell,
  Settings,
  Bus,
  Home,
  Library,
  Package,
  ShieldCheck
} from "lucide-react";

import { ROLES } from "../constants/roles";

export const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    roles: [
      ROLES.SUPER_ADMIN,
      ROLES.ADMIN,
      ROLES.TEACHER,
      ROLES.STUDENT,
      ROLES.PARENT
    ]
  },


  {
    id: "super-admin",
    label: "Super Admin",
    icon: ShieldCheck,
    roles: [ROLES.SUPER_ADMIN]
  },

  {
    id: "students",
    label: "Students",
    icon: Users,
    roles: [
      ROLES.SUPER_ADMIN,
      ROLES.ADMIN,
      ROLES.TEACHER
    ]
  },

  {
    id: "fees",
    label: "Fees Collection",
    icon: DollarSign,
    roles: [
      ROLES.SUPER_ADMIN,
      ROLES.ADMIN
    ]
  },

  {
    id: "academics",
    label: "Academics",
    icon: BookOpen,
    roles: [
      ROLES.SUPER_ADMIN,
      ROLES.ADMIN,
      ROLES.TEACHER,
      ROLES.STUDENT,
      ROLES.PARENT
    ]
  },

  {
    id: "attendance",
    label: "Attendance",
    icon: Calendar,
    roles: [
      ROLES.SUPER_ADMIN,
      ROLES.ADMIN,
      ROLES.TEACHER,
      ROLES.STUDENT,
      ROLES.PARENT
    ]
  },

  {
    id: "homework",
    label: "Homework",
    icon: FileText,
    roles: [
      ROLES.SUPER_ADMIN,
      ROLES.ADMIN,
      ROLES.TEACHER,
      ROLES.STUDENT,
      ROLES.PARENT
    ]
  },

  {
    id: "examination",
    label: "Examination",
    icon: ClipboardList,
    roles: [
      ROLES.SUPER_ADMIN,
      ROLES.ADMIN,
      ROLES.TEACHER
    ]
  },

  {
    id: "library",
    label: "Library",
    icon: Library,
    roles: [
      ROLES.SUPER_ADMIN,
      ROLES.ADMIN,
      ROLES.STUDENT,
      ROLES.PARENT
    ]
  },

  {
    id: "transport",
    label: "Transport",
    icon: Bus,
    roles: [
      ROLES.SUPER_ADMIN,
      ROLES.ADMIN,
      ROLES.STUDENT,
      ROLES.PARENT
    ]
  },

  {
    id: "hostel",
    label: "Hostel",
    icon: Home,
    roles: [
      ROLES.SUPER_ADMIN,
      ROLES.ADMIN,
      ROLES.STUDENT
    ]
  },

  {
    id: "inventory",
    label: "Inventory",
    icon: Package,
    roles: [
      ROLES.SUPER_ADMIN,
      ROLES.ADMIN
    ]
  },

  {
    id: "hr",
    label: "Human Resources",
    icon: UserCog,
    roles: [
      ROLES.SUPER_ADMIN,
      ROLES.ADMIN
    ]
  },

  {
    id: "communication",
    label: "Communication",
    icon: Bell,
    roles: [
      ROLES.SUPER_ADMIN,
      ROLES.ADMIN,
      ROLES.TEACHER
    ]
  },

  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    roles: [
      ROLES.SUPER_ADMIN,
      ROLES.ADMIN
    ]
  }
];
