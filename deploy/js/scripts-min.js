// import { skillsTrigger } from "./scrollAnimation.js"

import { slideInRight, slideInLeft} from "./scrollAnimation.js"



// var
// const
// final



window.addEventListener('load', function(){



    // let number = 10;
    // let anotherNumber = 3;


    // number = "ten";

    // console.log(number);


    // let answer = number + anotherNumber;
    // console.log(answer);

    // index values               0                   1                   2
    let triggerElements = ["#issues-top","#history-first","#skills-content"];
    // console.log(triggerElements);
    // console.log(triggerElements.length);
    //console.log(triggerElements[0]);

    // index values                  0                   1                   2
    let animationElements =["#history-middle p","#skater-with-hat","#skills-content h1"];
    // console.log(animationElements);
    // console.log(animationElements.length)


    let buttonIndex = 0;

    for( const element of triggerElements){
        // console.log(buttonIndex);
        console.log(element + " is an element");
        
        if(element === "#history-first"){
            console.log("The index is " + buttonIndex);
        }

        buttonIndex ++;
    }



        //  i = i + 1;   === i++
    for(let i = 0; i < triggerElements.length; i++){
        // console.log(triggerElements[i]);

        if(triggerElements[i] === "#skater-with-hat" || triggerElements[i] === "#new skate boards"){
            // console.log(i + " is the index value of triggerElements");
        }

        //  = 1 = 6;
        //  == 
        //  === 1 === 2


        // if(2 === 2){
        //     // this is the true statement

        // }else{
        //     // this is the false statement

        // }



        
        if( i === triggerElements.length/2){
            slideInLeft(triggerElements[i], animationElements[i]);
        }else{
            slideInRight(triggerElements[i], animationElements[i]);
        }
    }

    // for(let i = 2; i < triggerElements.length; i++){
    //     slideInLeft(triggerElements[i], animationElements[i]);
    // }


    // for (i in triggerElements) {
    //     console.log(triggerElements[i]);
    // }


    // slideInRight();

    // slideInRight(triggerElements[0], animationElements[0]);

    // slideInRight("#history-first", "#robot-profile");

    // this will call the skillsTrigger function located in the scrollAnimation.js file
    // skillsTrigger("right center", ".gallery","#skynet");

    // skillsTrigger("left center",".yellow-bar","#skills-content");
});



// demoThing();

// console.log("this is working!");


// function demoThing(){
//     console.log("this is working inside function!");
// }


// will call the function
// demoThing();