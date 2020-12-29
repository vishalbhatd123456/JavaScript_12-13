//create an element and insert classes, so on

//create the element

const li = document.createElement('li');



conosle.log(li);


//add a class

li.className = 'collection-item';


// add an id

li.id = 'new-item';


//add attribute 

li.setAttribute('title','New Item');

//add a text note inside the li (append)

li.appendChild(document.createTextNode('Hello World;'));

// Append li as child to ul


//create new link element

const link = document.createElement('a');

link.className = '';

link.innerHTML = '';

//append link into li


document.querySelector('ul.collection').appendChild(li);


