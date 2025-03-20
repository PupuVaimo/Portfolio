// Yliluokka Henkilo
class Henkilo {
  constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi) {
    this.etunimet = etunimet;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = syntymavuosi;
  }

  // Metodi henkilötietojen näyttämiseen
  tulostaTiedot() {
    return `${this.etunimet} "${this.kutsumanimi}" ${this.sukunimi}, syntynyt ${this.syntymavuosi}`;
  }
}

// Aliluokka Urheilija
class Urheilija extends Henkilo {
  constructor(
    etunimet,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    kuva,
    omapaino,
    laji,
    saavutukset
  ) {
    super(etunimet, sukunimi, kutsumanimi, syntymavuosi);
    this._kuva = kuva; // Käytetään sisäisiä muuttujia getterien ja setterien kanssa
    this._omapaino = omapaino;
    this._laji = laji;
    this._saavutukset = saavutukset;
  }

  // Getterit ja setterit
  get kuva() {
    return this._kuva;
  }

  set kuva(url) {
    if (url.startsWith("http")) {
      this._kuva = url;
    } else {
      console.log("Virhe: Kuvan URL ei ole kelvollinen.");
    }
  }

  get omapaino() {
    return this._omapaino;
  }

  set omapaino(paino) {
    if (paino > 0) {
      this._omapaino = paino;
    } else {
      console.log("Virhe: Painon täytyy olla positiivinen numero.");
    }
  }

  get laji() {
    return this._laji;
  }

  set laji(laji) {
    if (laji.length > 0) {
      this._laji = laji;
    } else {
      console.log("Virhe: Lajin nimi ei voi olla tyhjä.");
    }
  }

  get saavutukset() {
    return this._saavutukset;
  }

  set saavutukset(lista) {
    if (Array.isArray(lista)) {
      this._saavutukset = lista;
    } else {
      console.log("Virhe: Saavutusten täytyy olla taulukossa.");
    }
  }

  // Metodi, joka tulostaa urheilijan tiedot
  tulostaUrheilija() {
    return `
      <img src="${this.kuva}" alt="${
      this.kutsumanimi
    }" style="width: 150px; height: auto;">
      <br>
      ${super.tulostaTiedot()}
      Laji: ${this.laji}
      Paino: ${this.omapaino} kg
      Saavutukset: ${this.saavutukset.join(", ")}
    `;
  }
}

// Testataan luokkia
const urheilija1 = new Urheilija(
  "Usain",
  "Bolt",
  "Lightning",
  1986,
  "img/usein.jpg",
  94,
  "Juoksu",
  ["Olympiakulta 2008", "Maailmanennätys 100m"]
);

const urheilija2 = new Urheilija(
  "Michael",
  "Phelps",
  "Flying Fish",
  1985,
  "img/felps.jpg",
  88,
  "Uinti",
  ["23 Olympiakultaa", "Maailmanennätys 200m"]
);

// Tulostetaan tiedot suoraan verkkosivulle
window.onload = () => {
  const urheilijaTiedot = document.getElementById("urheilijaTiedot");
  urheilijaTiedot.innerHTML = `
    <h2>Urheilija 1: ${urheilija1.kutsumanimi}</h2>
    <p>${urheilija1.tulostaUrheilija()}</p>
    <h2>Urheilija 2: ${urheilija2.kutsumanimi}</h2>
    <p>${urheilija2.tulostaUrheilija()}</p>
  `;
};
