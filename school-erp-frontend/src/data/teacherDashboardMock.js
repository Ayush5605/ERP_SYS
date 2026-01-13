
export const teacherDashboardMock = {
  classes: [
    { subject: "Mathematics", class: "10-A" },
    { subject: "Physics", class: "12-B" },
  ],

  attendance: {
    today: "Pending",
  },

  assignments: [
    { title: "Algebra Worksheet", pending: 12 },
    { title: "Unit Test Paper", pending: 5 },
  ],

  exams: [
    { subject: "Maths", date: "20 Feb" },
  ],

  notices: [
    { title: "Exam duty assigned", date: "Today" },
  ],
};
