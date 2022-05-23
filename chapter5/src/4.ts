class Person2 {
    constructor(private _dni:string) {
        if (! this.validateDNI(_dni)) {
            throw Error('Error: DNI format is not valid!');
        }
    }

    public get dni(): string {
        return this._dni.substring(0, this._dni.length-1) + '-' + this._dni.substring(this._dni.length-1).toUpperCase();
    }

    public set dni(dni:string) {
        if (this.validateDNI(dni)) {
            this._dni = dni;
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
    let p = new Person2('00000000T');
    console.log(p.dni);
    p.dni = '00000001R';
    console.log(p.dni);
    p.dni = '53126821H';
    console.log(p.dni);
    p.dni = '00000000X';  // Error: DNI format is not valid
    console.log(p.dni);
} catch (error) {
    console.log(error);
}
