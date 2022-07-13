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
    if (window.scrollY > 500) {
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
form.style.border = '1px solid black'
form.style.fontSize = '20px'
form.style.width = '80px'
form.style.borderRadius = '15px'

//loops over each button and adds form on dblclick
const btn = document.querySelectorAll('.btn');
btn.forEach(elem =>{
    elem.addEventListener('dblclick', e =>{
            form.style.color = 'black';
            elem.appendChild(form);
        });
})

//makes text when filling out form black
form.addEventListener('focus', e=>{
    e.target.style.color = 'black'
})

//after you click away from typing email, letters turn green
form.addEventListener('blur', e=>{
    e.target.style.color = 'green'
})
//changes header img to footer img by clicking letter a
const headerImg = document.querySelector('img');

    document.addEventListener('keydown', e=>{
        if(e.keyCode === 65){
            headerImg.setAttribute('src', 'http://localhost:9000/img/destination.jpg')
        }
    });
    
    //when pointer enters headerImg grow 200px on Y axis;
    headerImg.addEventListener('pointerenter', e=>{
        e.target.style.height = '200px';
    })

    //when pointer leaves go back to 100px;
    headerImg.addEventListener('pointerleave', e=>{
        e.target.style.height = '100px';
    })


//used 10 event listeners and preventDefault() 


