const namesBlock = document.getElementById("name-block");
const form = document.querySelector('form');
const nameBtn = document.getElementById("nameBtn");
const output = document.getElementById("output");
const paragraph = document.getElementById("paragraph");
const refresh = document.getElementById("refresh");
const instructions = document.getElementById("instructions");
const instructDiv = document.getElementsByClassName('instruction-div');
const winner = document.querySelector('h1');
const btn = document.getElementById("btn");
const nameArray = [];

function instruct() {
    instructions.style.background =  "rgb(214, 189, 142)";
    instructions.innerHTML = "To get started, you must enter each name into the text field, and click Name after each name. When you are done entering all names, click the Pick button."
}
namesBlock.addEventListener('mouseover', instruct);

function panAfricanPowerBall(names) {
let names1 = nameArray.push(namesBlock.value);
paragraph.innerHTML = nameArray.join(' ');
form.reset();
}
btn.addEventListener('click', panAfricanPowerBall);
console.log(nameArray);
function pickAPlayer() {
    for (let i = 0; i < nameArray.length; i ++) {
        if(namesBlock.value === false) {
            nameArray.pop([0]);
        }
        let pick = Math.floor(Math.random() * nameArray.length);
        winner.innerHTML = "Congratulations, " + nameArray[pick] + " you were selected to win Pan African Powerball!";
    }
}
nameBtn.addEventListener('click', pickAPlayer);

function exit() {
 window.location.reload();
}
refresh.addEventListener('click', exit);