let choices=document.querySelectorAll(".choice");
let user=document.querySelector("#user");
let comp=document.querySelector("#comp");
let msg=document.querySelector("#msg");

let userScore=0;
let CompScore=0;

let comGrab=()=>{
    let options=["rock","paper","scissors"];
    let ranInd =Math.floor(Math.random()*3);
    return options[ranInd];
};

let calcScore=(userWin,userGrab,compGrab)=>{
    if(userWin===0){
        CompScore++;
        comp.innerText=CompScore;
        msg.innerText=`You lost!${compGrab} beats ${userGrab}`;
        msg.style.backgroundColor="red";
    }
    else if(userWin===1){
            userScore++;
            user.innerText=userScore;
            msg.innerText=`You win!Your ${userGrab} beats ${compGrab}`;
            msg.style.backgroundColor="green";
    }
    else{

    }

};

let showWinner=(userGrab,compGrab)=>{
    let userWin=1;
    console.log("Userchoice:",userGrab,", Compchoice:",compGrab);
    ;

    if(userGrab===compGrab){
        console.log("It was a draw");
        msg.innerText="It was a draw.Try Again!";
        msg.style.backgroundColor="black";
        userWin =2;
    }
    else{
        if(userGrab==="rock"){
            //paper,scissors
            userWin= compGrab==="paper"?0:1;
        }
        else
        if(userGrab==="paper") {
            //rock,scissors
            userWin=compGrab==="rock"?1:0;
        }
        else{
            //rock,paper
            userWin=compGrab==="paper"?1:0;
        }
    }
    calcScore(userWin,userGrab,compGrab);
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       let userGrab=choice.getAttribute("id");
       //generate compGrab
       let compGrab=comGrab();
       showWinner(userGrab,compGrab);
    })
})




