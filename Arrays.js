//arrays and array methods

const numbers = []; //define an array

const  numbers2 = new Array(22,45,33,76,54);

const fruit = ['Apple','Orange','Banana','Pear'];

const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];


console.log(mixed);

let val; //mutator


console.log(numbers);
console.log(val);

//get the array length
val = numbers.length;

console.log(val);

//check if an element is in the array

val = Array.isArray(numbers);
console.log(val);


val = Array.isArray('Hello');
console.log(val);


//get a single value

val = numbers2[3];
val = numbers2[0];

//arrays are not immutable
numbers2[2] = 'Hello';

//find the index of value
val = numbers2.indexOf('Hello');

numbers.push(250); //pushes at the end of the array
//add on to front
numbers.unshift(120);
console.log(numbers);
//pop from the end
numbers.pop();
console.log(numbers2);
console.log(val);

//take from the front
numbers.shift();

//splice values
numbers.splice();

numbers.splice(1,1);

numbers.splice(1,2);

console.log(numbers);


numbers.reverse();


//concatenate array
val = numbers.concat(numbers2);


//sort the array
val = numbers2.sort();

console.log(val);


val = numbers2.sort(function(x,y){
    return x-y;
});


console.log(val);

function under50(num){
    return num < 50;
}


val = numbers.find(under50);








