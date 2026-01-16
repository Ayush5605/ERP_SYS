import { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext.jsx";
import { useAcademicsService } from "../../hooks/useRoleServices.js";
import WeeklyTimetable from "../../components/Academics/WeeklyTimetable.jsx";

export default function Academics() {
  const { user } = useUser();
  const academicsService = useAcademicsService();

  const [timetable, setTimetable] = useState([]);

  useEffect(() => {
    academicsService.getTimetable().then(setTimetable);
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">
        Weekly Timetable
      </h2>

      <WeeklyTimetable
        timetable={timetable}
        mode={user.role === "TEACHER" ? "teacher" : "student"}
      />
    </div>
  );
}
