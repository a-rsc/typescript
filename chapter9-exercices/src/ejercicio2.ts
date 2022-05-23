{
    interface Plane {
        model: string,
        npassengers: number,
    }

    interface HangarHash {
        [key:string]: Plane,
    }

    let myHangar:HangarHash = {}

    myHangar['123Z'] = {
        model: 'airbus',
        npassengers: 200,
    }

    myHangar['H789'] = {
        model: 'boing',
        npassengers: 151,
    }

    for (let key of Object.keys(myHangar)) {
        console.log(`${key}: ${myHangar[key].model} (${myHangar[key].npassengers})`);
    }
}