const { dataStudentGrades } = require('./data');

herOgrenciGectiMi = dataStudentGrades().every(item => ((item.vize * 0.4)+(item.final * 0.6)) > 49 );
if (herOgrenciGectiMi == true) 
    console.log('Ortalamasi 50 nin altinda ogrenci/ogrenciler yok');
else
     console.log('Ortalamasi 50 nin altinda ogrenci/ogrenciler var');
