"use strict";
class Greeter {
    constructor(greeting) {
        this.greeting = greeting;
    }
    greet() {
        return `Hello ${this.greeting}!`;
    }
}
let greeter = new Greeter('world!');
let button = document.createElement('button');
button.textContent = 'Say Hello!';
button.onclick = function () {
    alert(greeter.greet());
};
document.body.appendChild(button);
// tsc index.ts
