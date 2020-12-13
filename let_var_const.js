//var, let and const is udes for the variable declarations

//differences between them

var name = "John Doe";
console.log(name);

name = "Steve Smith";
console.log(name);

// init a variable

var greeting; //undefined
greeting = "Hello";
console.log(greeting);


//rules and conventions
// letters, numbers, _. $
// cannot start with a number

var _name = "vishal"; //underscores are generally reserved for the global variables.

//multiword variables

var firstName = "Vishal";
var first_name = "Vishal";


//LET

let dogName = 'Simmbaa';
console.log(dogName);

//cannot reassign

//const 
const catName = 'Mira';
console.log(catName);


// catName = 'Mirut';


//const object

const person = {
        name : 'John',
        age : 30
}; //user defined collection

console.log(person);


const company = {
    name : 'xyz',
    established : 2010,
    type : 'start-up',
    hiring : 'yes'
};

console.log(company);
company.name = 'pqr'; //we can mutate this one

console.log(company);


const numbers = [1,2,3,4,5];

numbers.push(6);

console.log(numbers);


//anything that is assigned to a const does not always needs to stay the same like for example the array, the object, the reference types...
