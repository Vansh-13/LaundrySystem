
// Define an array of sample student data
var students = [
    { name: "Vansh Madaan", regNumber: "12206799" },
    { name: "Amanpal Singh", regNumber: "12207493" },
    { name: "Ansh", regNumber: "12205974" }
];

// Store the student data in localStorage
localStorage.setItem('studentsData', JSON.stringify(students));
