import {
  classes,
  teachers,
  classTimetables,
  teacherTimetables,
} from "../../data/Admin/academics.data";

export const getClasses = async () => Promise.resolve(classes);

export const getTeachers = async () => Promise.resolve(teachers);

export const getClassTimetable = async (classId) =>
  Promise.resolve(classTimetables[classId] || []);

export const getTeacherTimetable = async (teacherId) =>
  Promise.resolve(teacherTimetables[teacherId] || []);
