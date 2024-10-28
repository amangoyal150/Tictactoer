const gameinfo=document.querySelector(".gameinfo");
const boxes=document.querySelectorAll(".box");
const newgame=document.querySelector(".btn");
let currentplayer;
let gamegrid;
const clickSound = new Audio('zapsplat_household_plastic_wine_glasses_bang_together_001_10510.mp3'); 
const clickSoundd = new Audio('little_robot_sound_factory_Jingle_Win_Synth_05.mp3'); 

const wiingingpositions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
function intitgame(){
    currentplayer="X";
    boxes.forEach((box,index)=>{
        
        box.innerText="";
        box.classList=`rows box`;
    });
    gameinfo.classList.remove("move");
    gameinfo.classList.remove("newgame");
    gameinfo.classList.remove("winner");

    gamegrid=["","","","","","","","",""];
    gameinfo.innerText=`Current Player - ${currentplayer}`;
    boxes.forEach((x)=>{
        x.style.pointerEvents="auto";
    });
    newgame.classList.remove("blow");

   
}
intitgame();
boxes.forEach((x,index) => {
    x.addEventListener("click",()=>{
        handleClick(index);
        playClickSound();
    });
});


function playClickSound() {
    clickSound.play();
}
function playClickSoundd() {
    clickSoundd.play();
}
function handleClick(index){
    if(gamegrid[index]===""){
        if(currentplayer=="X"){
            boxes[index].classList.add("chlo");
 
        }
        else{
            boxes[index].classList.add("chlo0");

        }
        boxes[index].innerHTML=currentplayer;
        gamegrid[index]=currentplayer;
        swapturn();
        checkgameover();
    }
}
function swapturn(){
    if(currentplayer=="X"){
        

        currentplayer="0";
        gameinfo.innerText=`Current Player - ${currentplayer}`;

    }
    else{
        currentplayer="X";
        gameinfo.innerText=`Current Player - ${currentplayer}`;

    }
}
newgame.addEventListener("click",intitgame);

function checkgameover(){
    let ans="";
    wiingingpositions.forEach((x) => {
        if( (gamegrid[x[0]]!==""||gamegrid[x[1]]!==""||gamegrid[x[2]]!=="")&&(gamegrid[x[0]]===gamegrid[x[1]])&&(gamegrid[x[1]]===gamegrid[x[2]])){ 
            if(gamegrid[x[0]]==="X")              
            ans="X";
            
            else
                ans="0";
            boxes.forEach((x)=>{
                x.style.pointerEvents="none";
            });
            playClickSoundd();
           newgame.classList.add("blow");
            boxes[x[0]].classList.add("win");
            boxes[x[1]].classList.add("win");
            boxes[x[2]].classList.add("win");

           

    }

});
if(ans!=""){
    gameinfo.classList.add("winner");

    gameinfo.innerHTML=`Winer Player:- ${ans}`;
    gameinfo.classList.add("newgame");
    return;

}
let count=0;
gamegrid.forEach((x)=>{
    if(x!=""){
        count++;
    }
})
if(count==9){
gameinfo.innerText="Game   Tied  ";
gameinfo.classList.add("move");
newgame.classList.add("blow");


}

}


