"use strict";
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
const sub = (num1, num2) => num1 - num2;
const mult = function (num1, num2) {
    return num1 * num2;
};
function add1(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let number_value = [1, 2, 3, 4, 5];
console.log(add(2, 3));
console.log(sub(2, 3));
console.log(mult(1, 2));
console.log(add1(1, 2, ...number_value));
