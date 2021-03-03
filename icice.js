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
            Gender : longGender,
            Age : (new Date()).getFullYear() - student.birthYear,
            StartYear : student.startYear 
        }
    }).filter(student => student.Gender == 'Erkek').find(student => student.Department == 'Bil.Müh.');

console.log(result);
