//function declarations

function greet(firstName, lastName){
    if(typeof(firstName === 'undefined')){
        firstName = 'Vishal';
    }
    if(typeof(lastName === 'undefined')){
        lastName = 'D Bhat';
    }
   // console.log('Hello');
   return 'Hello'+' '+firstName +' '+lastName;
}

console.log(greet('Vishal','D Bhat'));


//FUNCTION EXPRESSIONS

const square = function(x){
    return x*x;
};


console.log(square(8)); //closures


//IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

(function(){
    console.log('IIFE Ran...');
})();


(function name(name){
    console.log('Hello'+name);
})('Vishal D Bhat')



//can put functions within an object as well -> PROPERTY METHODS

const todo = {
    add: function(){
        console.log('Add todo...');
    },
    edit: function(id){
        console.log(`Edit to do ${id}`);
    }
}

todo.delete = function(){
    console.log('Delete todo...');
}


todo.add();
todo.edit(22);
todo.delete();

