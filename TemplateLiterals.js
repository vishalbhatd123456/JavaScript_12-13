const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Bangalore';

//dynamic data without the data strings

//initialize a html code here.
html = '<ul><li> Name:'+name+'</li><li> Age:'+age+'</li><li>'+job+'</li><li> City:'+city+'</li></ul>';

html = '<ul>' + 
        '<li>Name:'+name+'</li'> +
        '<li>Name:'+age+'</li'> +
        '<li>Name:'+job+'</li'> +
        '<li>Name:'+city+'</li>'+
        '</ul>';

//with the template strings

function vishalCall(){
    return 'Hello Vishal';
}
html = `
        <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job : ${job}</li>
        <li>City : ${city}</li>
        <li> ${2+2}</li>
        <li>${vishalCall()}</li>
        </ul>`
        ;



document.body.innerHTML = html; //DOM




