export default function getStudentIdsSum(student) {
  return student.reduce((sum, student) => sum + student.id, 0);
}
