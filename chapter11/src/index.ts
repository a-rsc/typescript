import * as data from "./data/data.json"; // it's imported as Object (like JSON.parse)
{
    // let myCompanies: Company[] = [];
    console.log(data);
}
{
    for (const company of Object.getOwnPropertyNames(data)) {
        // Solo necesitaríamos un pequeño cambio para evitar la impresión de la clave default
        if (company != 'default') {
            console.log((<any>data)[company]);
        }
    }
}
{
    interface Person {
        fullname: string;
    }
    interface Company {
        id: number,
        name: string,
        ceo: Person;
        people: Person[]
    }

    for (const company of Object.getOwnPropertyNames(data)) {
        if (company != 'default') {
            // Antes de operar con la propiedad comrobar que exista...
            if ((<any>data)[company].name && (<any>data)[company].name == 'Developodo') {
                let developodo: Company = {id:1,...(<any>data)[company]}
                console.log(developodo);
            }
        }
    }
}
{
    interface Person {
        fullname: string;
    }
    interface Company {
        id: number,
        name: string,
        ceo: Person;
        people: Person[]
    }

    for (const company of Object.getOwnPropertyNames(data)) {
        if (company != 'default') {
            // Antes de operar con la propiedad comrobar que exista...
            if ((<any>data)[company].name && (<any>data)[company].name == 'Developodo') {
                let developodo: Company = {id:1,...(<any>data)[company]}
                if (Array.isArray(developodo.people)) {
                    developodo.people.forEach((employee) => {
                        console.log((<Person>employee).fullname);
                    });
                }
            }
        }
    }
}