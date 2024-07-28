

let newElementHTML = '<div class="display-title">' + document.title + '</div>'
document.body.innerHTML = newElementHTML + document.body.innerHTML;



let rootURL = window.location.origin + window.location.pathname.split('/theory/')[0] + '/theory/';
let linkHTML = `<a class="top-bar" href="${rootURL}index.html">index</a>`
document.body.innerHTML = linkHTML + document.body.innerHTML;





