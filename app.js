// Buena suerte!
//primary-number

//secondary-number

function getRandomInt() {
    return Math.floor(Math.random()*10);
}

const primaryNumber = getRandomInt();
const secondaryNumber = getRandomInt();

console.log("This is the random number 1: ", primaryNumber);
console.log("This is the random number 2: ", secondaryNumber);

const numSum = primaryNumber+secondaryNumber;

console.log("This is the sum of both random numbers: ", numSum);

document.querySelector('#primary-number').textContent = primaryNumber;
document.querySelector('#secondary-number').textContent = secondaryNumber;

const button = document.querySelector('#btn');
const result = document.querySelector("#guess");
console.log(result);

button.addEventListener('click', function(){
    console.log("Has hecho click");
    let userInput = document.querySelector('#guess').value;
    console.log("Esto es el resultado de userInput:", userInput);
    if(userInput == numSum) {
        document.querySelector('#message').textContent = "Tu respuesta es: " + userInput + ". Es correcto mi doc...";
    } else { document.querySelector("#message").textContent = "Me has fallado... La respuesta correcta es " + numSum;    
    }
})


/**
 * 1. Asociar el evento 'click' al botón #btn
 * 2. Primero, hacer un console.log dentro de la función para ver si funciona el click
 * 3. Comparar el valor de ese <input> con el valor de la suma de firstNumber + secondNumber
 * 3.1 Si son iguales, actualizar la propiedad .textContent del #message, con un mensaje tipo "¡La suma es correcta!"
 * 3.2 En caso contrario, actualizar la propiedad .textContent del #message, con un mensaje tipo "la suma es incorrecta. En realidad, la suma total era " - usar el valor de la variable total.
 */
