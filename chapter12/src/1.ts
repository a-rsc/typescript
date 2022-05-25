import {Observable, interval} from 'rxjs';
{
    // Un observable podemos entenderlo como un Promise que puede recibir información más de una vez, es decir, no tiene por qué finalizar para analizar el resultado, pude tener etados intermedios en los cuales analizamos la información recibidda en ese momento, pero el Observable permanece activo hasta su conclusión.

    const observable = new Observable(subscriber => {
        subscriber.next(1);
        subscriber.next(2);
        subscriber.next(3);
        setTimeout(() => {
            subscriber.next(4);
            subscriber.complete();
        }, 1000);
    });

    // Hemos creado un Observable: un objeto que producirá flujo de datos asíncronamente.
    // El constructor recibe una función de callback que será la encargada de generar el flujo de información. La función callback tiene un prámetro que será el subscriptor que tiene los siguientes métodos básicos.
    // 1. next(dato) -> realiza un push de información. Es decir, envía información al Observer que esté escuchando este Observable, pero no corta el flujo lo mantiene abierto.
    // 2. complete -> realiza una finalización del Observable (al igual que el Promise). El Observer, por tanto sabe que ha terminado la escucha.
    // 3. error(mensaje) -> termina el Observable con error. Similar a el rechazo de una Promise, pero se gestiona de otra forma.

    // Por tanto, nuestro generador de información realizará la siguiente operación: enviará un 1, un 2 y un 3 de forma secuencial y, posteriormente, un segundo más tarde enviará un 4 y, finalmente, cerrará el Observable.
}
{
    // El ejemplo anterior no es aún ejecutable, es decir, no podemos observar nada. ¿Por qué? Porque no hemos definido ningún Observer que "escuche" a ese Observable y gestione el flujo de información que genera. Es decir, no hemos realizado ninguna subscripción

    const observable = new Observable(subscriber => {
        subscriber.next(1);
        subscriber.next(2);
        subscriber.next(3);
        setTimeout(() => {
            subscriber.next(4);
            subscriber.complete();
        }, 1000);
    });

    console.log('just before subscribe');

    const subscription = observable.subscribe({
        next(x) { console.log('got value ' + x + ' and waiting for next one.');} // se ejecuta antes una llamada next del Observable. Es decir, recibe los datos del flujo.
        error(err) { console.error('something wrong occured: ' + err);} // se ejecuta cuando el observable ejecuta error(mensaje) y finaliza
        complete() { console.log('done');} // se ejecuta cuando el observable ejecuta complete y finaliza satisfactoriamente
    });

    console.log('just after subscribe');

    // subscription.unsubscribe();

    setTimeout(() => {
        subscription.unsubscribe();
        console.log('Error: loading data');
    }, 10000);
}
{
    // La función interval devuelve un observable que ejecuta next con un dato consecutivo cada número de milisegundos que se le haya pasado en la llamada.

    const observable1 = interval(500);
    const observable2 = interval(750);

    const subscription = observable1.subscribe(x => console.log(`First: ${x}`));
    const childSubscription = observable2.subscribe(x => console.log(`Second: ${x}`));

    subscription.add(childSubscription);

    setTimeout(() => {
        subscription.unsubscribe();
    }, 2000);
}