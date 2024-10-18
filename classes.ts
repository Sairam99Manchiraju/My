//import { Login, User } from './interface';

import * as Userlogin from './interface';

interface Address {
street : string;
city : string;
state : string;
pin : number;
} 


class Employee implements Userlogin.Login{
 #id: number;  
 name: string;
address: Address;
  

constructor(id: number, name: string, address: Address) {
    this.#id = id;
    this.name = name;
    this.address = address;
}
    Login(): Userlogin.User {
        return {name: "sairam",id:1, email:""}
    }
getNameWithAdress(): string {
     
    return `${this.name} stays at ${this.address}`;

}
} 

 
class Manager extends Employee {
    role: string;

    constructor(id: number, name: string, address: Address, role: string) {
        super(id, name, address); 
        this.role = role; 
    }  

    get NameWithRole(): string{
        return `${this.name} works as ${this.role} stays at ${this.address} `;

    }
}

let  man = new Manager (1,
    'Sairam Manchiraju',{
street:"ARAM STREET",
city: "Hyderebad",
state:'AP',
pin:534176
},'Devopps Engineer');

let know  = man.NameWithRole;

let employe = new Employee(1, 'John', {
    street:"ARAM STREET",
    city: "Hyderebad",
    state:'AP',
    pin:534176
    });
    
let address = employe.getNameWithAdress();

console.log(know);  
//
console.log(man); 