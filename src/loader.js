import rocket from "../src/assets/rocket.gif"

let contain=document.querySelector('.rocket')

contain.src=rocket;

import gsap from 'gsap';
import { EasePack } from 'gsap/all';

        const tll = gsap.timeline({
            paused: "true"
        });
        tll.to("#percent, #bar",{
            duration:.2,
            opacity: 0,
            zIndex: -1
        });
        tll.to("#preloader",{
            duration: .5,
            marginLeft:"-100%"
        });
        tll.to(".rocket",{
            duration:0.05,
            opacity: 0,
            // zIndex: -1 ,         
            width: "-100%",
        });
        // tll.to("#loadhead",{
        //     duration: 0,
        //     marginLeft:"-100px"
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