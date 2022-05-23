import { ConfigPerson, Person } from './Person';

interface configEmployee extends ConfigPerson {
    department: string,
    salary: number,
}

export default class Employee extends Person {
    public department: string;
    public salary: number;

    constructor(input:configEmployee | null) {
        super(input);
        if (input) {
            this.department = input.department;
            this.salary = input.salary;
        } else {
            this.department = '';
            this.salary = 0;
        }
    }

   public toString(): string {
        return super.toString() + ` (Employee in ${this.department})`;
    }
}