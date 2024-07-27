let rootURL = window.location.origin + window.location.pathname.split('/')[1] + '/';
let link = document.createElement('a');
link.href = rootURL;
link.textContent = 'index';
document.body.insertAdjacentElement('afterbegin', link);


