"use strict";
class Person3 {
    constructor(_dni) {
        this._dni = _dni;
        if (!this.validateDNI(_dni)) {
            throw Error('Error: DNI format is not valid!');
        }
        else {
            Person3._population++;
        }
    }
    get dni() {
        return this._dni.substring(0, this._dni.length - 1) + '-' + this._dni.substring(this._dni.length - 1, this._dni.length).toUpperCase();
    }
    set dni(dni) {
        if (this.validateDNI(dni)) {
            this._dni = dni;
        }
        else {
            throw Error('Error: DNI format is not valid!');
        }
    }
    static get population() {
        return Person3._population;
    }
    validateDNI(dni) {
        const regexp = /^\d{8}[a-zA-Z]$/;
        let result = false;
        if (regexp.test(dni)) {
            let numbers = +dni.substring(0, dni.length - 1); // + converts string into number
            const letter = dni.substring(dni.length - 1, dni.length);
            numbers = numbers % 23;
            let letters = 'TRWAGMYFPDXBNJZSQVHLCKET';
            letters = letters.substring(numbers, numbers + 1);
            if (letters == letter.toUpperCase()) {
                result = true;
            }
        }
        return result;
    }
}
Person3._population = 0; // initializated
try {
    console.log(Person3.population);
    let p = new Person3('00000000T');
    console.log(p.dni);
    p.dni = '00000001R';
    console.log(p.dni);
    p.dni = '53126821H';
    console.log(p.dni);
    // p.dni = '00000000X';  // Error: DNI format is not valid
    // console.log(p.dni);
    console.log(Person3.population);
}
catch (error) {
    console.log(error);
}
