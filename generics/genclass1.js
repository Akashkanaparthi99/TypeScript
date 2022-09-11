var GenEmployee = /** @class */ (function () {
    function GenEmployee() {
        var _this = this;
        this.print = function () {
            console.log("".concat(_this.empName));
        };
    }
    GenEmployee.prototype.setName = function (empName) {
        this.empName = empName;
    };
    return GenEmployee;
}());
var emp = new GenEmployee();
emp.setName('Akash');
emp.print();
var empnum = new GenEmployee();
empnum.setName(100);
empnum.print();
var empSArr = new GenEmployee();
empSArr.setName(['Akash', 'Madhu', 'Baba']);
empSArr.print();
var empNArr = new GenEmployee();
empNArr.setName([1, 25, 2.24, 2, 82, 554]);
empNArr.print();
var empObj = new GenEmployee();
empObj.setName({ name: 'Akash', empId: 186 });
empObj.print();
