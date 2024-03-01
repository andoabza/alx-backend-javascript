import readDatabase from '../utils';
class StudentsController {
    static getAllStudents(req, res) {
        res.status(200);
        console.log('This is the list of all students');
        res.send(readDatabase('students'));

    }
}