const student = {
    name: 'Kolim Uddin',
    age:15,
    Class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65   
    }
};

// const marks = student.marks.chemistry;

const marks = student['marks'] ['physics'];
console.log(marks);


// const subject = 'math';
// const mark = student.marks[subject];
// console.log(mark);