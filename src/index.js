import './less/index.less'

// elements where the anchor tags will navigate
const header = document.querySelector('.intro');
const aboutUs = document.querySelector('.text-content');
const blog = document.querySelector('.inverse-content');
const contact = document.querySelector('.content-destination');
//adding ids to elements.
header.setAttribute('id', 'main');
aboutUs.setAttribute('id', 'letsGo');
blog.setAttribute('id', 'blogs');
contact.setAttribute('id', 'contacts');
//adding ids to anchor tags
const headerNavs = document.querySelectorAll('.nav a');
headerNavs[0].setAttribute('href', '#main');
headerNavs[1].setAttribute('href', '#letsGo');
headerNavs[2].setAttribute('href', '#blogs');
headerNavs[3].setAttribute('href', '#contacts');


//adding CSS styles to header nav on click and mouseover/out;
//looped through to add styles to each element
headerNavs.forEach(element => {
    element.addEventListener('mouseover', e => {
        e.target.style.border = '2px solid black';
        e.target.style.padding = '5px';
        e.target.style.transition = '500ms';
        e.target.style.borderRadius = '20px';
    });
    element.addEventListener('mouseout', e => {
        e.target.style.border = '0px solid';
        e.target.style.padding = '0px';
        e.target.style.transition = '100ms';
    })
});
//using preventDefault
headerNavs[0].addEventListener('click', e => {
    e.preventDefault();
    alert('you cant go here ahahahahahahaha noob :P');
})

//scrolling changes color of text in body once 1000?px? deep in yaxis
const body = document.querySelector('body');
function scrolling() {
    if (window.scrollY > 1400) {
        body.style.color = 'black';
        body.style.webkitTextStroke ='1px white'
        body.style.background = 'black'
    }
    else {
        body.style.background = 'white'
        body.style.color = 'white'
        body.style.webkitTextStroke = '1px black'
    }
}
window.addEventListener('scroll', scrolling);

//creates input for sign up to accept an email address.
const form = document.createElement('input');
form.placeholder = 'email';
form.type = 'text';
form.style.background = 'black';

const btn = document.querySelectorAll('.btn');
btn.forEach(elem =>{
    elem.addEventListener('dblclick', e =>{
        form.style.margin = '0 auto';
        form.style.border = '1px solid black'
            elem.appendChild(form)
        });
})


//used 5 event listeners :)s
