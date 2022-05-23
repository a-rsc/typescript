import { ConfigPerson, Person } from './Person';

interface configCustomer extends ConfigPerson {
    methodPayment: string,
}

export default class Customer extends Person {
    public methodPayment: string;

    constructor(input:configCustomer | null) {
        super(input);
        if (input) {
            this.methodPayment = input.methodPayment;
        } else {
            this.methodPayment = '';
        }
    }

   public toString(): string {
        return super.toString() + ` (Customer)`;
    }

    public buy():void {
        console.log('A good customer spends some money!');
    }
}