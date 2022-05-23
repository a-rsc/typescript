{
    abstract class Animal {
        private static _population: number = 0;
        constructor() {
            Animal._population++;
        }
        public static get population(): number {
            return Animal._population;
        }
        public abstract sound(): void;
    }

    class Dog extends Animal {
        public color: string;

        constructor(color: string) {
            super();
            this.color = color;
        }

        public sound(): void {
            console.log('WOW');
        }

        public iamadog(): void {
            console.log('Yes, this is a DOG!');
        }
    }

    class Cat extends Animal {
        public gender: string;

        constructor(gender: string) {
            super();
            this.gender = gender;
        }

        public sound(): void {
            console.log('MEOW');
        }

        public iamacat():void {
            console.log('Yes, this is a CAT!');
        }
    }

    let animals: Array<Animal> = [];
    animals.push(new Cat('male'));
    animals.push(new Dog('white'));
    animals.push(new Cat('female'));
    animals.push(new Dog('black'));

    for (let animal of animals) {
        animal.sound();

        if (animal instanceof Dog) {
            animal.iamadog();
        } else if (animal instanceof Cat) {
            animal.iamacat();
        }
    }

    console.log(Animal.population);
}