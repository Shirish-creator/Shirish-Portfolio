import balls from "../src/assets/videos/Balls.mp4"

let video=document.querySelector('.arsenal-video');
// console.log(video)
let Source=document.createElement("source")

var scrollable=document.querySelector('main')



function arsenalVid(){
    video.appendChild(Source);
    Source.setAttribute('src', balls);
        Source.setAttribute('type', 'video/mp4');

}





var observer= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
video.play()
}else{
    video.pause();
      }
    }) 
  })
  
  var project =document.querySelectorAll("#arsenalVideo")
  project.forEach((el)=>observer.observe(el))
  
  
  
  
  




arsenalVid()
