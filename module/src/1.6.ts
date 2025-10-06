// function in typescript

// normal Function
// arrow function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(2, 2);

const arrowAdd = (num1: number, num2: number): number => num1 + num2;

arrowAdd(4, 7);


//when a function is location in a object we call it method 


const poorUser = {
    name: "Tom",
    balance: 0,
    addBalance(balance:number): string{
        return `my new balance is ${this.balance + balance}`
    }
}


// map declaration

const arr: number[]= [1,4,9]

const newArray : number[]= arr.map((element:number): number=> element*element)
 