"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Persona {
    constructor(name) {
        if (name) {
            this.name = name;
        }
        else {
            this.name = 'unknown';
        }
    }
    sayHi() {
        console.log(`Hi, my name is ${this.name}`);
    }
    toString() {
        return `From to String: ---> ${this.name}`;
    }
}
exports.default = Persona;
