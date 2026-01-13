// layouts/cards/AttendanceCard.jsx
import { CalendarCheck } from "lucide-react";
import CardShell from "./CardShell.jsx";

export default function AttendanceCard({ attendance }) {
  const status = attendance?.today || "Not Available";

  const statusColor =
    status === "Completed"
      ? "text-green-600"
      : status === "Pending"
      ? "text-orange-600"
      : "text-gray-500";

  return (
    <CardShell title="Attendance" icon={CalendarCheck}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">Today’s Status</p>
          <p className={`font-semibold ${statusColor}`}>{status}</p>
        </div>

        <button
          className="rounded-lg bg-blue-600 px-4 py-1.5 text-sm text-white hover:bg-blue-700 transition"
        >
          Mark
        </button>
      </div>
    </CardShell>
  );
}
