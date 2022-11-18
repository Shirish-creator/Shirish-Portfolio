import horse from "./assets/videos/horsenft.mp4"
import porsche from "./assets/videos/porsche.mp4"

let videos=document.querySelectorAll('.threeDvideo')
var source = document.querySelectorAll(".videosource");

console.log(source)

for(let n=0;n<2;n++){
    let VideoID=videos[n].id;
    
    if(VideoID==="nft"){
        
        source[n].setAttribute('src', horse);
        source[n].setAttribute('type', 'video/mp4');
        console.log(source[n].setAttribute,"horse")
        


    }
    if(VideoID==="porsche"){
        source[n].setAttribute('src', porsche);
        source[n].setAttribute('type', 'video/mp4'); 
        console.log(source[n].setAttribute,"porsche")
        

    }
    videos[n].appendChild(source[n]);
}


