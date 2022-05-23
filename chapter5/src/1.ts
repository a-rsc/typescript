import Persona from './Persona';

{
    interface PersonConfig {
        name: string,
        readonly age: number,
        isMarried?: boolean,
        [propExtra:string]: any,
    }

    let dataBase:PersonConfig[] = [];

    function addPerson(newPerson:PersonConfig):void {
        dataBase.push(newPerson);
    }

    function removePerson(query:string):void;
    function removePerson(query:number):void;
    function removePerson(query:string | number):void {
        if (typeof query == 'string') {
            dataBase = dataBase.filter(
                v => v.name != query
            );
        } else {
            if (typeof query == 'number') {
                dataBase = dataBase.filter(
                    v => v.age != query
                );
            }
        }
    }

    function listPerson():void {
        dataBase.forEach(
            v => {
                console.log(`${v.name} (${v.age}) ${v.isMarried ? 'Married' : 'Single'}` + (v.hobbies ? ` and hobbies ${v.hobbies}` : ''));
            }
        );
    }

    let me:PersonConfig = {name: 'Álvaro', age: 44};
    let david:PersonConfig = {name: 'David', age: 40, isMarried: true};
    let oscar:PersonConfig = {name: 'Oscar', age: 40, isMarried: false, hobbies:'paddle'};

    addPerson(me);
    addPerson(david);
    addPerson(oscar);
    listPerson();
    removePerson(40);
    listPerson();
}
{
    interface Shape {
        color: string,
    }
    interface PenStroke {
        penWidth: number,
    }
    interface Pen extends Shape, PenStroke {
        erasable: boolean,
    }

    let choosePen:Pen = <Pen>{};
    console.log(choosePen);
    choosePen.color = 'red';
    choosePen.penWidth = 1;
    choosePen.erasable = true;
    console.log(choosePen);
}
{
    let Alvaro:Persona = new Persona('Álvaro');
    Alvaro.sayHi();
    console.log(Alvaro.toString());
}