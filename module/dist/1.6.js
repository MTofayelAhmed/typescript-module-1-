"use strict";
// function in typescript
Object.defineProperty(exports, "__esModule", { value: true });
// normal Function
// arrow function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 2);
const arrowAdd = (num1, num2) => num1 + num2;
arrowAdd(4, 7);
//when a function is location in a object we call it method 
const poorUser = {
    name: "Tom",
    balance: 0,
    addBalance(balance) {
        return `my new balance is ${this.balance + balance}`;
    }
};
// map declaration
const arr = [1, 4, 9];
const newArray = arr.map((element) => element * element);
//# sourceMappingURL=1.6.js.map