// Tarkistetaan, onko localStorageissa jo tietoja
let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

// Funktio uuden yhteystiedon lisäämiseksi
function addContact() {
  // Haetaan syötetyt tiedot ja poistetaan ylimääräiset välilyönnit
  let name = document.getElementById("name").value.trim();
  let phone = document.getElementById("phone").value.trim();

  // Tarkistetaan, että kentät eivät ole tyhjiä
  if (name && phone) {
    let newContact = { nimi: name, puhelinnumero: phone };
    contacts.push(newContact);

    // Tallennetaan päivitettu taulukko localStorageen
    localStorage.setItem("contacts", JSON.stringify(contacts));

    // Päivitetään näyttö
    displayContacts();
  } else {
    alert("Täytä molemmat kentät!");
  }

  // Tyhjennetään syöttökentät
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
}

// Funktio yhteystietojen näyttämiseksi
// Näytetään vain nimi ja puhelinnumero korvattuna tähtimerkeillä ("***").
// Kontaktit järjestetään aakkosjärjestykseen nimen mukaan.
function displayContacts() {
  let contactList = document.getElementById("contactList");
  contactList.innerHTML = ""; // Tyhjennetään lista

  // Järjestetään kopiot aakkosjärjestykseen
  let sortedContacts = contacts
    .slice()
    .sort((a, b) => a.nimi.localeCompare(b.nimi));

  sortedContacts.forEach((contact) => {
    let listItem = document.createElement("li");
    // Näytetään nimi ja korvataan puhelinnumero tähtimerkeillä
    listItem.textContent = `${contact.nimi}: ***`;
    contactList.appendChild(listItem);
  });
}

// Puhtaasti toimiva funktio puhelinnumeron hakemiseen
// Parametreina: taulukko, josta haetaan, ja henkilön nimi
// Palauttaa puhelinnumeron, jos henkilö löytyy, tai null jos ei löydy
function searchPhoneNumber(contactsArray, name) {
  const result = contactsArray.find(
    (contact) => contact.nimi.toLowerCase() === name.toLowerCase()
  );
  return result ? result.puhelinnumero : null;
}

// Funktio, joka hakee puhelinnumeron ja näyttää sen käyttöliittymässä
function searchAndDisplayPhoneNumber() {
  let name = document.getElementById("searchName").value.trim();
  let phone = searchPhoneNumber(contacts, name);
  let resultText = phone
    ? `Puhelinnumero: ${phone}`
    : "Ei löydy tällaista henkilöä.";
  document.getElementById("searchResult").textContent = resultText;
}

// Näytetään yhteystiedot, kun sivu latautuu
window.onload = displayContacts;
