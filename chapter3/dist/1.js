"use strict";
{
    var foo = 123;
    if (true) {
        var foo = 456;
    }
    console.log(foo);
}
{
    let foo = 123;
    if (true) {
        let foo = 456;
    }
    console.log(foo);
}
{
    // En este caso, la función test sí define un nuevo espacio de nombres y la variable foo definida con var es distinta a la declarada en el exterior.
    // Dicho de otra forma, en el exterior de la función no se tiene alcance de esta variable y la salida es 123.
    var foo = 123;
    function test() {
        var foo = 456;
    }
    test();
    console.log(foo);
}
// La mayoría de los lenguajes tipados modernos, tanto orientado a procesos como objetos, siguen el patrón block-scoping que proporciona let. Por este motivo, a lo largo de los ejemplos y proyectos desarrollados en este documento, se evita el uso de variables globales y de su declaración mediante var.
{
    // Para aquellas variables que se definen y asignan un valor inmutable, se recomienda el uso de const.
    const nombre = 'Alvaro';
    let sentence = `My name is ${nombre}`;
    console.log(sentence);
}
{
    // El tipado de TypeScript es opcional y en la declaración se define tras el nombre de la variable seguido de : y el tipo, en este caso boolean. A partir de este momento, el transpilador de TypeScript, si está configurado en modo strict, controlará el valor que se le asigna a esta variable y advertirá de posibles errores de conversión.
    const fullName = 'Álvaro Rodríguez';
    const age = 44;
    let sentence = `Hi, my name is ${fullName}. I'll be ${age + 1} years old next June.`;
    console.log(sentence);
    console.log(fullName.charAt(1));
    console.log(fullName.charCodeAt(1));
    console.log(fullName.concat(' says Hi!'));
    console.log(fullName.indexOf('a') + ' & ' + fullName.indexOf('x'));
    console.log(fullName.lastIndexOf('e'));
    console.log(fullName.charCodeAt(7) + ' & ' + 'Álvaro Santa Cruz'.charCodeAt(7));
    console.log(fullName.split(' '));
    // Compara las cadenas: 1 si a es mayor que b, 0 si son iguales y -1 si a es menor que b, siendo a.localeCompare(b)
    console.log(fullName.localeCompare('Álvaro Santa Cruz'));
    console.log(fullName.slice(0, 3) + ', but -> ' + fullName.slice(1, -2));
    console.log(fullName.substring(3, 6) + ', but -> ' + fullName.substring(7));
    console.log(fullName.toUpperCase());
    console.log(fullName.toLowerCase());
}
{
    const sentence = `Hello world\nTypescript is really great,\nso be patient`;
    let regexp = /el+o/;
    // let regexp: RegExp = new RegExp('ab+c');
    console.log(sentence);
    console.log(regexp.test(sentence));
    let regexp2 = /^\w+/m; // Los flags son modificadores de las reglas. En este caso m indica que se repita la ejecución por cada nueva línea.
    console.log(regexp2.test(sentence)); // Sólo que coincida una de las líneas, muestra true
}
{
    let regexp = /\bTypeScript\b/ig;
    let sentence = " TypeScript rules! TypeScript rocks!";
    console.log(regexp.test(sentence));
    console.log(sentence.match(regexp));
}
{
    let regexp = /\bi\b/g;
    let sentence = `i'm a TypeScript developer. i like it.`;
    console.log(sentence.replace(regexp, 'I'));
}
{
    // Por último, buscamos una expresión regular que elimine cualquier etiqueta HTML de un texto.
    let regexp = /<[^>]*>/g;
    let sentence = `I'm a <strong>bold</strong> word.`;
    console.log(sentence.replace(regexp, '')); // I'm a bold word.
}
