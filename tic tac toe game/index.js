const cells = document.querySelectorAll(".cell");
cells.forEach((cell)=>{
    cell.addEventListener("click",cellhandeller,{
        once:true,
    })
});
let currentPlayer="x";
let win=false;
let winningplayer=null;
let draw=false;
function cellhandeller(cell){
   
    this.innerHTML=currentPlayer;
    checker();
    if(win===true){

        window.alert("won by " + winningplayer);
    }
    if(draw==true)
    {
        window.alert("Draw");
    }

    currentPlayer=currentPlayer=== "x" ? "o":"x";

}
let winningpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
function checker(){
    let data= [].fill("");
    cells.forEach((cell)=>{
data.push(cell.innerText);
    });
winningpatterns.forEach((pattern)=>
{
    const [a,b,c]=pattern;
    if(data[a]&&data[b]&&data[c]){
    if(data[a]==data[b]&&data[b]===data[c]){
        win=true;
        winningplayer=currentPlayer;
        return;
    }
if(!data.includes('')){
    draw=true;
    return;
}
}
});

}