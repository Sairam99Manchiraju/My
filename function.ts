function add(num1:number ,num2:number, num3?: number) : number {
    return num3? num1 + num2 + num3 : num1 + num2; 
}

const sub = (num1 :number , num2 :number): number => num1 - num2;

const mult = function (num1:number, num2:number) : number{
    return num1 * num2
}

function add1(num1: number, num2: number, ...num3: number[]): number {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let number_value:number[] = [1,2,3,4,5]

//console.log(add(2,3));
console.log (sub(2,3));
console.log (mult(1,2));

console.log(add1(1,2,...number_value)) 