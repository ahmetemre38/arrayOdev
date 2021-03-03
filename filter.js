const { dataStudents, 
    dataDepartments,
    dataStudentGrades
    } = require('./data');
//ortalamasi 50 nin altinda notu olan ogrenci bilgilerini getiren filtreleme

let filterResult = dataStudentGrades().filter(item => ((item.vize * 0.5)+(item.final * 0.5)) > 49 );

console.table(filterResult); 