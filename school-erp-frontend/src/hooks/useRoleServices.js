import { useUser } from "../context/UserContext";

// Academics
import * as studentAcademics from "../services/Students/academics.service.js";
// import * as teacherAcademics from "../services/teacher/academics.service";
// import * as adminAcademics from "../services/admin/academics.service";

// Attendance
import * as studentAttendance from "../services/Students/attendance.service.js";
// import * as teacherAttendance from "../services/teacher/attendance.service";
// import * as adminAttendance from "../services/admin/attendance.service";

// Homework
import * as studentHomework from "../services/Students/homework.service.js";
// import * as teacherHomework from "../services/teacher/homework.service";
// import * as adminHomework from "../services/admin/homework.service";

export const useAcademicsService = () => {
  const { user } = useUser();
  return user.role === "STUDENT"
    ? studentAcademics
    : user.role === "TEACHER"
    ? teacherAcademics
    : adminAcademics;
};

export const useAttendanceService = () => {
  const { user } = useUser();
  return user.role === "STUDENT"
    ? studentAttendance
    : user.role === "TEACHER"
    ? teacherAttendance
    : adminAttendance;
};

export const useHomeworkService = () => {
  const { user } = useUser();
  return user.role === "STUDENT"
    ? studentHomework
    : user.role === "TEACHER"
    ? teacherHomework
    : adminHomework;
};
