import { useState } from "react";
import teacherData from "../../data/Teacher/attendance.data.js";
import studentsByClass from "../../data/Teacher/student.data.js";
import {
  createTodayAttendance,
  toggleAttendance,
  lockAttendance,
  markAttendanceByRolls
} from "../../services/Teachers/attendance.service.js";


export default function TeacherAttendancePage() {
  
  if (!teacherData.isClassTeacher || !teacherData.permissions.canMarkAttendance) {
    return (
      <div style={{ padding: 24 }}>
        <h2>Unauthorized</h2>
        <p>You are not allowed to mark attendance.</p>
      </div>
    );
  }

  const today = new Date().toISOString().split("T")[0];
  const classId = teacherData.classTeacherOf;

  const [attendance, setAttendance] = useState(() =>
    createTodayAttendance({
      date: today,
      classId: classId,
      classTeacherId: teacherData.id,
      students: studentsByClass[classId],
    })
  );

  const[isHover,setIsHover]=useState(false);
  const [presentRolls,setPresentRolls]=useState("");

  const handleToggle = (studentId) => {
    setAttendance((prev) => toggleAttendance(prev, studentId));
  };

  const handleSubmit = () => {
    setAttendance((prev) => lockAttendance(prev));
    console.log("FINAL ATTENDANCE:", attendance);
    alert("Attendance submitted successfully");
  };

  return (
    <div style={{ padding: 24, maxWidth: 800, margin: "auto" }}>
      <h2><b>Class Attendance</b></h2>

      <p>
        <strong>Class:</strong> {classId} <br />
        <strong>Date:</strong> {attendance.date}
      </p>

      <div style={{ marginBottom: 12 }}>
        <label style={{ fontWeight: "bold" }}>
            Enter Present Roll Numbers (comma separated):
        </label>
        <br />
        <input
             type="text"
             value={presentRolls}
             placeholder="e.g. 1,4,5"
             onChange={(e) => setPresentRolls(e.target.value)}
             style={{
             marginTop: 6,
             padding: "8px",
             width: "300px",
             borderRadius: "4px",
              border: "1px solid #ccc",
             }}
        />

             <button
              onClick={() => {
              setAttendance((prev) =>
              markAttendanceByRolls(prev, presentRolls)
              );
              }}
             style={{
             padding: "8px 14px",
             border: "1px solid green",
             borderRadius: "5px",
             backgroundColor: "white",
             color: "green",
             cursor: "pointer",
             marginBottom: 16,
             marginRight:"25px",
             }}
             >
             Submit
            </button>
        </div>

      <table
        border="1"
        cellPadding="10"
        style={{ width: "100%", marginTop: 16 ,border:"1px solid black",
            textAlign:"center"
        }}
      >
        <thead>
          <tr>
            <th style={{border:"1px solid black"}}>Roll No</th>
            <th style={{border:"1px solid black"}}>Student Name</th>
            <th style={{border:"1px solid black"}}>Status</th>
          </tr>
        </thead>
        <tbody >
          {attendance.students.map((student) => (
            <tr key={student.studentId}>
              <td style={{border:"1px solid black"}}>{student.rollNo}</td>
              <td style={{border:"1px solid black"}}>{student.name}</td>
              <td style={{border:"1px solid black"}}>
                <button
                  
                  onClick={() => handleToggle(student.studentId)}
                  disabled={attendance.isLocked}
                  style={{
                    padding: "6px 12px",
                    background:
                      student.status === "P" ? "#16a34a" : "#dc2626",
                     backgroundColor:"white",
                     color:
                     student.status==="P"?"black":"black",
                     transition:"all 0.2s ease",
                     borderRadius:"5px",

                    border: 
                    student.status==="P"?"1px solid green":"1px solid red",
                    cursor: attendance.isLocked ? "not-allowed" : "pointer",
                  }}
                >
                  {student.status === "P" ? "Present" : "Absent"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: 20, textAlign: "right" }}>
        {!attendance.isLocked ? (
          <button
            onMouseEnter={()=>setIsHover(true)}
            onMouseLeave={()=>setIsHover(false)}
            onClick={handleSubmit}
            style={{ padding: "10px 16px", fontWeight: "bold" ,border:"1px solid green",
                borderRadius:"5px",
                backgroundColor:isHover? "green":"white",
                color:isHover?"white":"green",
                transition:"all 0.2s ease",


            }}
          >
            Submit Attendance
          </button>
        ) : (
          <p style={{ color: "green", fontWeight: "bold" }}>
            Attendance Locked ✅
          </p>
        )}
      </div>
    </div>
  );
}
