"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./Person");
const Employee_1 = __importDefault(require("./Employee"));
const Customer_1 = __importDefault(require("./Customer"));
{
    const myEmployee = new Employee_1.default(null);
    const myCustomer = new Customer_1.default({
        dni: '0123456789',
        name: 'Álvaro Rodríguez Santa Cruz',
        address: 'Calle Anselm Clavé, 56 - Granollers (08401)',
        phone: 608084789,
        birthDate: new Date('1978-02-15'),
        methodPayment: 'Visa',
    });
    console.log(myEmployee);
    console.log(myCustomer);
    console.log(myEmployee.toString());
    console.log(myCustomer.toString());
}
{
    const listPerson = []; // Se ha importado Person sólo para este ejemplo
    listPerson.push(new Employee_1.default(null));
    listPerson.push(new Customer_1.default({
        dni: '0123456789',
        name: 'Álvaro Rodríguez Santa Cruz',
        address: 'Calle Anselm Clavé, 56 - Granollers (08401)',
        phone: 608084789,
        birthDate: new Date('1978-02-15'),
        methodPayment: 'Visa',
    }));
    listPerson.push(new Employee_1.default({
        dni: '0123456789',
        name: 'David Rodríguez Santa Cruz',
        address: 'Calle Anselm Clavé, 56 - Granollers (08401)',
        phone: 608084789,
        birthDate: new Date('1979-10-24'),
        department: 'IT',
        salary: 35000,
    }));
    listPerson.push(new Person_1.Person({
        dni: '0123456789',
        name: 'Oscar Rodríguez Santa Cruz',
        address: 'Calle Anselm Clavé, 56 - Granollers (08401)',
        phone: 608084789,
        birthDate: new Date('1979-10-24'),
    }));
    for (let eachPerson of listPerson) {
        if (eachPerson instanceof Employee_1.default) {
            console.log('Employee...');
        }
        else if (eachPerson instanceof Customer_1.default) {
            console.log('Customer...');
            // const c:Customer = <Customer>eachPerson;
            eachPerson.buy();
        }
        else {
            console.log('It must be a Person!');
        }
        console.log(eachPerson.toString());
        // eachPerson.buy(); // error if not Customer
    }
}
