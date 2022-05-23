"use strict";
// Si analizamos el código, el método getDataFromServer promete devolvernos un array de Person, pero no sabemos cuánto tardará (en función de la conectividad, la carga del servidor, el volumen de información...).
// En nuestro caso realizamos una simulación con una demora forzada de 5 segundos.
{
    class DataLoader {
        constructor() {
            // code
        }
        getDataFromServer() {
            /*
               Get from Server data in JSON or XML or...
               We don't know how many time it will take...
            */
            return new Promise((resolve, reject) => {
                // We simulate this with this code...
                let data = [];
                data.push({ name: 'Alvaro', age: 44 });
                data.push({ name: 'Oscar', age: 42 });
                data.push({ name: 'David', age: 42 });
                // If error retrieving data reject
                // else resolve with array of Person
                setTimeout(() => {
                    resolve(data);
                }, 2000);
            });
        }
        getIsLogged() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const n = Math.floor(Math.random() * 10) + 1;
                    if (n > 6) {
                        resolve(true); // 'user logged!'
                    }
                    else if (n > 3) {
                        resolve(false); // 'user not logged!'
                    }
                    else {
                        reject(true); // 'error'
                    }
                }, 2000);
            });
        }
    }
    // how we can use this class
    let loader = new DataLoader();
    console.log('Loading...');
    loader.getIsLogged()
        .then((response) => {
        if (response) {
            return loader.getDataFromServer();
        }
        else {
            return null;
        }
    })
        .catch((error) => { throw new Error(`Rejected by ${error} (no connection)`); })
        .then((response) => {
        if (response == null) {
            console.log('User not logged!');
        }
        else {
            response.forEach(person => {
                console.log(person);
            });
        }
    })
        .finally(() => {
        console.log('Loading...done');
    });
}
