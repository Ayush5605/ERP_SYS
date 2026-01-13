import { BookOpen } from "lucide-react";
import CardShell from "./CardShell";

export default function MyClassesCard({ classes = [] }) {
  return (
    <CardShell title="My Classes" icon={BookOpen}>
      {classes.length === 0 ? (
        <p className="text-gray-500">No classes assigned</p>
      ) : (
        classes.map((c, i) => (
          <div key={i} className="flex justify-between">
            <span>{c.subject}</span>
            <span className="text-sm text-gray-500">{c.class}</span>
          </div>
        ))
      )}
    </CardShell>
  );
}
