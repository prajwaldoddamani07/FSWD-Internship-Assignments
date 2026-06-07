const students = [
    {
        name:"Prajwal",
        marks:[80,90,85]
    },
    {
        name:"Rahul",
        marks:[70,75,80]
    },
    {
        name:"Anjali",
        marks:[95,92,98]
    }
];

students.forEach(student => {

    let total = student.marks.reduce(
        (sum, mark) => sum + mark,
        0
    );

    let average = total / student.marks.length;

    console.log(
        `${student.name} Average: ${average}`
    );
});