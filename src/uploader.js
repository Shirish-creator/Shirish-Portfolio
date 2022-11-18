import horse from "./assets/videos/horsenft.mp4"

// var horsevideo=document.querySelector(".videhorse")

// function loadvideo(){
//     var video = document.getElementsByTagName('video')[0];

//     horsevideo.src=horse;
//     video.load();
// }

// loadvideo()

var video = document.getElementById('thevideo');
var source = document.querySelector(".videhorse");

source.setAttribute('src', horse);
source.setAttribute('type', 'video/mp4');

video.appendChild(source);
video.play();
console.log({
  src: source.getAttribute('src'),
  type: source.getAttribute('type'),
});

setTimeout(function() {
  video.pause();

  source.setAttribute('src', horse);
  source.setAttribute('type', 'video/webm');

  video.load();
  video.play();
  console.log({
    src: source.getAttribute('src'),
    type: source.getAttribute('type'),
  });
}, 3000);