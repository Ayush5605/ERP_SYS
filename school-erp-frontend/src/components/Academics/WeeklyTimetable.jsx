const PERIODS = [
  "09:00 - 09:45",
  "09:50 - 10:35",
  "10:40 - 11:25",
];

const getToday = () => {
  return new Date().toLocaleDateString("en-US", { weekday: "long" });
};

export default function WeeklyTimetable({ timetable }) {
  const today = getToday();

  return (
    <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
      <table className="w-full border-collapse text-sm">
        {/* Header */}
        <thead>
          <tr className="bg-slate-100">
            <th className="p-4 text-left font-semibold text-slate-600">
              Day
            </th>
            {PERIODS.map((time) => (
              <th
                key={time}
                className="p-4 text-center font-medium text-slate-600"
              >
                {time}
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {timetable.map((day) => {
            const isToday = day.day === today;

            return (
              <tr
                key={day.day}
                className={`border-t transition ${
                  isToday ? "bg-blue-50" : "hover:bg-slate-50"
                }`}
              >
                {/* Day Column */}
                <td className="p-4 font-semibold text-slate-700">
                  {day.day}
                  {isToday && (
                    <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-blue-600 text-white">
                      Today
                    </span>
                  )}
                </td>

                {/* Periods */}
                {day.periods.map((period, idx) => (
                  <td key={idx} className="p-3 text-center">
                    <div className="rounded-lg bg-blue-100 text-blue-700 px-3 py-2 font-medium shadow-sm hover:bg-blue-200 transition">
                      {period.subject}
                    </div>
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
