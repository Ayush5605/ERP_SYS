

export function createTodayAttendance({
  date,
  classId,
  classTeacherId,
  students,
}) {
  return {
    date,
    classId,
    classTeacherId,
    isLocked: false,
    students: students.map((s) => ({
      ...s,
      status: "A", 
    })),
  };
}

export function toggleAttendance(attendance, studentId) {
  if (attendance.isLocked) return attendance;

  return {
    ...attendance,
    students: attendance.students.map((s) =>
      s.studentId === studentId
        ? { ...s, status: s.status === "P" ? "A" : "P" }
        : s
    ),
  };
}

export function lockAttendance(attendance) {
  return {
    ...attendance,
    isLocked: true,
  };
}
