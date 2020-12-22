const color = 'Red';

switch(color){
    case 'Red':
        console.log('Color is red');
        break;
    case 'Blue':
        console.log('Color is Blue');
        break;
    default:
        console.log('Color is NOT red or blue');
        break;
}
let day;

switch(new Date().getDay()){
    case 0:
    day = 'Sunday';
    break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    default:
        day = 'Saturday';
        break;
}

console.log(`Today is ${day}`);
