const { dataStudents, 
    dataDepartments,
    dataStudentGrades
    } = require('./data');

let AhmetVarMi = dataStudents().some(student => student.name == 'Ahmet');
if (AhmetVarMi) console.log('Ahmet isimli öğrenci vardır...');
else console.log('Ahmet isimli öğrenci yoktur...');