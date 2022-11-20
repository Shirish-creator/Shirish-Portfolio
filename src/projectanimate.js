


var observer= new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
        entry.target.classList.add('pshow');
    }else{
        entry.target.classList.remove('pshow');
    }
  }) 
})

var project =document.querySelectorAll(".phidden")


project.forEach((el)=>observer.observe(el))



// var observer2= new IntersectionObserver((entries)=>{
//     entries.forEach((entry)=>{
//       if(entry.isIntersecting){
//           entry.target.classList.add('pshow');
//       }else{
//           entry.target.classList.remove('pshow');
//       }
//     }) 
//   })
  
  var threeD =document.querySelectorAll(".tDH")
  console.log(threeD)
  
  
//   project.forEach((el)=>observer.observe(el))
  