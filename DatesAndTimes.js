let val;



const today = new Date();
const birthday = new Date('01-06-1999');
const birthday2 = new Date('June 01 1999');

console.log(birthday2);

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();
val = today.getUTCFullYear();


birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1999);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(val);

val = birthday;
console.log(val);

val = today.toString();

console.log(val);
