"use strict";
{
    const onePerson = {
        name: 'Carlos',
        age: 40,
    };
    function prettyPrint(person = { name: 'unknown', age: 0 }) {
        return `${person.name} is ${person.age}`;
    }
    console.log(prettyPrint(onePerson));
    console.log(prettyPrint());
}
{
    function introduceMe(firstName, ...hobbies) {
        return `hi, this is ${firstName}, and i like ${hobbies.join(' | ')}`;
    }
    console.log(introduceMe('Carlos', 'running', 'swimming', 'programming'));
}
{
    function introduceMe(firstName, ...experience) {
        return `hi, this is ${firstName}, and this is my background:\n` +
            experience.map(v => `job: ${v.position}, year: ${v.year}`).join('\n');
    }
    let introduceMeFunny = introduceMe;
    console.log(introduceMeFunny('Carlos', { position: 'engineer', year: 2008 }, { position: 'teacher', year: 2015 }));
    const point2D = { x: 1, y: 2 };
    const point3D = Object.assign(Object.assign({}, point2D), { z: 3 });
    console.log(point3D);
}
{
    ;
    let dataBase = [
        { name: 'Carlos', age: 39 },
        { name: 'John', age: 39 },
        { name: 'Mary', age: 80 },
    ];
    function getPerson(query) {
        let result = null;
        if (typeof query == 'string') {
            result = dataBase.filter((v) => {
                return v.name == query;
            });
        }
        else if (typeof query == 'number') {
            result = dataBase.filter((v) => {
                return v.age == query;
            });
        }
        else {
            // nothing to do
        }
        return result;
    }
    console.log(dataBase);
    console.log(getPerson(39));
    console.log(getPerson('Mary'));
}
{
    (() => { console.log('Hello world!'); })();
    (function () { console.log('Hello world!'); })();
    let helloWorld = () => { return 'Hello world!'; };
    console.log(helloWorld());
    let helloWorld2 = () => 'Hello world!';
    console.log(helloWorld2());
}
{
    let myObject = {
        name: 'Carlos',
        age: 40,
        sayHi: () => {
            return `Hi, this is ${this.name}, ${this.age}`;
        },
        sayHi2: function () {
            return `Hi, this is ${this.name}, ${this.age}`;
        },
        aFunction: (a) => {
            console.log(`Hi, this is ${this.name}, ${this.age}! This is not a method, just a function: ${a}.`);
        }
    };
    console.log(myObject.sayHi());
    console.log(myObject.sayHi2());
    console.log(myObject.aFunction('Ok!'));
}
