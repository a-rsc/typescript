"use strict";
{
    class Animal {
        constructor() {
            Animal._population++;
        }
        static get population() {
            return Animal._population;
        }
    }
    Animal._population = 0;
    class Dog extends Animal {
        constructor(color) {
            super();
            this.color = color;
        }
        sound() {
            console.log('WOW');
        }
        iamadog() {
            console.log('Yes, this is a DOG!');
        }
    }
    class Cat extends Animal {
        constructor(gender) {
            super();
            this.gender = gender;
        }
        sound() {
            console.log('MEOW');
        }
        iamacat() {
            console.log('Yes, this is a CAT!');
        }
    }
    let animals = [];
    animals.push(new Cat('male'));
    animals.push(new Dog('white'));
    animals.push(new Cat('female'));
    animals.push(new Dog('black'));
    for (let animal of animals) {
        animal.sound();
        if (animal instanceof Dog) {
            animal.iamadog();
        }
        else if (animal instanceof Cat) {
            animal.iamacat();
        }
    }
    console.log(Animal.population);
}
