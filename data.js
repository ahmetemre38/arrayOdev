//#region students
const students = [
    {id:1, departmentId:1, name:'Ali', surName:'Veli', gender:'E', birthYear:2000, startYear: 2020,  },
    {id:2, departmentId:1, name:'Ahmet', surName:'Yilmaz', gender:'E', birthYear:1999, startYear: 2019 },
    {id:3, departmentId:1, name:'Ayşe', surName:'Gül', gender:'K', birthYear:2001, startYear: 2021 },
    {id:4, departmentId:2, name:'Mehmet', surName:'Demir', gender:'E', birthYear:2000, startYear: 2020 },
    {id:5, departmentId:2, name:'Mahmut', surName:'Yilmaz', gender:'E', birthYear:1999, startYear: 2019 },
    {id:6, departmentId:2, name:'Fatma', surName:'Yiğit', gender:'K', birthYear:2001, startYear: 2021 },
    {id:7, departmentId:3, name:'Osman', surName:'Ağa', gender:'E', birthYear:2000, startYear: 2020 },
    {id:8, departmentId:3, name:'Tahsin', surName:'Yilmaz', gender:'E', birthYear:1999, startYear: 2019 },
    {id:9, departmentId:3, name:'Zeynep', surName:'Tekin', gender:'K', birthYear:2001, startYear: 2021 },    
];
const dataStudents = () => {
    return students;
};
//#endregion  

//#region lessons
const lessons = [
        {id:1, departmentId:1, lessonName:'JavaScript', lessonCredit:8},
        {id:2, departmentId:1, lessonName:'Python', lessonCredit:6},
        {id:3, departmentId:1, lessonName:'C#', lessonCredit:4},
        {id:4, departmentId:2, lessonName:'Temel Elektronik', lessonCredit:8},
        {id:5, departmentId:2, lessonName:'Elektroteknik', lessonCredit:6},
        {id:6, departmentId:2, lessonName:'Dijital', lessonCredit:6},
        {id:7, departmentId:3, lessonName:'Mekanik', lessonCredit:8},
        {id:8, departmentId:3, lessonName:'Statik', lessonCredit:6},
        {id:9, departmentId:3, lessonName:'Cad/Cam', lessonCredit:6},
];
const dataLessons = () => {
    return lessons;
};
//#endregion

//#region studentGrades
const studentGrades = [
        {id:1, studentId:1, lessonId :1, vize:60, final:70},
        {id:2, studentId:1, lessonId :2, vize:20, final:50},
        {id:3, studentId:1, lessonId :3, vize:45, final:55},
        {id:4, studentId:2, lessonId :1, vize:78, final:88},
        {id:5, studentId:2, lessonId :2, vize:90, final:100},
        {id:6, studentId:2, lessonId :3, vize:70, final:80},
        {id:7, studentId:3, lessonId :1, vize:44, final:50},
        {id:8, studentId:3, lessonId :2, vize:55, final:70},
        {id:9, studentId:3, lessonId :3, vize:45, final:65},
        {id:10, studentId:4, lessonId :1, vize:60, final:70},
        {id:11, studentId:4, lessonId :2, vize:20, final:50},
        {id:12, studentId:4, lessonId :3, vize:45, final:55},
        {id:13, studentId:5, lessonId :1, vize:78, final:88},
        {id:14, studentId:5, lessonId :2, vize:90, final:100},
        {id:15, studentId:5, lessonId :3, vize:70, final:80},
        {id:16, studentId:6, lessonId :1, vize:44, final:56},
        {id:17, studentId:6, lessonId :2, vize:55, final:70},
        {id:18, studentId:6, lessonId :3, vize:45, final:65},
        {id:19, studentId:7, lessonId :1, vize:60, final:70},
        {id:20, studentId:7, lessonId :2, vize:20, final:70},
        {id:21, studentId:7, lessonId :3, vize:45, final:55},
        {id:22, studentId:8, lessonId :1, vize:78, final:88},
        {id:23, studentId:8, lessonId :2, vize:90, final:100},
        {id:24, studentId:8, lessonId :3, vize:70, final:80},
        {id:25, studentId:9, lessonId :1, vize:44, final:56},
        {id:26, studentId:9, lessonId :2, vize:55, final:70},
        {id:27, studentId:9, lessonId :3, vize:45, final:65}
]; 
const dataStudentGrades = () => {
    return studentGrades;
};  
//#endregion

//#region departments
const departments = [ 
    {id:1, lastName:'Bilgisayar Mühendisliği', shortName:'Bil.Müh.'},
    {id:2, lastName:'Elktronik Mühendisliği', shortName:'Elktr.Müh.'},
    {id:3, lastName:'Makine Mühendisliği', shortName:'Mak.Müh.'},
];
const dataDepartments = () => {
    return departments;
};
//#endregion

const dataStudentsQuery = () => {
    let studentsQuery = [];
    for (let i = 0; i < students.length; i++) {
        let studentQ = {
            id : students[i].id,            
            department : departments.find(item => item.id == students[i].departmentId).shortName,
            fullName : students[i].name + ' ' + students[i].surName,            
            gender : students[i].gender,
            birthYear : students[i].birthYear,
            startYear : students[i].startYear,            
        }  
        studentsQuery.push(studentQ);
    };    
    return studentsQuery
}

module.exports = {
    dataStudents,
    dataLessons,
    dataStudentGrades,
    dataDepartments
};


//console.log(dataDepartments()[0].lastName);
//console.table(dataStudentsQuery());


