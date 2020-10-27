
var board =[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160];
console.log(board);

const player_1button= document.getElementById("player-1");
const player_2button= document.getElementById("player-2");
class player{
constructor(name,position,money){
    this.name=name;
    this.position=position;
    this.money=money;
}
rollDice(){
    let pos=Math.floor(Math.random()*6)+1;
    console.log(pos);
    this.updatePosition(pos);
}
updatePosition(pos){
this.position+=pos;
console.log(this.position);
this.updateMoney();

}
updateMoney(){
    if(this.position<board.length)
    this.money-=board[this.position];

else{
    this.position%=15;
    this.money-=board[this.position];
}
console.log(player1);
console.log(player2);
}
}
let player1= new player("varma",0,1000);
let player2= new Player("suresh",0,1000);
player_1button.addEventListener('click',function(){
    player1.rollDice();
},false);
player_2button.addEventListener('click',function(){
    player2.rollDice();
},false);


