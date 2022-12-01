import balls from "../src/assets/videos/Balls.mp4"

let video=document.querySelector('.arsenal-video');
// console.log(video)
let Source=document.createElement("source")

var scrollable=document.querySelector('main')

// function scroll(){
// console.log(target);

// }

function arsenalVid(){
    video.appendChild(Source);
    Source.setAttribute('src', balls);
        Source.setAttribute('type', 'video/mp4');

}

scrollable.addEventListener('scroll',()=>{
    for (let i=0;i<=1000;i++){
        let t=scrollable.scrollTop;
        // let x=t/1000;
        // console.log(t)

        if(window.innerWidth>900){
            if(t>2650){
                video.play()
                console.log("video is played")
            }
        }
        
        if(window.innerWidth<500){
            if(t>=2100){
                video.play()
                console.log("video is played")
            }
        }

        
        
       
    }
})




arsenalVid()
