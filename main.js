class Student {
    constructor(firstName, lastName, birthYear, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = grades || [];
        this.attendance = new Array(25).fill(null);
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    }

    present() {
        for (let i = 0; i < this.attendance.length; i++) {
            if (this.attendance[i] === null) {
                this.attendance[i] = true;
                break;
            }
        }
    }

    absent() {
        for (let i = 0; i < this.attendance.length; i++) {
            if (this.attendance[i] === null) {
                this.attendance[i] = false;
                break;
            }
        }
    }

    summary() {
        const avgGrade = this.getAverageGrade();
        const attendedClasses = this.attendance.filter(status => status === true).length;
        const attendanceRate = attendedClasses / this.attendance.length;

        if (avgGrade > 90 && attendanceRate > 0.9) {
            return "Молодець!";
        } else if (avgGrade > 90 || attendanceRate > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

const student1 = new Student("Іван", "Іванов", 2000, [95, 88, 91, 94]);
const student2 = new Student("Марія", "Петренко", 2001, [85, 80, 92, 70, 85]);
const student3 = new Student("Олексій", "Коваленко", 1999, [60, 75, 55, 65]);

student1.present();
student1.present();
student1.absent();
student1.present();

student2.present();
student2.absent();
student2.absent();
student2.present();
student2.present();

student3.present();
student3.absent();
student3.absent();
student3.absent();

const students = [student1, student2, student3];

function displayStudents(students) {
    const container = document.getElementById("students-container");
    students.forEach(student => {
        const studentCard = document.createElement("div");
        studentCard.classList.add("student-card");

        const fullName = `${student.firstName} ${student.lastName}`;
        const age = student.getAge();
        const averageGrade = student.getAverageGrade().toFixed(2);
        const summary = student.summary();

        studentCard.innerHTML = `
      <h2>${fullName}</h2>
      <p>Вік: ${age}</p>
      <p>Середній бал: ${averageGrade}</p>
      <p class="summary ${getSummaryClass(summary)}">${summary}</p>
    `;

        container.appendChild(studentCard);
    });
}

function getSummaryClass(summary) {
    if (summary === "Молодець!") {
        return "success";
    } else if (summary === "Добре, але можна краще") {
        return "warning";
    } else {
        return "error";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayStudents(students);
});
