class Person {
    private dni: string;

    constructor(dni:string) {
        this.setDNI(dni);
    }

    public getDNI(format?:boolean): string {
        let result: string = this.dni;
        if (format) {
            result = result.substring(0, result.length-1) + '-' + result.substring(result.length-1).toUpperCase();
        }
        return result;
    }

    public setDNI(dni:string): void {
        if (this.validateDNI(dni)) {
            this.dni = dni;
        } else {
            throw Error('Error: DNI format is not valid!');
        }
    }

    private validateDNI(dni:string): boolean {
        const regexp: RegExp = /^\d{8}[a-zA-Z]$/;
        let result: boolean = false;
        if (regexp.test(dni)) {
            let numbers: number = +dni.substring(0, dni.length-1); // + converts string into number
            const letter = dni.substring(dni.length-1);
            numbers = numbers % 23;
            let letters = 'TRWAGMYFPDXBNJZSQVHLCKET';
            letters = letters.substring(numbers, numbers+1);
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
} catch (error) {
    console.log(error);
} // Error: DNI format is not valid

try {
    let p = new Person('53126821H');
    console.log(p.getDNI());
} catch (error) {
    console.log(error);
} // 53126821H

try {
    let p = new Person('00000000T');
    console.log(p.getDNI());
} catch (error) {
    console.log(error);
} // 00000000T

try {
    let p = new Person('53126821H');
    console.log(p.getDNI(true));
} catch (error) {
    console.log(error);
} // 53126821-H
