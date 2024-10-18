"use strict";
//import { Login, User } from './interface';
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name, address) {
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    Login() {
        return { name: "sairam", id: 1, email: "" };
    }
    getNameWithAdress() {
        return `${this.name} stays at ${this.address}`;
    }
}
_Employee_id = new WeakMap();
class Manager extends Employee {
    constructor(id, name, address, role) {
        super(id, name, address);
        this.role = role;
    }
    get NameWithRole() {
        return `${this.name} works as ${this.role} stays at ${this.address} `;
    }
}
let man = new Manager(1, 'Sairam Manchiraju', {
    street: "ARAM STREET",
    city: "Hyderebad",
    state: 'AP',
    pin: 534176
}, 'Devopps Engineer');
let know = man.NameWithRole;
let employe = new Employee(1, 'John', {
    street: "ARAM STREET",
    city: "Hyderebad",
    state: 'AP',
    pin: 534176
});
let address = employe.getNameWithAdress();
console.log(know);
console.log(man);
