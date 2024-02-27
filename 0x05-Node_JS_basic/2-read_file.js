/*
  a function that reads databasefile
*/
const fs = require('fs');

function countStudents(path) {
  /*
    countStudents: a function that count students in databse
  */
  fs.readFile(path, 'utf-8', (err, data) => {  
    if (err) {
      throw new Error('Cannot load the database');
    }
    let arr = [data];
    let a = {}
    arr.map((element) => a = element.split('\n'));
    console.log(`Number of students: ${a.length - 1}`);
    let i = 0;
    let l = 0;
    let cs = '';
    let swe = '';
    for (let j = 0; j < a.length; j++) {
      if (a[j].includes('CS')) {
        cs = a[j].split(',')[0]+ ', ' + cs;
        i++;
      }
        if (a[j].includes('SWE')) {
            swe = a[j].split(',')[0]+ ', ' + swe;
            l++;
        }
    }
  console.log(`Number of students in CS: ${i}. List`, cs);
  console.log(`Number of students in SWE: ${l}. List`, swe);
});
}
module.exports = countStudents;
