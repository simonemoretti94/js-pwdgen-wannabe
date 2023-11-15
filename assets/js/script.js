//script

// name

let nome_utente = prompt('Welcome to fancy password generator!, please write below your name');

console.log(`your name is ${nome_utente}`);

const nome = document.getElementById('td_name');

console.log(`just found ${nome} td1`);

nome.innerText = `${nome_utente}`;

// surname

let cognome_utente = prompt('Then please, write below your surname');

console.log(`your surname is ${cognome_utente}`);

const cognome = document.getElementById('td_surname');

console.log(`just found ${cognome} td2`);

cognome.innerText = `${cognome_utente}`;

// prefered colour

let user_favcol = prompt('Sorry for this, just one last effort, please write below your favourite colour :) ');

console.log(`your favourite color is ${user_favcol}`);

const colore = document.getElementById('td_colour');

console.log(`just found ${colore} td3`);

colore.innerText = `${user_favcol}`;

// password generation

let fancyPassword = `${nome_utente}` + `${cognome_utente}` + `${user_favcol}`;

console.log(`fancy password generated is ${fancyPassword}`);

const fancy_password_h1 = document.getElementById('fancy_password');

fancy_password_h1.innerText = `${fancyPassword}`