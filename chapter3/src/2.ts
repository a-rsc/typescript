{
    let mysymbol: Symbol = Symbol();
    console.log(typeof mysymbol);
}
{
    // Los símbolos son inmutables y globalmente únicos, lo que hace ideal su uso para emplearlos como claves privadas para objetos.
    // let ageSymbol = Symbol('age');
    // let nameSymbol = Symbol('name');
    const ageSymbol = Symbol('age');
    const nameSymbol = Symbol('name');
    // interface ObjectType {
    //     score: number,
    //     ageSymbol: symbol,
    //     nameSymbol: symbol,
    // };

    let obj: {
        score: number,
        [ageSymbol]: number,
        [nameSymbol]: string,
    };

    obj = {score: 2154, [ageSymbol]: 35, [nameSymbol]: 'Álvaro',}

    console.log(typeof obj['score'], typeof obj[ageSymbol], typeof obj[nameSymbol], typeof obj, obj)

    // obj['score'] = 2154;
    // obj[ageSymbol] = 25;
    // obj[nameSymbol] = 'Álvaro';
    // console.log(obj);

    Object.getOwnPropertyNames(obj).forEach(function(value, index, array) {
        console.log(value + ' > ' + (<any>obj)[value], typeof (<any>obj)[value]);
    });

    console.log(Object.getOwnPropertyNames(obj));
    // Como vemos en el código, las propiedades cuya clave es un símbolo no son accesibles desde los iteradores. Debemos hacer uso del método getOwnPropertySimbols.
    console.log(Object.getOwnPropertySymbols(obj));

    // tsconfig.json
    // "strict": false
    for (let sym of Object.getOwnPropertySymbols(obj)) {
        console.log(sym.toString() + ' > ' + (<any>obj)[sym], typeof (<any>obj)[sym]);
    }
}
{
    let ageSymbol = Symbol('age');
    let nameSymbol = Symbol('name');
    let obj = {
        score: 0,
        [ageSymbol]: 0,
        [nameSymbol]: '',
    };
    obj['score'] = 2154;
    obj[ageSymbol] = 25;
    obj[nameSymbol] = 'Álvaro';
    console.log(JSON.stringify(obj));
}
{
    let list1: number[] = [1000, 2000, 3000];
    let list2: Array<Number> = [4000, 5000, 6000];
    for (let x in list2) {
        console.log(x);
    }
    for (let x of list2) {
        console.log(x);
    }
}
{
    let fruits: Array<string> = ['Banana', 'Mango', 'Orange'];
    let newLength: number = fruits.push('Watermelon');
    let newLength2: number = fruits.push('Lemon');
    console.log(newLength, newLength2);

    let lastFruit = fruits.pop();
    console.log("Last fruit is: " + lastFruit);
    let firstFruit = fruits.shift();
    console.log("First fruit is: " + firstFruit);
    console.log(fruits);

    let newLength3: number = fruits.unshift('Strawberry');
    console.log(fruits);
    console.log(fruits.reverse());

    // ASC
    console.log(fruits.sort());

    // DESC
    let fruitsSortedDesc: Array<string> = fruits.sort((a, b) => {
        if (a < b) return 1;
        else if (a > b) return -1;
        else return 0;
    })
    console.log(fruitsSortedDesc);
}
{
    let score: Array<number> = [10, 20, -5];
    function isNegative(value: number):boolean {
        return value < 0;
    }
    console.log(score.every(isNegative));
    console.log(score.every(value => value > -10));
}
{
    let fruits: Array<string> = ['Banana', 'Mango', 'Orange'];
    const result = fruits.filter(word => word.length > 5);
    console.log(result);
}
{
    let numbers:number[] = [1, 4, 9];
    let numbersMapped: number[] = numbers.map((num, index) => Math.pow(num, index + 1));
    console.log(numbersMapped);
}
{
    // Tuple
    let x: [string, number, boolean][] = [
        ['Álvaro', 44, false],
        ['Oscar', 34, true],
        ['David', 38, true]
    ];

    x.forEach(person => {
        console.log(`${person[0]} is ${person[1]} years old and is ${person[2] ? 'married' : 'single'}.`);
    });
    x.forEach((person, index, list) => {
        console.log(`${++index}.- ${person[0]} is ${person[1]} years old and is ${person[2] ? 'married' : 'single'}.`);
    });
}
{
    interface Person {
        fullName: [String, String],
        age: Number
    }
    let contacts: Array<Person> = [];
    console.log(contacts);
    contacts.push({
        fullName: ['Álvaro', 'Rodríguez'],
        age: 44,
    });
    contacts.push({
        fullName: ['Óscar', 'Rodríguez'],
        age: 34,
    });
    contacts.push({
        fullName: ['David', 'Rodríguez'],
        age: 38,
    });
    console.log(contacts);
}