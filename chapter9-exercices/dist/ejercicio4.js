"use strict";
{
    // Nota: K se supone que nunca va a ser number
    class Store {
        constructor() {
            this._list = [];
        }
        add(item) {
            this._list.push(item);
        }
        get(query) {
            let result = null;
            if (typeof query == 'string') {
                result = this._list.find(element => element == query);
            }
            else if (typeof query == 'number') {
                result = this._list[query];
            }
            else {
                // nothing to do
            }
            return result;
        }
        print() {
            this._list.forEach((element, index) => {
                console.log(index + ' -> ');
                console.log(element);
            });
        }
        search(query) {
            let result = null;
            if (this._list.find(element => element == query)) {
                result = query;
            }
            else {
                result = 'Nothing in list';
            }
            return console.log(result);
        }
    }
    class Car {
        constructor(model, power) {
            this.model = model;
            this.power = power;
        }
    }
    // START
    let store1 = new Store();
    let store2 = new Store();
    store1.add('hello');
    store1.add('world');
    let c1 = new Car('Ford', 100);
    let c2 = new Car('Ferrari', 300);
    store2.add(c1);
    store2.add(c2);
    // // OUTPUT
    console.log(store1);
    console.log(store2);
    console.log(store1.get(0));
    console.log(store1.get('world'));
    console.log(store1.get(3));
    if (store1.get('unknonw') === undefined) {
        console.log('### Element not found!');
    }
    else {
        console.log('### Element found!');
    }
    if (store1.get('hello') === undefined) {
        console.log('### Element not found!');
    }
    else {
        console.log('### Element found!');
    }
    if (store1.get(3) === undefined) {
        console.log('### Element not found!');
    }
    else {
        console.log('### Element found!');
    }
    store2.print();
    store2.search(c1);
    let c3 = new Car('Ford', 100);
    store2.search(c3);
    store2.search(new Car('Toyota', 200));
}
