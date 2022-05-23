// Promise.all(iterable)
{
    interface Book {
        isbn: number,
        title: string,
    }

    function isLogged(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
                // reject('Error');
            }, 2000);
        });
    }

    function getRemoteData(): Promise<Book[]> {
        return new Promise((resolve, reject) => {
            let mookData: Book[] = [];
            mookData.push({
                isbn: 1,
                title: 'An interesting book'
            });
            setTimeout(() => {
                resolve(mookData);
            }, 5000);
        });
    }

    let allMyPromises: Promise<boolean | Book[]>[] = [];
    // Promise<any> could be an other option
    allMyPromises.push(isLogged());
    allMyPromises.push(getRemoteData());
    Promise.all(allMyPromises).then(responses => {
        console.log('All promises finalized, this took 5s in our sample!');
        console.log(`Promises finalized: ${responses.length}`);
        let i = 1;
        responses.forEach((response) => {
            console.log(`Response from Promise number ${i++}: `);
            console.log(response);
        });
        console.log(allMyPromises);
    }).catch(e => { console.log(e);
    });
    console.log('This is executed just after promises are launched, but not finalized yet.');
}
