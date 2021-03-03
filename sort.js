const { dataStudents } = require('./data');

studentSorted = dataStudents().map(student => student.birthYear).sort((a,b) => (a - b));

console.table(studentSorted);