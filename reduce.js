const { dataStudents, 
    dataDepartments,
    dataStudentGrades
    } = require('./data');


let result = dataStudentGrades().reduce((totalFinal, item) => {
    return totalFinal = totalFinal + item.final,0
});

console.table(result);

