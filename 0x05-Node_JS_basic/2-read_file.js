/*
  a function that reads databasefile
*/
const fs = require('fs');

function countStudents(path) {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    let arr = [data];
    console.log('Number of students:', arr.map((element) => console.log(element.length)));
  });
}
module.exports = countStudents;
