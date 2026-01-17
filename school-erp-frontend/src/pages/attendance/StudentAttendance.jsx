import { useState } from "react";
import { useUser } from "../../context/UserContext.jsx";
import { Calendar, CheckCircle, XCircle } from "lucide-react";
import { attendanceData } from "../../data/Student/attendance.data.js";

export default function StudentAttendance() {
  const { user } = useUser();

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const filteredAttendance =
    fromDate && toDate
      ? attendanceData.filter(
          (rec) =>
            rec.studentId === user.id &&
            new Date(rec.date) >= new Date(fromDate) &&
            new Date(rec.date) <= new Date(toDate)
        )
      : [];

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <h2 className="text-2xl font-semibold mb-6">📘 Attendance</h2>

      {/* Date Range */}
      <div className="flex flex-wrap items-end gap-4 mb-6">
        {/* From */}
        <div className="flex flex-col">
          <label className="text-sm mb-1 text-gray-600">From</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* To */}
        <div className="flex flex-col">
          <label className="text-sm mb-1 text-gray-600">To</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="date"
              value={toDate}
              min={fromDate}
              onChange={(e) => setToDate(e.target.value)}
              className="pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Attendance Table */}
      {fromDate && toDate ? (
        filteredAttendance.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full border rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left px-4 py-2">Date</th>
                  <th className="text-left px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredAttendance.map((rec) => (
                  <tr key={rec.id} className="border-t">
                    <td className="px-4 py-2">{rec.date}</td>
                    <td className="px-4 py-2 flex items-center gap-2">
                      {rec.status === "Present" ? (
                        <>
                          <CheckCircle className="text-green-600 w-5 h-5" />
                          <span className="text-green-600 font-medium">
                            Present
                          </span>
                        </>
                      ) : (
                        <>
                          <XCircle className="text-red-600 w-5 h-5" />
                          <span className="text-red-600 font-medium">
                            Absent
                          </span>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500 mt-4">
            No attendance records found for selected dates.
          </p>
        )
      ) : (
        <p className="text-gray-500">
          Please select a date range to view attendance.
        </p>
      )}
    </div>
  );
}
