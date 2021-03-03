const { dataStudents, 
    dataDepartments,
    dataStudentGrades
    } = require('./data');
    
//ortalamasi 50 nin altinda notu olan ogrenci bilgilerini getiren filtreleme

let filterResult = dataStudentGrades().filter(item => ((item.vize * 0.4)+(item.final * 0.6)) < 49 );

console.table(filterResult); 