let rootURL = window.location.origin + '/' + window.location.pathname.split('/theory/')[0] + '/theory/';
let link = document.createElement('a');
link.href = rootURL + 'index.html';
link.textContent = 'index';
document.body.insertAdjacentElement('afterbegin', link);

