"use strict";
{
    let me = {
        name: 'Álvaro',
        age: 44,
        languages: new Set(['spanish', 'catalan', 'english',]),
        marks: new Map().set('Math', 10),
        isMarried: undefined,
        worries: null,
        [Symbol('id')]: 1,
        pets: [
            { cat: 'moon' },
            { dog: 'sun' },
        ],
        toJSON: () => {
            let result = {
                name: me.name,
                age: me.age,
                isMarried: undefined,
                worries: null,
                [Symbol('id')]: 1,
                languages: null,
                marks: null,
            };
            let languages = [];
            me.languages.forEach(x => {
                languages.push(x);
            });
            result['languages'] = languages;
            result['marks'] = Array.from(me.marks);
            return result;
        }
    };
    console.log(JSON.stringify(me));
}
{
    let me = {
        name: 'Álvaro',
        age: 44,
        languages: new Set(['spanish', 'catalan', 'english',]),
        marks: new Map().set('Math', 10),
        isMarried: undefined,
        worries: null,
        [Symbol('id')]: 1,
        pets: [
            { cat: 'moon' },
            { dog: 'sun' },
        ],
    };
    let myJSON = JSON.stringify(me);
    let myObject = JSON.parse(myJSON);
    console.log(myObject);
}
