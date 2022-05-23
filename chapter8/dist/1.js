"use strict";
{
    try {
        throw new Error('Something bad happened');
    }
    catch (error) {
        console.log(error);
    }
    function validateScore(value) {
        if (value < 0 || value > 10)
            throw new Error('Invalid value for score.');
    }
}
{
    function greet(message, author) {
        return `Hello ${message}, by ${author}!`;
    }
    function greet2(message, author) {
        return `Hello ${message}, by ${author}!`;
    }
    function greet3(message, author) {
        return `Hello ${message}, by ${author}!`;
    }
    console.log(greet('world', 'Álvaro'));
    console.log(greet2('world', 'Álvaro'));
    console.log(greet3('world', 'Álvaro'));
}
