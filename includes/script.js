
//let newElement = document.createElement('div');
//newElement.textContent = 'This is a new element';

// Insert the new element at the beginning of the body
//
let newElementHTML = '<a href="/">home</a>'

//document.body.insertBefore(newElement, document.body.firstChild);

// Insert the HTML at the beginning of the body
document.body.innerHTML = newElementHTML + document.body.innerHTML;
