// Buena suerte!
//primary-number

//secondary-number

function getRandomInt() {
    return Math.floor(Math.random()*10);
}

var primaryNumber = getRandomInt();
var secondaryNumber = getRandomInt();

console.log("This is the random number 1: ", primaryNumber);
console.log("This is the random number 2: ", secondaryNumber);

var numSum = primaryNumber+secondaryNumber;

console.log("This is the sum of both random numbers: ", numSum);

const resultcheck = document.querySelector('#btn');
resultcheck.addEventListener('click', function(e)){
    e.target.classList.t
}
