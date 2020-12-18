let val;


//Number to string
val = 5;



//output

console.log(val);
console.log(typeof val);
console.log(val.length);



val = String(5);

console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(4+4);

console.log(val);
console.log(typeof val);
console.log(val.length);


//boolean to a string

val = String(true);

console.log(val);
console.log(typeof val);
console.log(val.length);

//date to string

val = String(new Date());
console.log(val);
console.log(typeof val);
console.log(val.length);


//array to string

val = String([1,2,3,4]);
console.log(val);
console.log(typeof val);
console.log(val.length);


//toString() 
val = (5).toString();
val = (true).toString();


val = Number('5');
console.log(val.toFixed()); //the toFix() works only on numbers as a whole.


val = Number(true); //1
val = Number(false); // 0
val = Number(null); // 0


val = parseInt('100.30');
console.log(val);
val = parseInt(100.30);
console.log(val);



//type conversion -done directly by JS

const val1 = '5';
const val2 = 6;

const sum = val1 + val2;

console.log(sum);
console.log(typeof sum)
