"use strict";
class Person {
    constructor(dni) {
        this.setDNI(dni);
    }
    getDNI(format) {
        let result = this.dni;
        if (format) {
            result = result.substring(0, result.length - 1) + '-' + result.substring(result.length - 1, result.length).toUpperCase();
        }
        return result;
    }
    setDNI(dni) {
        if (this.validateDNI(dni)) {
            this.dni = dni;
        }
        else {
            throw Error('Error: DNI format is not valid!');
        }
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
try {
    let p = new Person('00000000A');
    console.log(p.getDNI());
}
catch (error) {
    console.log(error);
} // Error: DNI format is not valid
try {
    let p = new Person('53126821H');
    console.log(p.getDNI());
}
catch (error) {
    console.log(error);
} // 53126821H
try {
    let p = new Person('00000000T');
    console.log(p.getDNI());
}
catch (error) {
    console.log(error);
} // 00000000T
try {
    let p = new Person('53126821H');
    console.log(p.getDNI(true));
}
catch (error) {
    console.log(error);
} // 53126821-H
