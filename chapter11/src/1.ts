{
    let me = {
        name: 'Álvaro',
        age: 44,
        languages: new Set(['spanish', 'catalan', 'english',]), // values omitted
        marks: new Map().set('Math', 10), // values omitted
        isMarried: undefined, // values omitted
        worries: null,
        [Symbol('id')]: 1, // values omitted
        pets: [
            {cat: 'moon'},
            {dog: 'sun'},
        ],
        toJSON: () => {
            let result: Object = {
                name: me.name,
                age: me.age,
                isMarried: undefined, // values omitted
                worries: null,
                [Symbol('id')]: 1, // values omitted,
                languages: null,
                marks: null,
            };
            let languages: string[] = [];
            me.languages.forEach(x => {
                languages.push(x);
            });
            result['languages'] = languages;
            result['marks'] = Array.from(me.marks);

            return result;
        }
    }

    console.log(JSON.stringify(me));

}
{
    let me = {
        name: 'Álvaro',
        age: 44,
        languages: new Set(['spanish', 'catalan', 'english',]), // values omitted
        marks: new Map().set('Math', 10), // values omitted
        isMarried: undefined, // values omitted
        worries: null,
        [Symbol('id')]: 1, // values omitted
        pets: [
            {cat: 'moon'},
            {dog: 'sun'},
        ],
    }

    let myJSON: string = JSON.stringify(me);
    let myObject = JSON.parse(myJSON);

    console.log(myObject);

}