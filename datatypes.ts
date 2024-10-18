let latstname: string;
let age :number;
let isvalid: boolean = false;
let deplist :Array<string>;
let emlist : string[]; 
let dob ='25'; 
latstname = 'sairam';

let result = parseInt(dob);
let newname = latstname.toUpperCase;
let numlist : number[];
numlist = [1,2,3,4,5,6,7];
let results = numlist.filter((num) => num >2);
let sum = numlist.reduce((acc, num) => acc + num);
age = 50.6;
const enum Color{
 red,
 green,
 blue   
}

let c:Color =Color.blue;

let swapNum:[number,number];

function swapNumbers(num1:number,num2:number) : [number,number] {
    return [num2,num1]
} 

swapNum = swapNumbers(10,20);

//swapNum[0];
swapNum[1]; 
console.log(result)
console.log(newname)
console.log(results)
console.log(sum)