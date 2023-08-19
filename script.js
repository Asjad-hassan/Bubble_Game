var timer = 60;
var score = 0;
var hitrn=0;
let increaseScore = ()=>{
    score += 10;
    document.querySelector("#score").innerHTML = score;
}
let MakeBubble = ()=>{
    var clutter = ""
for(var i=1; i<235; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`
}
document.querySelector(".pbtm").innerHTML = clutter;
}
let runTimer = ()=>{
 var timerinterval = setInterval(()=>{
    if(timer>0){
        timer--;
        document.querySelector("#interval").textContent = timer;
    }
    else {
        clearInterval(timerinterval);
        document.querySelector('.pbtm').innerHTML = `<h1>Game Over!</h1>`;
    }
 },1000)
}
let getNewHit = ()=>{
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#Hitval").textContent = hitrn;
}
document.querySelector(".pbtm").addEventListener("click",(dets)=>{
    var ClickedNum = Number(dets.target.textContent);
    if(ClickedNum === hitrn){
        increaseScore();
        MakeBubble();
        getNewHit();
    }
})

getNewHit()
MakeBubble();
runTimer();