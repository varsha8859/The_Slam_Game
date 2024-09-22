let currmoletile;
let currplanttile;
let score=0;
let gameover = false;

window.onload = function() {
    setGame();
}

function setGame() {
    //set up grid for game board in html
    for( let i = 0 ;i< 9; i++){
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click" , selecttile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setmole ,200); //200 millisecinds: 2sec0nds
    setInterval(setplant,1000);
}
function getRandomTile() {
    let num=Math.floor(Math.random() * 9);
    return num.toString();

}
function setmole(){
    if (gameover){
        return ;
    }
    if(currmoletile){
        currmoletile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";
    let num = getRandomTile();
    if(currplanttile && currplanttile.id==num){
        return ;
    }
    currmoletile = document.getElementById(num);
    currmoletile.appendChild(mole);
}


function setplant() {
    if(gameover){
        return;
    }
    if(currplanttile){
        currplanttile.innerHTML="";

    }
    let plant = document.createElement("img");
    plant.src="./piranha-plant.png" ;
    let num = getRandomTile();
    
    if(currmoletile && currmoletile.id==num){
        return ;
    }
    currplanttile = document.getElementById(num);
    currplanttile.appendChild(plant);
}
 function selecttile() {
    if(gameover){
        return ;
    }
     if(this == currmoletile){
        score +=10;
        document.getElementById("score").innerText = score.toString();
     }
     else if(this == currplanttile){
        document.getElementById("score").innerText = "game over : " +  score.toString();
        gameover=true;
 }

}
