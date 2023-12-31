class Course {
    constructor({
        id,
        name,
        teacher,
        points,
        lessons = [],
    }) {
        this.id = id;
        this._name = name;
        this.teacher = teacher;
        this.lessons = lessons;
        this.points = points;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        let hasCourseWord = newName.toLowerCase().includes("curso")
        if (newName && hasCourseWord) {
            this._name = newName;
        } else {
            console.error("El nombre no es valido");
        }
    }
}

module.exports = Course;