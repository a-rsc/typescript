"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Persona_1 = __importDefault(require("./Persona"));
{
    let dataBase = [];
    function addPerson(newPerson) {
        dataBase.push(newPerson);
    }
    function removePerson(query) {
        if (typeof query == 'string') {
            dataBase = dataBase.filter(v => v.name != query);
        }
        else {
            if (typeof query == 'number') {
                dataBase = dataBase.filter(v => v.age != query);
            }
        }
    }
    function listPerson() {
        dataBase.forEach(v => {
            console.log(`${v.name} (${v.age}) ${v.isMarried ? 'Married' : 'Single'}` + (v.hobbies ? ` and hobbies ${v.hobbies}` : ''));
        });
    }
    let me = { name: 'Álvaro', age: 44 };
    let david = { name: 'David', age: 40, isMarried: true };
    let oscar = { name: 'Oscar', age: 40, isMarried: false, hobbies: 'paddle' };
    addPerson(me);
    addPerson(david);
    addPerson(oscar);
    listPerson();
    removePerson(40);
    listPerson();
}
{
    let choosePen = {};
    console.log(choosePen);
    choosePen.color = 'red';
    choosePen.penWidth = 1;
    choosePen.erasable = true;
    console.log(choosePen);
}
{
    let Alvaro = new Persona_1.default('Álvaro');
    Alvaro.sayHi();
    console.log(Alvaro.toString());
}
