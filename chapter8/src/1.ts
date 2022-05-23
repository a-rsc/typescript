{
    try {
        throw new Error('Something bad happened');
    } catch (error) {
        console.log(error);
    }

    function validateScore(value:number) {
        if (value < 0 || value > 10) throw new Error('Invalid value for score.');
    }
}
{
    function greet<T, U>(message:T, author:U): string {
        return `Hello ${message}, by ${author}!`;
    }

    function greet2<T>(message:T, author:string): string {
        return `Hello ${message}, by ${author}!`;
    }

    function greet3(message:any, author:string): string {
        return `Hello ${message}, by ${author}!`;
    }

    console.log(greet('world', 'Álvaro'));
    console.log(greet2('world', 'Álvaro'));
    console.log(greet3('world', 'Álvaro'));
}