

import './scss/Variables.scss';
import './scss/style.scss';

//bootstrap

import popper from "../node_modules/bootstrap/js/src/popover"

//scss
import "./scss/Custom_pages/aboutpage.scss"

//js
import "./aboutscroll"


var purplesection=document.querySelector('.about-hero')

var cursor= document.querySelector('.mouse-cursor')
var purple=document.querySelector('.blur_purple_1')


//function to mouse curosr------------------------------------

window.addEventListener('mousemove',(e)=>{
   

    cursor.style.top=e.pageY + (-10) +'px';
    cursor.style.left=e.pageX + (-10) +'px';
    // purple.style.top=e.pageY + (-400) +'px';
    // purple.style.left=e.pageX + (-400) +'px';
});

window.addEventListener('mousemove',(e)=>{
   

    purple.style.top=e.pageY + (-400) +'px';
    purple.style.left=e.pageX + (-400) +'px';
});