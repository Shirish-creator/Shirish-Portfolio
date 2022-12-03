// var loader=document.querySelector('.loader')

// window.addEventListener('load',()=>{
//     loader.classList.add('loaded')
// })



// // function display_c(){
// // var refresh=1000; // Refresh rate in milli seconds
// // mytime=setTimeout('display_ct()',refresh)

// // }

// // function display_ct() {

// // var d = new Date(); 
// // var H=d.getHours(); 
// // var M=d.getMinutes(); 
// // var S= d.getSeconds();    
// // var D=d.getFullYear()

// // document.querySelector('.time').innerHTML = H + ":"+ M +":" + S + " " + "(Local Time)";
// // document.querySelector('.dated').innerHTML=D;
// // display_c();
// // }

import gsap from 'gsap';

        const tll = gsap.timeline({
            paused: "true"
        });
        tll.to("#percent, #bar",{
            duration:.2,
            opacity: 0,
            zIndex: -1
        });
        tll.to("#preloader",{
            duration: .8,
            width: "0%",
        });
        tll.to("#loadhead",{
            duration: 0,
            marginLeft:"-100px"
        });
        // tll.from(".container",{
        //     duration: 1.5,
        //     y: "-150%"
        // },"-=.2");
        // tll.to(".container h1",{
        //     opacity:1,
        //     textShadow: "12px 20px rgba(255,255,255,0.23)",
        //     skewY: 10,
        //     y: "10%",
        //     stagger: {
        //         amount: .4
        //     }
        // });
        var width = 1;
        var bar = document.getElementById("barconfrm");
        var id;
        function move(){
            id = setInterval(frame,10);

        }
        function frame(){
            if(width>=100){
                clearInterval(id);
                tll.play();
            }
            else{
                width++;
                bar.style.width = width + "%";
                document.getElementById("percent").innerHTML = width + "%";
            }
        }

        window.addEventListener('load',move())