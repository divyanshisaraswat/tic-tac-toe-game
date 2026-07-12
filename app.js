let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#new-game");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
let count = 0;

const  winpattern= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("Box was clicked");
        if(turn0){
            box.innerText = "0";
            box.style.color=" yellow";
            turn0=false;
        }
        else{
            box.innerText = "X";
            box.style.color="white";
            turn0=true;
        }
        box.disabled = true;
        count++;

        checkWinner();
    });
});

const resetgame = () => {
    turn0=true;
    count =0;
    enableboxes();
    msgcontainer.classList.add("hide");
};

const disableboxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableboxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();

}

const showDraw = () => {
    msg.innerText = "It is a draw, Play Again";
    msgcontainer.classList.remove("hide");
    disableboxes();
};


const checkWinner = () => {
    let winnerFound = false;
    for(let pattern of winpattern) {
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 == val2 && val2 == val3){
                winnerFound = true;
                showWinner(val1);
                return;
            }
        }

    }
    if(count == 9 && !winnerFound){
        showDraw();
    }
};

newbtn.addEventListener("click" , resetgame);
resetbtn.addEventListener("click" , resetgame);