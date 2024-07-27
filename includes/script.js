
//let newElement = document.createElement('div');
//newElement.textContent = 'This is a new element';
//
let newElementHTML = '<a href="../">home</a>'

//document.body.insertBefore(newElement, document.body.firstChild);

document.body.innerHTML = newElementHTML + document.body.innerHTML;
