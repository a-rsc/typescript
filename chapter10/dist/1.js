"use strict";
/*
{
    // Las promises tienen el método then que recibe una función con un parámetro que será el devuelto por resolve.

    // En caso de error se emplea catch para recibir una Promise rechazada, también se recibe un parámetro que será el devuelto por reject o por new Error o por el propio error que se produzca durante su ejecución. En nuestro ejemplo, nunca se ejecutará porque no se producen errores ni se rechaza.

    console.log('Hello');
    // const myPromise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(' World!');
    //     }, 2000);
    // });
    // myPromise.then((output) => { console.log(output);});
    // myPromise.catch((error) => { console.log(error);});
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(' World!');
        }, 2000);
    }).then((output) => { console.log(output);
    }).catch((error) => { console.log(error);
    });
    console.log(' Typescript!');
}
 */
{
    console.log('Hello');
    // const myPromise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(' World!');
    //     }, 2000);
    // });
    // myPromise.then((output) => { console.log(output);});
    // myPromise.catch((error) => { console.log(error);});
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const n = Math.floor(Math.random() * 10) + 1;
            if (n > 5) {
                resolve(n);
            }
            else {
                reject(n);
            }
        }, 5000);
    }).then((output) => {
        console.log(`Resolved by ${output}`);
    }).catch((error) => {
        console.log(`Rejected by ${error}`);
    });
    console.log(' Typescript!');
}
