//import { dataStudents, dataDepartments } from './data';
const { dataStudents, 
        dataDepartments
        } = require('./data');

let result = dataStudents().map(student => {
    let longGender = null;
    if (student.gender == 'E') longGender='Erkek';
    else if (student.gender == 'K') longGender='Kadın';
    return {
            Id : student.id,
            Department : dataDepartments().find(department => (department.id == student.departmentId)).shortName,
            'Full Name' : student.name + ' ' + student.surName,
            //TODO : arrow function ile Gender E ise Erkek, K ise Kadın yazdirilacak
            // Gender : (student.gender) => { 
            //             if (student.gender == 'E') 
            //                 return 'Erkek'
            //             else 
            //                 return 'Kadın' },
            Gender : longGender,
            Age : (new Date()).getFullYear() - student.birthYear,
            StartYear : student.startYear 
        }
});

console.table(result);