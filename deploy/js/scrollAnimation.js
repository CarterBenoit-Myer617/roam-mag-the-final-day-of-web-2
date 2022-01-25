import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function slideInRight(triggerElement,animationElement ){
    const tl = new gsap.timeline();
    tl.from(animationElement,{
        duration:1,
        x: -500,
        alpha:0,
        scrollTrigger:{
            trigger: "skater-with-hat",
            start:"top center%",
            end: "bottom  80%",
            toggleActions: "restart none resume pause",
            markers: true,
            scrub: true

        }
    });
}

export function slideInLeft(triggerElement,animationElement ){
    const tl = new gsap.timeline();
    tl.from(animationElement,{
        duration:1,
        x: 500,
        alpha:0,
        scrollTrigger:{
            trigger: "new skate boards",
            toggleActions: "restart none resume none",
            markers: true,
            scrub: true
        }
    });
}