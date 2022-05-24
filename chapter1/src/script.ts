class Greeter {
    greeting: string;
    constructor(greeting: string) {
        this.greeting = greeting;
    }
    greet(): string {
        return `Hello ${this.greeting}!`;
    }
}
let greeter: Greeter = new Greeter('world!');
let button = document.createElement('button');
button.textContent = 'Say Hello!';
// button.onclick = function() {
//     alert(greeter.greet());
// };
button.onclick = () => {
    alert(greeter.greet());
};
document.body.appendChild(button);
