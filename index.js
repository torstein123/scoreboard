
let countP1 = document.getElementById("count-el-p1")
let countP2 = document.getElementById("count-el-p2")
let resetall = document.getElementById("resultDisplay")

let scoreP1 = 0
let scoreP2 = 0

function incrementP1() {
    scoreP1 += 1;
    countP1.textContent = scoreP1;
}

function incrementP2() {
    scoreP2 += 1
    countP2.textContent = scoreP2
}

function removeP1() {
    scoreP1 -= 1
    countP1.textContent = scoreP1
}

function removeP2() {
    scoreP2 -= 1
    countP2.textContent = scoreP2
}

function reset() {
    let countStr = scoreP1 + " / " + scoreP2 + " - "
    resetall.innerText += countStr
    countP1.textContent = 0
    countP2.textContent = 0
    scoreP1 = 0
    scoreP2 = 0
    
}

