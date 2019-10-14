const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

let passFail

// createStudentComponent function using 4 arguments
// const createStudentComponent = (name, subject, info, score) => {
//     if (score >= 60) {
//         passFail = "passing"
//     } else {
//         passFail = "failing"
//     }
//     return `
//         <div class="student">
//             <h1 class="xx-large ${passFail}">${name}</h1>
//             <section class="bordered dashed section--padded">${subject}</section>
//             <aside class="pushRight">${info}</aside>
//         </div>
//     `
// }

// Instead of defining four arguments for the createStudentComponent function, and then passing the individual properties when it is invoked, refactor the function to accept the entire object as a single argument.
const createStudentComponent = (student) => {
    if (student.score >= 60) {
        passFail = "passing"
    } else {
        passFail = "failing"
    }
    return `
        <div class="student">
            <h1 class="xx-large ${passFail}">${student.name}</h1>
            <section class="bordered dashed section--padded">${student.subject}</section>
            <aside class="pushRight">${student.info}</aside>
        </div>
    `
}

// Then refactor your string interpolation code to use the object properties.

const studentContainer = document.querySelector("#container")

for (let i = 0; i < students.length; i++) {
    const student = students[i]
    studentContainer.innerHTML += createStudentComponent(
        student
    )
}



