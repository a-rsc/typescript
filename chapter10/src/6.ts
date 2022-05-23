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
                resolve(mookData);
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

    // Lo realmente interesante es que con esta sintaxis hemos convertido la llamada asíncrona en síncrona, puesto que no se ejecutará la siguinte línea


    async function whatTheLoadDataButtonDoes(): Promise<void> {
        console.log('Showing Loading...');

        let arrayToBeDisplayedOnInterface: Book[] = await getRemoteData();

        console.log('Actions to update GUI, such as...');
        console.log(arrayToBeDisplayedOnInterface);
        console.log('Hide Loading...');
    }

    // It is supposes to be called on press button
    whatTheLoadDataButtonDoes();
}
