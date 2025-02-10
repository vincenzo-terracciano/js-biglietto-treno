/* Pari o dispari */

const userChoice = prompt("Scegliere pari o dispari");
console.log(userChoice);


const userNumber = Number(prompt("Inserire un valore numerico intero compreso tra 1 e 9"));
console.log(userNumber);

const pcNumber = Math.floor(Math.random() * 9) + 1;
console.log(pcNumber);

const sum = userNumber + pcNumber;
console.log(sum);
console.log(sum % 2);

let e_o

if (sum % 2 === 0) {
    e_o = "pari"
} else {
    e_o = "dispari"
}

if (e_o === userChoice) {
    alert("Hai vinto!")
} else {
    alert("Hai perso!")
} 





