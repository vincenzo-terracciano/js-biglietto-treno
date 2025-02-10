/* Tools 
    - prompt per chiedere all'utente il numero di km da percorrere;
    - prompt per chiedere l'età del passeggero;
*/

const user_km = prompt("Scegliere il numero di km da percorrere");
console.log(user_km);

const user_age = prompt("Inserire l'età del passeggero");
console.log(user_age);

const ticket_price = (user_km * 0.21).toFixed(2);
console.log(ticket_price);

let ticket;

if (user_age < 18) {
    ticket = (ticket_price * 0.8).toFixed(2);
    
} else if (user_age > 65) {
    ticket = (ticket_price * 0.6).toFixed(2);
    
} else {
    ticket = (ticket_price).toFixed(2)
}

console.log(ticket);



