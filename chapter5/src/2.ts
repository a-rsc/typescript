import { Person } from './Person';

import Employee from './Employee';
import Customer from './Customer';

{
    const myEmployee:Employee = new Employee(null);
    const myCustomer:Customer = new Customer({
        dni: '0123456789',
        name: 'Álvaro Rodríguez Santa Cruz',
        address: 'Calle Anselm Clavé, 56 - Granollers (08401)',
        phone: 608084789,
        birthDate: new Date('1978-02-15'),
        methodPayment: 'Visa',
    });

    console.log(myEmployee);
    console.log(myCustomer);

    console.log(myEmployee.toString());
    console.log(myCustomer.toString());
}
{
    const listPerson: Array<Person> = []; // Se ha importado Person sólo para este ejemplo
    listPerson.push(new Employee(null));

    listPerson.push(new Customer({
        dni: '0123456789',
        name: 'Álvaro Rodríguez Santa Cruz',
        address: 'Calle Anselm Clavé, 56 - Granollers (08401)',
        phone: 608084789,
        birthDate: new Date('1978-02-15'),
        methodPayment: 'Visa',
    }));
    listPerson.push(new Employee({
        dni: '0123456789',
        name: 'David Rodríguez Santa Cruz',
        address: 'Calle Anselm Clavé, 56 - Granollers (08401)',
        phone: 608084789,
        birthDate: new Date('1979-10-24'),
        department: 'IT',
        salary: 35000,
    }));
    listPerson.push(new Person({
        dni: '0123456789',
        name: 'Oscar Rodríguez Santa Cruz',
        address: 'Calle Anselm Clavé, 56 - Granollers (08401)',
        phone: 608084789,
        birthDate: new Date('1979-10-24'),
    }));

    for (let eachPerson of listPerson) {
        if (eachPerson instanceof Employee) {
            console.log('Employee...');
        } else if (eachPerson instanceof Customer) {
            console.log('Customer...');
            // const c:Customer = <Customer>eachPerson;
            eachPerson.buy();
        } else {
            console.log('It must be a Person!');
        }
        console.log(eachPerson.toString());
        // eachPerson.buy(); // error if not Customer
    }
}