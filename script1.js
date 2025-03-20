// Funktio, joka tarkistaa, onko sana palindromi
function onPalindromi(word) {
  let length = word.length; // Sanan pituus
  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (word[i] !== word[length - 1 - i]) {
      return false; // Jos merkit eivät täsmää, palindromi ei ole
    }
  }
  return true; // Sana on palindromi
}

let keepGoing = true; // Jatketaan ohjelman suorittamista, kunnes käyttäjä lopettaa

while (keepGoing) {
  // Pyydetään käyttäjää syöttämään sana
  const input = prompt("Anna sana:");

  if (input === null || input.trim() === "") {
    // Jos käyttäjä ei anna sanaa tai painaa "Peruuta"
    alert("Ohjelma päättyy.");
    keepGoing = false; // Lopetetaan silmukka
  } else {
    let word = input.trim(); // Poistetaan ylimääräiset välilyönnit alusta ja lopusta

    // Tarkistetaan, onko sana palindromi
    if (onPalindromi(word)) {
      alert(`Sana "${input}" on palindromi.`);
    } else {
      alert(`Sana "${input}" ei ole palindromi.`);
    }
  }
}
