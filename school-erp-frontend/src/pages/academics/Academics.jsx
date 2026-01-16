import { useEffect, useState } from "react";
import { useAcademicsService } from "../../hooks/useRoleServices.js";
import WeeklyTimetable from "../../components/Academics/WeeklyTimetable.jsx";

export default function Academics() {
  const academicsService = useAcademicsService();

  const [subjects, setSubjects] = useState([]);
  const [timetable, setTimetable] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      academicsService.getSubjects(),
      academicsService.getTimetable(),
    ]).then(([subjectsData, timetableData]) => {
      setSubjects(subjectsData);
      setTimetable(timetableData);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading academics...</p>;

  return (
    <div className="space-y-6">
      {/* Weekly Timetable */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Weekly Timetable</h2>
        <WeeklyTimetable timetable={timetable} />
      </div>

      {/* Subjects List */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Subjects</h2>
        <div className="grid grid-cols-2 gap-4">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className="p-4 border rounded-lg"
            >
              <h3 className="font-medium">{subject.name}</h3>
              <p className="text-sm text-muted-foreground">
                Teacher: {subject.teacher}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
