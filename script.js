const namesBlock = document.getElementById("name-block");
const output = document.getElementById("output");
const btn = document.getElementById("btn");
var nameArray = [];

function panAfricanPowerBall(names) {
let names1 = namesBlock.value;
nameArray.push(names1);
let nameEnt =  Math.floor(Math.random() * nameArray.length);
output.innerHTML ="Congratulations " + nameEnt.value + " you win the Pan African Power Ball!";
}
btn.addEventListener('click', panAfricanPowerBall);
console.log(nameArray);