"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./Person");
class Employee extends Person_1.Person {
    constructor(input) {
        super(input);
        if (input) {
            this.department = input.department;
            this.salary = input.salary;
        }
        else {
            this.department = '';
            this.salary = 0;
        }
    }
    toString() {
        return super.toString() + ` (Employee in ${this.department})`;
    }
}
exports.default = Employee;
