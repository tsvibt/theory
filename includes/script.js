

let newElementHTML = '<div class="display-title">' + document.title + '</div>'
document.body.innerHTML = newElementHTML + document.body.innerHTML;



let rootURL = window.location.origin + window.location.pathname.split('/theory/')[0] + '/theory/';
let linkHTML = `<a class="top-bar" href="${rootURL}index.html">index</a>`
document.body.innerHTML = linkHTML + document.body.innerHTML;


window.MathJax = {
  tex: { inlineMath: [['$', '$'], ['\\(', '\\)']] }
};

var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
script.async = true;
document.head.appendChild(script);



