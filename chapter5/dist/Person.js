"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(input) {
        if (input) {
            this.dni = input.dni;
            this.name = input.name;
            this.address = input.address;
            this.phone = input.phone;
            this.birthDate = input.birthDate;
        }
        else {
            this.dni = '';
            this.name = '';
            this.address = '';
            this.phone = 0;
            this.birthDate = new Date('');
        }
    }
    getDni() {
        return this.dni;
    }
    setName(newName) {
        this.name = newName;
    }
    getName() {
        return this.name;
    }
    setAdress(newAdress) {
        this.address = newAdress;
    }
    getAdress() {
        return this.address;
    }
    setPhone(newPhone) {
        this.phone = newPhone;
    }
    getPhone() {
        return this.phone;
    }
    setBirthDate(newBirthDate) {
        this.birthDate = newBirthDate;
    }
    getBirthDate() {
        return this.birthDate;
    }
    getAge() {
        const ageDifMs = Date.now() - this.birthDate.getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    toString() {
        return `DNI: ${this.dni}, Name: ${this.name}, Age: ${this.getAge()}`;
    }
}
exports.Person = Person;
