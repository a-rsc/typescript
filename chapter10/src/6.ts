// Async - await
// Existe un mecanismo alternativo para manejar peticiones asíncronas y Promises dentro de funciones. Más que un mecanismo es una estructura o sintaxis alternativa: Async - Await. Esta estructura es soportada desde TypeScript 1.7, pero es a partir de TypeScript 2.1 cuando su compatibilidad se amplía siendo compatible con ES3 mediante polifills.
{
    interface Book {
        isbn: number,
        title: string,
    }

    function getRemoteData(): Promise<Book[]> {
        return new Promise((resolve, reject) => {
            let mookData: Book[] = [];
            mookData.push({
                isbn: 1,
                title: 'An interesting book'
            });
            mookData.push({
                isbn: 2,
                title: 'Another interesting book'
            });
            setTimeout(() => {
                // resolve(mookData);
                reject(new Error(`Something terrible happened!`));
            }, 2000);
        });
    }

    // function whatTheLoadDataButtonDoes() {
    //     console.log('Showing Loading...');

    //     let arrayToBeDisplayedOnInterface: Book[] = [];

    //     getRemoteData()
    //     .then(response => {
    //         arrayToBeDisplayedOnInterface = response;
    //         console.log('Actions to update GUI, such as...');
    //         console.log(arrayToBeDisplayedOnInterface);
    //         console.log('Hide Loading...');
    //     });
    // }

    // Lo realmente interesante es que con esta sintaxis hemos convertido la llamada asíncrona en síncrona, puesto que no se ejecutará la siguinte línea console.log('Actions to update GUI, such as...') hasta que finalice la Promise.
    // Cualquier función que hace uso de await en su interior debe ser declarada como async.
    // Y por defecto, devuelve una Promise que no está relacionada con la anterior, sino con el hecho de que su ejecución es un hilo paralelo en sí.
    // La salida de la ejecución anterior es exactamente la misma.
    // ¿Y si la Promise fuera rechazada?
    // Con la sintaxis async-await, los rechazos de las promesas deben ser capturados con un bloque try-catch.


    async function whatTheLoadDataButtonDoes(): Promise<void> {
        console.log('Showing Loading...');

        try {
            let arrayToBeDisplayedOnInterface: Book[] = await getRemoteData();

            console.log('Actions to update GUI, such as...');
            console.log(arrayToBeDisplayedOnInterface);
        } catch (e: String) {
            console.log(e);
        }

        console.log('Hide Loading...');
    }

    // It is supposes to be called on press button
    whatTheLoadDataButtonDoes();
}
