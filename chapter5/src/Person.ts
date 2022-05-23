export interface ConfigPerson {
    dni: string,
    name: string,
    address: string,
    phone: number,
    birthDate: Date,
}
export class Person {
    private readonly dni: string;
    private name: string;
    private address: string;
    private phone: number;
    private birthDate: Date; // Date is a type of object in Javascript

    constructor(input:ConfigPerson | null) {
        if (input) {
            this.dni = input.dni;
            this.name = input.name;
            this.address = input.address;
            this.phone = input.phone;
            this.birthDate = input.birthDate;
        } else {
            this.dni = '';
            this.name = '';
            this.address = '';
            this.phone = 0;
            this.birthDate = new Date('');
        }
    }

    public getDni(): string {
        return this.dni;
    }

    public setName(newName:string): void {
        this.name = newName;
    }

    public getName(): string {
        return this.name;
    }

    public setAdress(newAdress:string): void {
        this.address = newAdress;
    }

    public getAdress(): string {
        return this.address;
    }

    public setPhone(newPhone:number): void {
        this.phone = newPhone;
    }

    public getPhone(): number {
        return this.phone;
    }

    public setBirthDate(newBirthDate:Date): void {
        this.birthDate = newBirthDate;
    }

    public getBirthDate(): Date {
        return this.birthDate;
    }

    public getAge(): number {
        const ageDifMs = Date.now() - this.birthDate.getTime();
        const ageDate = new Date(ageDifMs);

        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    public toString(): string {
        return `DNI: ${this.dni}, Name: ${this.name}, Age: ${this.getAge()}`;
    }
}