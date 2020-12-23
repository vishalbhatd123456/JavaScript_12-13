// document.getElementById(); -> select the element by their id

console.log(document.getElementById('task-title'));

//Get the things from the element

document.getElementById('task-title').id;


document.getElementById('task-title').id.className;

//changing the styling

document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '5px';

// Change the content
document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'My Tasks';
//document.getElementById('task title').innerHTML = 


//document.querySelector(); ->much more powerful

document.querySelector('#task-title');
document.querySelector('.card-title');
document.querySelector('h5');


document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';


document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(odd)').style






