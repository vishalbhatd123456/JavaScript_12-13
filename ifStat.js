const color = 'Yellow';

if(color === 'red'){
    console.log('Color is red');
}else if(color === 'blue'){
    console.log('Color is blue');
}else{
    console.log('Color is NOT red or blue');
}

const name = 'Steve';
const age = 19;

if(age > 0 && age < 12){
    console.log(`${name} is a child`);
}else if(age >= 13 && age <= 19){
    console.log(`${name} is a teenager`);
}else{
    console.log(`${name} is an adult`);
}
