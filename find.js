const { dataStudents, 
    dataDepartments
    } = require('./data');

let result = dataStudents().map(student => {
    let longGender = null;
    if (student.gender == 'E') longGender='Erkek';
    else if (student.gender == 'K') longGender='Kadın';
    return {
        Id : student.id,
        //find ile department bulunup kisa adi yazdiriliyor
        //department bilgileri ayri bir diziden getiriliyor
        Department : dataDepartments().find(department => (department.id == student.departmentId)).shortName,
        'Full Name' : student.name + ' ' + student.surName
        }
});
    
console.table(result);