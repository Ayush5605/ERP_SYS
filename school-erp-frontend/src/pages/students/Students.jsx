import teacherData from "../../data/Teacher/attendance.data.js";
import students from "../../data/Teacher/studentRecord.data.js";
import { getStudentsForClass } from "../../services/Teachers/student.service.js";

export default function StudentsPage() {
  const classId = teacherData.classTeacherOf;

  const classStudents = getStudentsForClass(students, classId);

  return (
    <div style={{ padding: 24 }}>
      <h1>Students</h1>
      <p>Manage student records here.</p>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: 20,
        }}
      >
        <thead>
          <tr>
            <th style={th}>RollNo</th>
            <th style={th}>Name</th>
            <th style={th}>Age</th>
            <th style={th}>Parent Name</th>
            <th style={th}>Parent Mobile</th>
            <th style={th}>Address</th>
            <th style={th}>Caste</th>
            <th style={th}>Attendance %</th>
          </tr>
        </thead>

        <tbody>
          {classStudents.map((student) => (
            <tr key={student.id}>
              <td style={td}>{student.rollNo}</td>
              <td style={td}>{student.name}</td>
              <td style={td}>{student.age}</td>
              <td style={td}>{student.parentName}</td>
              <td style={td}>{student.parentMobile}</td>
              <td style={td}>{student.address}</td>
              <td style={td}>{student.caste}</td>
              <td style={td}>
                <span
                  style={{
                    padding: "4px 8px",
                    borderRadius: "6px",
                    backgroundColor:
                      student.attendancePercentage >= 75
                        ? "#dcfce7"
                        : "#fee2e2",
                    color:
                      student.attendancePercentage >= 75
                        ? "#166534"
                        : "#991b1b",
                    fontWeight: "bold",
                  }}
                >
                  {student.attendancePercentage}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* styles */
const th = {
  border: "1px solid #ddd",
  padding: "12px",
  backgroundColor: "#f9fafb",
  textAlign: "center",
};

const td = {
  border: "1px solid #ddd",
  padding: "10px",
  textAlign: "center",
};
