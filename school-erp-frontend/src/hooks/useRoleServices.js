import { useUser } from "../context/UserContext";

// ===== Academics =====
import * as studentAcademics from "../services/Students/academics.service.js";
import * as teacherAcademics from "../services/Teachers/academics.service.js";
import * as parentAcademics from "../services/Parents/academics.service.js";
import * as adminAcademics from "../services/Admin/academics.service.js";

// ===== Attendance =====
import * as studentAttendance from "../services/Students/attendance.service.js";

// ===== Homework =====
import * as studentHomework from "../services/Students/homework.service.js";

// -----------------------------------
// Academics
// -----------------------------------
export const useAcademicsService = () => {
  const { user } = useUser();

  if (!user?.role) return studentAcademics;

  switch (user.role) {
    case "STUDENT":
      return studentAcademics;
    case "TEACHER":
      return teacherAcademics;
    case "PARENT":
      return parentAcademics;
    case "ADMIN":
      return adminAcademics;
    default:
      return studentAcademics;
  }
};

// -----------------------------------
// Attendance
// -----------------------------------
export const useAttendanceService = () => {
  const { user } = useUser();

  if (!user?.role) return studentAttendance;

  switch (user.role) {
    case "STUDENT":
      return studentAttendance;
    default:
      return studentAttendance; // teacher/admin later
  }
};

// -----------------------------------
// Homework
// -----------------------------------
export const useHomeworkService = () => {
  const { user } = useUser();

  if (!user?.role) return studentHomework;

  switch (user.role) {
    case "STUDENT":
      return studentHomework;
    default:
      return studentHomework; // teacher/admin later
  }
};
