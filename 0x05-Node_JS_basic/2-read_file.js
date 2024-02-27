const fs = require('fs');
const readline = require('readline');
const csvParser = require('csv-parser');

/**
 * Counts the number of students in each field from a CSV file.
 * @param {string} path - The path to the CSV file.
 */
function countStudents(path) {
    if (!fs.existsSync(path)) {
        throw new Error('Cannot load the database');
    }

    let studentsCount =  0;
    let studentsByField = {};

    const rl = readline.createInterface({
        input: fs.createReadStream(path),
        output: process.stdout,
        terminal: false
    });

    rl.pipe(csvParser())
        .on('data', (row) => {
            studentsCount++;

            const field = row.field;
            if (!studentsByField[field]) {
                studentsByField[field] = { count:  0, names: [] };
            }
            studentsByField[field].count++;
            studentsByField[field].names.push(row.firstname);
        })
        .on('end', () => {
            console.log(`Number of students: ${studentsCount}`);

            for (const [field, data] of Object.entries(studentsByField)) {
                console.log(`Number of students in ${field}: ${data.count}. List: ${data.names.join(', ')}`);
            }
        });
}
module.exports = countStudents;
