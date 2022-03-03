const students = [
    {
      name: "Anna",
      sex: "f",
      grades: [4.5, 3.5, 4]
    },
    {
      name: "Dennis",
      sex: "m",
      country: "Germany",
      grades: [5, 1.5, 4]
    },
    {
      name: "Martha",
      sex: "f",
      grades: [5, 4, 2.5, 3]
    },
    {
      name: "Brock",
      sex: "m",
      grades: [4, 3, 2]
    }
  ];

  const filter = (array, func) => array.filter(func);
  byFemale = (array) => array.sex === "f";
  const arrayAvg = (arr) => arr.reduce((sum, x) => sum + x,0) / arr.length;

  const femaleStudentsResults = filter(students, byFemale).map(student =>{
      return{
          name: student.name,
          avgGrade: student.grades
      }
  })
  // Compute female student results
//   const femaleStudentsResults = [];
//   for (const student of students) {
//     if (student.sex === "f") {
//       let gradesSum = 0;
//       for (const grade of student.grades) {
//         gradesSum += grade;
//       }
//       const averageGrade = gradesSum / student.grades.length;
//       femaleStudentsResults.push({
//         name: student.name,
//         avgGrade: averageGrade
//       });
//     }
//   }
 console.log(femaleStudentsResults);