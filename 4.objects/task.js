// Функция-конструктор студента
function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

// Студент начинает изучать предмет
Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
}

// Добавление оценок
Student.prototype.addMarks = function(...marksToAdd) {
    if (!this.marks) {
        console.log("Student has been kicked out");
        return;
    } else {
        this.marks.push(...marksToAdd);
    }
}

// Оценка успеваемости
Student.prototype.getAverage = function() {
    if (!this.marks || !this.marks.length) {
        return 0;
    } else {
        const sum = this.marks.reduce((accumulator, current) => accumulator + current);
        return sum / this.marks.length;
    }
}

// Исключение студент по причине reason
Student.prototype.exclude = function(reason) {
    delete this.subject;
    delete this.marks;
    this.exclude = reason;
}