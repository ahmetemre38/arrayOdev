//import { dataStudents, dataDepartments } from './data';
const { dataStudents, 
        dataDepartments
        } = require('./data');

let result = dataStudents().map(student => {
    return {
            Id : student.id,
            Department : dataDepartments().find(department => (department.id == student.departmentId)).shortName,
            'Full Name' : student.name + ' ' + student.surName,
            Gender : student.gender == 'K'?'Kadın':'Erkek',
            Age : (new Date()).getFullYear() - student.birthYear,
            StartYear : student.startYear 
        }
});

console.table(result);