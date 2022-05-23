// Si analizamos el código, el método getDataFromServer promete devolvernos un array de Person, pero no sabemos cuánto tardará (en función de la conectividad, la carga del servidor, el volumen de información...).
// En nuestro caso realizamos una simulación con una demora forzada de 5 segundos.
{
    interface Person {
        name: string,
        age: number,
    }

    class DataLoader {
        constructor() {
            // code
        }

        getDataFromServer(): Promise<Array<Person>> {
         /*
            Get from Server data in JSON or XML or...
            We don't know how many time it will take...
         */
            return new Promise((resolve, reject) => {
                // We simulate this with this code...
                let data: Array<Person> = [];
                data.push({name: 'Alvaro', age: 44});
                data.push({name: 'Oscar', age: 42});
                data.push({name: 'David', age: 42});
                // If error retrieving data reject
                // else resolve with array of Person
                setTimeout(() => {
                    resolve(data);
                }, 5000);
            })
        }
    }

    // how we can use this class
    let loader = new DataLoader();
    console.log('Loading...');
    loader.getDataFromServer()
        .then((data) => {
            data.forEach(eachPerson => {
                console.log(eachPerson);
            });
            console.log('Loading... Done!');
        })
        .catch((error) => {
            console.log(error);
        });
}