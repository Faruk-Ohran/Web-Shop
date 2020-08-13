let knjige = [
  {
    id: 1,
    fotografija: "images/Ime_ruze.jpg",
    naziv: "Ime ruže",
    cijena: 15,
    kolicina: 1,
    opis:
      "Jedan od temeljnih postmodernističkih romana o fatalnom dejstvu jedne zabranjene knjige smješten je u godinu 1327. Franjevački monasi u bogatoj italijanskoj opatiji.",
  },
  {
    id: 2,
    fotografija: "images/Mi_protiv_vas.jpg",
    naziv: "Mi protiv vas",
    cijena: 20,
    kolicina: 1,
    opis:
      "Ponekad je tako jednostavno potaći ljude da mrze jedni druge da je prosto neshvatljivo kako bilo šta drugo i radimo. Nakon užasnih zbivanja koja su potresla Medvjedgrad.",
  },
  {
    id: 3,
    fotografija: "images/Zivotinja_srca.jpg",
    naziv: "Životinja srca",
    cijena: 15,
    kolicina: 1,
    opis:
      "Dobitnica Nobelove nagrade. Lolino samoubistvo, koje je možda i ubistvo, povezuje četvoro mladih ljudi. Između njih se razvija neraskidivo prijateljstvo.",
  },
  {
    id: 4,
    fotografija: "images/Zivim_tiho.jpg",
    naziv: "Živim tiho",
    cijena: 15,
    kolicina: 1,
    opis:
      "Fadil Duranović se suočio sa sobom i svijetom, a potom zatočen slikom i međusobnim odnosom, pjesnički osvijestio svoju komunikaciju. ",
  },
  {
    id: 5,
    fotografija: "images/Casovnicareva_kci.jpg",
    naziv: "Časovničareva kći",
    cijena: 26,
    kolicina: 1,
    opis:
      "Mog pravog imena niko se ne seća. Istinu o tom letu niko ne zna. U leto 1862. grupa mladih umetnika na čelu sa talentovanim Edvardom Redklifom.",
  },
  {
    id: 6,
    fotografija: "images/Tudja_pravila.jpg",
    naziv: "Tuđa pravila",
    cijena: 30,
    kolicina: 1,
    opis:
      "Radnja ovog romana odvija se u ruralnim krajevima Nove Engleske u prvoj polovini dvadesetog veka. To je priča o doktoru Vilburu Larču – svecu i ginekologu.",
  },
];

function ucitajKnjige() {
  document.getElementById("wrapper").innerHTML = knjige
    .map(
      (knjiga) =>
        `<a href="Proizvod.html" onclick="setID(${knjiga.id})"><div class="knjiga-okvir">
        <div><img src="${knjiga.fotografija}"></div>
        <div>Naziv: ${knjiga.naziv}</div>
        <div>Cijena: ${knjiga.cijena}</div>
      </div></a>`
    )
    .join("");
}
function setID(id) {
  sessionStorage.setItem("id", id);
}

function vratiKnjigu() {
  let id = parseInt(sessionStorage.getItem("id"));
  const selectedBook = knjige.filter((knjiga) => {
    if (id === knjiga.id) return knjiga;
  });

  document.getElementById("Knjiga").innerHTML = selectedBook
    .map(
      (knjiga) =>
        `<div class="knjiga-okvir">
      <div id="fotografija"><img src="${knjiga.fotografija}"></div>
      <div id="naziv"> ${knjiga.naziv}</div>
      <div id="opis"> ${knjiga.opis}</div>
      <label>Cijena:</label>
      <div id="cijena"> ${knjiga.cijena}</div>
      <form name="forma"> 
      <label>Kolicina:</label>
      <select id="kolicina" name="selektovano" onChange="getNovuCijenu(${knjiga.id},${knjiga.cijena})">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      </select>
      </form>
      <a href="Pocetna.html"  onclick="dodajProizvod(${knjiga.id},${knjiga.cijena})"  id="dodaj">Dodaj u kosaricu</a>
    </div>`
    )
    .join("");
}

function getNovuCijenu(ID, CIJENA) {
  CIJENA *= forma.selektovano[forma.selektovano.selectedIndex].value;
  document.getElementById("cijena").innerHTML = CIJENA;
}

function dodajProizvod(ID, CIJENA) {
  let knjigaKosarica = localStorage.getItem("kosarica");
  knjigaKosarica = JSON.parse(knjigaKosarica);

  const selectedBook = knjige.filter((knjiga) => {
    if (ID === knjiga.id) return knjiga;
  });

  knjigaKosarica = {
    ...knjigaKosarica,
    [selectedBook[0].id]: selectedBook[0],
  };

  CIJENA *= forma.selektovano[forma.selektovano.selectedIndex].value;
  selectedBook[0].cijena = CIJENA;
  selectedBook[0].kolicina =
    forma.selektovano[forma.selektovano.selectedIndex].value;
  localStorage.setItem("kosarica", JSON.stringify(knjigaKosarica));
}

function ucitajKosaricu() {
  let knjigaKosarica = localStorage.getItem("kosarica");
  knjigaKosarica = JSON.parse(knjigaKosarica);
  let knjiga = Object.keys(knjigaKosarica).map(function (key) {
    return knjigaKosarica[key];
  });

  for (let i = 0; i < knjiga.length; i++) {
    $("#tabela-kosarica tbody").append(
      `<tr><td>
        <img class="slicica-tabela" src="${knjiga[i].fotografija}"></img>
        </td><td>
        ${knjiga[i].naziv}
        </td><td>
        ${knjiga[i].cijena}
        </td><td>
        <form name="formaKosarica"> 
      <select id="kolicinaKosarica${i}" name="selektovanoKosarica" onChange="promijeniCijenu(${i},${knjiga[i].cijena})">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      </select>
      </form>
        </td><td><a type="button" onclick="obrisiKnjigu(${knjiga[i].id})">Ukloni</a></td></tr>`
    );
    $("#kolicinaKosarica" + i).val(knjiga[i].kolicina);
    $("#tabela-narudzba tbody").append(
      `<tr><td>
        <img class="slicica-tabela" src="${knjiga[i].fotografija}"></img>
        </td><td>
        ${knjiga[i].naziv}
        </td><td>
        ${knjiga[i].cijena}
        </td><td>
        ${knjiga[i].kolicina}
        </td></tr>`
    );
  }
}

$.validator.addMethod(
  "regex",
  function (value, element, regexp) {
    var check = false;
    return this.optional(element) || regexp.test(value);
  },
  "Unos nije validan!"
);

let podaciForma = $("#forma");

podaciForma.validate({
  rules: {
    dostavaIme: {
      required: true,
      regex: /^([A-Z])([a-z])+\ ([A-Z])([a-z])+$/,
    },
    dostavaAdresa: {
      required: true,
    },
    dostavaTelefon: {
      required: true,
      regex: /^[0-9]{3}\ [0-9]{3}\ [0-9]{3}$/,
    },
    dostavaMail: {
      required: true,
      regex: /^([a-z]+)\.([a-z]+)\@([a-z]+)\.([a-z])+$/,
    },
  },
  messages: {
    dostavaIme: {
      required: "Morate unijeti ime i prezime!",
      regex: "Ime i prezime unesita sa velikim početnim slovom!",
    },
    dostavaAdresa: {
      required: "Morate unijeti adresu!",
    },
    dostavaTelefon: {
      required: "Morate unijeti broj telefona!",
      regex: "Telefon mora biti unesen u formatu: 000 111 222",
    },
    dostavaMail: {
      required: "Morate unijeti e-mail!",
      regex: "E-mail mora biti u formatu email.email@hotmail.com",
    },
  },
});

function naruci() {
  alert("Narudžba poslana!");
  localStorage.clear();
  window.location.replace("Pocetna.html");
}

function obrisiKnjigu(id) {
  let knjigaKosarica = localStorage.getItem("kosarica");
  knjigaKosarica = JSON.parse(knjigaKosarica);
  let odabraneKnjige = Object.keys(knjigaKosarica).map(function (key) {
    return knjigaKosarica[key];
  });

  odabraneKnjige.splice(
    odabraneKnjige.findIndex((v) => v.id === id),
    1
  );
  localStorage.setItem("kosarica", JSON.stringify(odabraneKnjige));
  location.reload();
}
