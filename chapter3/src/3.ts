{
    let map = new Map();
    map.set('A', 0);
    map.set('B', 1);
    map.set('C', 2);
    console.log(map);
}
{
    let map = new Map([
        ['A', 0],
        ['B', 1],
        ['C', 2],
    ]);
    console.log(map);
    console.log(map.get('A'));
    console.log(map.has('A'));
    map.delete('A');
    console.log(map);
    console.log(map.size, map.clear(), map.size);
}
{
    let map = new Map([
        ['A', 0],
        ['B', 1],
        ['C', 2],
    ]);
    for (const [key, value] of map) {
        console.log(key, value);
    }
}
{
    // Por otra parte, la estructura Set nos permite crear un conjunto de datos donde los valores no pueden ser repetidos
    let set = new Set([
        'APPLE', 'ORANGE', 'MANGO',
    ]);
    set.has('APPLE');
    set.delete('APPLE');
    console.log(set.size);
    set.add('ORANGE');
    console.log(set.size);
    set.clear();
    console.log(set.size);

    // Los datos almacenados tanto en Set como en Map se mantienen a lo largo de toda la ejecución del script, por lo que no permiten al recolector de basura (garbage collection) eliminar este tipo de objetos aunque no vayan a ser más empleados en instrucciones posteriores. Por este motivo, para grandes colecciones y bajo determinadas circunstancias en ES6 y versiones posteriores se incorporan los tipos WeakMap y WeakSet cuyo funcionamiento es similar a los tipos originales.
}
{
    // Diccionario de datos
    interface Data {
        name: string,
        age: number,
    }
    interface IHash {
        [key:string]: Data,
    }

    // ... página 54
}
{
    let myArrayObject:{name: string, age:number}[] = [];
    myArrayObject.push({
        name: 'Carlos', age: 40,
    });
    myArrayObject.push({
        name: 'Eve', age: 42
    });

    myArrayObject.forEach(person => {
        console.log(person.name + ' is ' + person.age);
    });
}
{
    // En ES2015 el operador spread (...) solo se aplicaba a Arrays. A partir de ES2018 se permite hacer uso de este operador para propagar los objetos. Un ejemplo sería:
    const person = {
        name: 'Carlos',
        age: 40,
    };
    const worker = {
        ...person,
        company: 'Developer',
    };

    console.log(worker);
}
{
    // tsconfig.json
    // "strict": false
    const lib = {
        sum: (a:any, b:any) => a+b,
        mult: (a:any, b:any) => a*b,
    };

    console.log(lib.sum(3, 5));
    console.log(lib.sum('Hello ', 'world!'));
    console.log(lib.mult(3, 5));
}
{
    let notSure: any = 4;
    notSure = 'maybe a string instead';
    notSure = false;
    // notSure.ifItExists();
    // notSure.toFixed();

    let prettySure: Object = 4;
    // The toFixed() function in TypeScript is used to format a number using fixed-point notation. It can be used to format a number with a specific number of digits to the right of the decimal.
    console.log(prettySure, prettySure.toFixed());

    function logWarning(): void {
        console.log('This is a warning message!');
    }

    logWarning();
}
{
    // Function returning never must have unreachable end point
    function error(message: string): never {
        throw new Error(message);
    }

    // Inferred return type is never
    function fail() {
        return error('Something failed!');
    }

    // Function returning never must have unreachable end point
    function infiniteLoop(): never {
        while (true) {
        }
    }

    // error('Hello world!');
    // fail();
    // infiniteLoop();
}
{
    function foo(arr: readonly string[]) {
        arr.slice();
        arr.push('!');
    }

    let myarray: string[] = ['hello', 'world'];
    console.log(myarray);
    foo(myarray);
    console.log(myarray);
    let x: readonly number = 5;
}