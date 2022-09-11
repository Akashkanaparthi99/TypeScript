var Student = /** @class */ (function () {
    function Student(studName, studentId, city, department) {
        var _this = this;
        this.studName = studName;
        this.studentId = studentId;
        this.city = city;
        this.department = department;
        this.printDetails = function () {
            console.log("Name : ".concat(_this.studName));
            console.log("Id : ".concat(_this.studentId));
            console.log("City : ".concat(_this.city));
            console.log("Department : ".concat(_this.department));
        };
        this.showCourses = function () {
            var courses = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                courses[_i] = arguments[_i];
            }
            courses.forEach(function (course) { return console.log(course); });
        };
    }
    return Student;
}());
var student = new Student('ash', 10, 'Hyderabad', 'Mech');
student.printDetails();
student.showCourses('html', 'css', 'java');
