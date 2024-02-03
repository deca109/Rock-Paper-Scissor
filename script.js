let playerscore=document.querySelector(".playerscore");
let compscore=document.querySelector(".compscore");
let images=document.querySelectorAll(".container img");
let msgbox=document.querySelector(".display");
const choices=["Rock","Paper","Scissor"];
for(let i in images){
    images[i].onmouseenter=()=>{
        images[i].style.border="7px solid green";
        images[i].style.borderRadius="50%";
    }
    images[i].onmouseleave=()=>{
        images[i].style.removeProperty("border");
    }
    images[i].onclick=()=>{
        let playerchoice=choices[i];
        let compchoice=choices[Math.floor(Math.random()*3)];
        winCheck(playerchoice,compchoice);
    }
}
const winCheck=(p,c)=>{
    if(p===c){
        msgbox.innerText="It Was A Draw";
        msgbox.style.backgroundColor="#14213d";
    }
    else if((p=="Rock" && c=="Scissor")||(p=="Paper" && c=="Rock")||(p=="Scissor" && c=="Paper")){
        playerscore.innerText=parseInt(playerscore.innerText)+1;
        msgbox.innerText=`You Won! ${p} beats ${c}`;
        msgbox.style.backgroundColor="green";
    }
    else{
        compscore.innerText=parseInt(compscore.innerText)+1;
        msgbox.innerText=`You Lost! ${c} beats ${p}`;
        msgbox.style.backgroundColor="red";
    }
}
