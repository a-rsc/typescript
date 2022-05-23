{
    // Arrays
    function printArray(array:Array<number>): void {
        console.log(array);
    }

    let array:number[] = [2, 3, 4];
    console.log(array.shift());
    printArray(array);

    array.push(5);
    printArray(array);
    console.log(array.pop());
    printArray(array);

    array.push(1);
    printArray(array);
    array.unshift(8);
    printArray(array);

    let everyisgreater = array.every(v => v > 0);
    console.log(everyisgreater);

    let everyisless = array.every(v => v < 10);
    console.log(everyisless);

    console.log(array.sort());
    console.log(array.reverse());
}