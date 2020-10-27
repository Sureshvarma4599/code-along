var board =[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160];
console.log(board);
const player_1button= document.getElementById("player-1");
const player_2button= document.getElementById("player-2");

console.log(player_1button);
console.log(player_2button);

player_1button.addEventListener('click',rollDice_1);
player_2button.addEventListener('click',rollDice_2);

var player1=["varma",0,1000];
var player2=["suresh",0,1000];

function rollDice_1(){
    let position=Math.floor(Math.random()*6)+1;
    console.log("player one rolls",position)
    changePosition_1(player1[1],position);
}
function changePosition_1(old,currentPos){
    var newPosition=old+currentPos;
    player1[1]=newPosition;
    console.log(player1[1]);
    updateMoney_1(player1[1]);
}
function updateMoney_1(p1){
    var updatemoney=0;
    if(p1<board.length)
    updateMoney=player1[2]-board[p1-1];
    else{
        p1=p1%15;
    }
    console.log(updateMoney);
}
//player 2
function rollDice_2(){
    let position=Math.floor(Math.random()*6)+1;
    console.log("player two rolls",position)
    changePosition_2(player2[1],position);
}
function changePosition_2(old,currentPos){
    var newPosition=old+currentPos;
    player2[1]=newPosition;
    console.log(player2[1]);
    updateMoney_2(player2[1]);
}
function updateMoney_2(p2){
    var updatemoney=0;
    if(p2<board.length)
    updateMoney=player2[1]-board[p2-1];
    else{
        p2=p2%15;
    }
    console.log(updateMoney);
}