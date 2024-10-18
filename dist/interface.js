"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//let usr: User = {name: 'john', id:1, email:"" };
// let {name: userName ,  id:  userId} : User = {name: 'john', id:1, email:"" };
let [user1, user2, ...restUsers] = [
    { name: 'sai', id: 1, email: "" },
    { name: 'ram', id: 2, email: "" },
    { name: 'manchiraju', id: 3, email: "" },
    { name: 'shanmuk', id: 4, email: "" }
];
let employee = {
    name: 'john',
    id: 1,
    email: "sairam.manchiraju@riskhawk.net",
    salary: 1000
};
let result = restUsers.filter(user => user.id > 3);
console.log(user1);
console.log(user2);
console.log(restUsers);
