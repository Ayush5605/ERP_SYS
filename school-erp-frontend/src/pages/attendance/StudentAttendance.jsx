import { useState } from "react";
import { useUser } from "../../context/UserContext.jsx";
import { attendanceData } from "../../data/Student/attendance.data.js";
import AttendanceViewer from "../../components/common/AttendanceViewer.jsx";

export default function StudentAttendance() {
  const { user } = useUser();
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const attendance =
    fromDate && toDate
      ? attendanceData.filter(
          (rec) =>
            rec.studentId === user.id &&
            new Date(rec.date) >= new Date(fromDate) &&
            new Date(rec.date) <= new Date(toDate)
        )
      : [];

  return (
    <AttendanceViewer
      title="📘 My Attendance"
      attendance={attendance}
      fromDate={fromDate}
      toDate={toDate}
      setFromDate={setFromDate}
      setToDate={setToDate}
    />
  );
}
