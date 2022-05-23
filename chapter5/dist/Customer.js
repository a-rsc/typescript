"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./Person");
class Customer extends Person_1.Person {
    constructor(input) {
        super(input);
        if (input) {
            this.methodPayment = input.methodPayment;
        }
        else {
            this.methodPayment = '';
        }
    }
    toString() {
        return super.toString() + ` (Customer)`;
    }
    buy() {
        console.log('A good customer spends some money!');
    }
}
exports.default = Customer;
