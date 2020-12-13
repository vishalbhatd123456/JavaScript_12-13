//data types in JavaScript

//rpimitive data types : Stored directly in the location the variable accesses.
//primitives are stroed on the stack


//reference data types : these are accessed by reference. Objects are stored on the heap 
//a pointer to a location in the memory.


// 6 primitive data types:
// string, number, boolean, null, undefined, symbols(ES6).

//reference types : functions, object literals,m dates,arrays... anything else...
//dynamically typed language, which means the types are associated with the values and not hte variables.

//the dame varaible can hold muliple types.
// we do not need to specify the types.

//typeof operator


//PRIMITIVE

//Strings

const name = 'Vishal D Bhat'; //string
const age = 21; // number
const hasKids = false; //boolean
const car = null; //object
let test; //undefined

const sym = Symbol();


//reference types
//Arrays
const hobbies = ['movies','teaching'];

//object literal
const address = {
    city : 'Bangalore',
    state: 'Kar'
};

const today = new Date();
console.log(today);
console.log(typeof today);

console.log(typeof name);
