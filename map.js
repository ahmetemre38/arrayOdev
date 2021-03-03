const { dataStudents, 
        dataDepartments, 
        dataLessons,
        dataStudentGrades
        } = require('./data');

//console.table(dataStudents());
let result = dataStudents().map(student => {
        return {
            Id : student.id,
            Department : dataDepartments().find(department => (department.id == student.departmentId)).shortName,
            'Full Name' : student.name + ' ' + student.surName,
            //TODO : Gender E ise Erkek, K ise Kadın yazdirilacak
            // Gender : (student.gender) => { 
            //             if (student.gender == 'E') 
            //                 return 'Erkek'
            //             else 
            //                 return 'Kadın' },
            Gender : student.gender,
            BirthYear : student.birthYear,
            StartYear : student.startYear 
        }
});

console.table(result);