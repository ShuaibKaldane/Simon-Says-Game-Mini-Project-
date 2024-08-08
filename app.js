let gameSeq = [];
let userSeq = [];
let btn = ["yellow", "red", "green", "purple"];
let start = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", () => {
    if (start == false) {
        console.log("Game started");
        start = true;
        levelup();
    }
});

function gameFlash(btn) {
        btn.classList.add("flash");
        setTimeout(function() {
            btn.classList.remove("flash");
        }, 1000);
    
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 1000);

}

function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randomIndx = Math.floor(Math.random() * 3); 
    let randomColor = btn[randomIndx];
    let randbtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq)
        gameFlash(randbtn);
}

function checkAns(indx){
    if(userSeq[indx]==gameSeq[indx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup , 1000)
        }
    }else{
        h2.innerHTML = `Game is over <b>Your score was ${level}</b> <br>Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 250)
        gameReset()
    }

}

function btnPress() {
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function gameReset(){
    start = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}
