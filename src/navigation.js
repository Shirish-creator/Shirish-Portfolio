
var el=document.querySelector('main');
var ham=document.querySelector('.ham-menu');
var hamClose=document.querySelector('.close-ham');
var togSection=document.querySelector('.toggle-menu-section');

// var as=document.querySelectorAll('.Logo')
// console.log(as[1])

// as[1].addEventListener('click',()=>{
//     console.log('licked')
// })


el.scrollTop = 0;
el.scrollLeft = 0;
var anchor = document.querySelectorAll('.anchor');


// Convert buttons NodeList to an array
var anchorsArray = Array.from(anchor);

//navlink scroll function
function navfunc(n){

    let id= n.target.id;

    if(id==="home"){
        el.scrollTop=0;

    }
    if(id==="contact"){
        if(window.innerWidth<500){
            el.scrollTop=5200 
        }else{
            el.scrollTop=6000 

        }
        
    }
   
    if(id==="works"){
        el.scrollTop=725
    }
   
    
    togSection.classList.remove('toggle-active') 
};



anchor.forEach(occurence=>{
    occurence.addEventListener('click',navfunc)
})

ham.addEventListener('click',()=>{
    togSection.classList.add('toggle-active') 
})

hamClose.addEventListener('click',()=>{
    togSection.classList.remove('toggle-active') 
})
