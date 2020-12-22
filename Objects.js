//object reference types

const person= {
    firstName = 'Vishal',
    lastName ='D Bhat',
    age: 21,
    email:'vishal@gmail.com',
    hobbies : ['music','sports'],
    address:{
        city:'Miami',
        state : 'FL'
    },
    getBirthYear : function(){
        return 1999;
    }
}


const people =[
    {name: 'John',age:30},
    {name:'Mike',age:21},
    {name: 'Nancy',age : 22}
];

for(let i = 0;i<people.length;i++){
    console.log(people[i].name);
}

let val;
val = person;
val = person.firstName;
val = person['firstName'];
val = person.lastName;
val = person['lastName'];
val = person.age;
val = person.hobbies;
val = person.address;
console.log(val);
