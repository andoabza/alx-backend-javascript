export default function getStudentsByLocation(student, loc) {
  return student.filter((student) => student.location === loc);
}
