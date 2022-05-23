export default class Persona {
    name: string;
    constructor(name?:string) {
        if (name) {
            this.name = name;
        } else {
            this.name = 'unknown';
        }
    }
    sayHi(): void {
        console.log(`Hi, my name is ${this.name}`);
    }
    public toString(): string {
        return `From to String: ---> ${this.name}`
    }
}
