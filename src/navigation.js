
var el=document.querySelector('main');
el.scrollTop = 0;
el.scrollLeft = 0;
var anchor = document.querySelectorAll('.anchor');

// console.log(anchor)

// Convert buttons NodeList to an array
var anchorsArray = Array.from(anchor);




anchor.forEach(occurence=>{
    occurence.addEventListener('click',(n)=>{
        
       let id= n.target.id;
       console.log(id)
       window.scrollTo(0,200)

       if(id==="works"){
        el.scrollTop=725
       }
       else{
        el.scrollTop=0
       }
    //    if(id="about"){
    //     el.scrollTop=920
    //    }
    })
})
