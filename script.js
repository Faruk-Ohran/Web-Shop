let knjige = [
  {
    id: 1,
    fotografija: "images/Ime_ruze.jpg",
    naziv: "Ime ruže",
    autor: "Umberto Eko",
    kategorija: "Roman",
    cijena: 15,
    novaCijena: 15,
    kolicina: 1,
    opis:
      "Jedan od temeljnih postmodernističkih romana o fatalnom dejstvu jedne zabranjene knjige smješten je u godinu 1327. Franjevački monasi u bogatoj italijanskoj opatiji.",
  },
  {
    id: 2,
    fotografija: "images/Mi_protiv_vas.jpg",
    naziv: "Mi protiv vas",
    autor: "Fredrik Bakman",
    kategorija: "Roman",
    cijena: 20,
    novaCijena: 20,
    kolicina: 1,
    opis:
      "Ponekad je tako jednostavno potaći ljude da mrze jedni druge da je prosto neshvatljivo kako bilo šta drugo i radimo. Nakon užasnih zbivanja koja su potresla Medvjedgrad.",
  },
  {
    id: 3,
    fotografija: "images/Zivotinja_srca.jpg",
    naziv: "Životinja srca",
    autor: "Herta Miler",
    kategorija: "Drama",
    cijena: 15,
    novaCijena: 15,
    kolicina: 1,
    opis:
      "Dobitnica Nobelove nagrade. Lolino samoubistvo, koje je možda i ubistvo, povezuje četvoro mladih ljudi. Između njih se razvija neraskidivo prijateljstvo.",
  },
  {
    id: 4,
    fotografija: "images/Zivim_tiho.jpg",
    naziv: "Živim tiho",
    autor: "Fadil Duranović",
    kategorija: "Poezija",
    cijena: 15,
    novaCijena: 15,
    kolicina: 1,
    opis:
      "Fadil Duranović se suočio sa sobom i svijetom, a potom zatočen slikom i međusobnim odnosom, pjesnički osvijestio svoju komunikaciju. ",
  },
  {
    id: 5,
    fotografija: "images/Casovnicareva_kci.jpg",
    naziv: "Časovničareva kći",
    autor: "Kejt Morton",
    kategorija: "Drama",
    cijena: 26,
    novaCijena: 26,
    kolicina: 1,
    opis:
      "Mog pravog imena niko se ne seća. Istinu o tom letu niko ne zna. U leto 1862. grupa mladih umetnika na čelu sa talentovanim Edvardom Redklifom.",
  },
  {
    id: 6,
    fotografija: "images/Tudja_pravila.jpg",
    naziv: "Tuđa pravila",
    autor: "Džon Irving",
    kategorija: "Drama",
    cijena: 30,
    novaCijena: 30,
    kolicina: 1,
    opis:
      "Radnja ovog romana odvija se u ruralnim krajevima Nove Engleske u prvoj polovini dvadesetog veka. To je priča o doktoru Vilburu Larču – svecu i ginekologu.",
  },
];

let knjigaKosarica = localStorage.getItem("kosarica");
knjigaKosarica = JSON.parse(knjigaKosarica);

let knjiga = Object.keys(knjigaKosarica).map(function (key) {
  return knjigaKosarica[key];
});

if (knjigaKosarica.length != 0) {
  $("#kosarica-dugme span").append(`${knjiga.length}`);
  $("#kosarica-dugme span").show();
} else {
  $("#kosarica-dugme span").append(0);
}

function ucitajKnjige() {
  document.getElementById("wrapper").innerHTML = knjige
    .map(
      (knjiga) =>
        `<a class="okvir" href="Proizvod.html" onclick="setID(${knjiga.id})"><div class="knjiga-okvir">
        <div class="knjiga-fotografija"><img src="${knjiga.fotografija}"></div>
        <div class="knjiga-info">
        <div class="knjiga-naziv"><h2> ${knjiga.naziv}</h2></div>
        <div class="knjiga-cijena"><h3> ${knjiga.cijena} KM</h3></div>
        </div>
      </div></a>`
    )
    .join("");
}
function setID(id) {
  sessionStorage.setItem("id", id);
}

function vratiKnjigu() {
  let fotografija = document.getElementById("fotografija");
  let id = parseInt(sessionStorage.getItem("id"));
  const selectedBook = knjige.filter((knjiga) => {
    if (id === knjiga.id) return knjiga;
  });

  document.getElementById("Knjiga").innerHTML = selectedBook
    .map(
      (knjiga) =>
        `<div class="single-book-okvir">
      <div id="fotografija" class="single-book-photo" onclick="prikaziSlider()" onmouseover="viseSlika()" onmouseout="slikaOpacity()"><img id="hover-photo" src="${knjiga.fotografija}"><img id="search-photo" src="/images/search.png"></img><div id="vise-slika">Više slika</div></div>
      
      <div class="single-book-info"><div class="single-book-up">
      <div id="naziv"><h2> ${knjiga.naziv}</h2></div>
      <div id="autor"><p>${knjiga.autor}, ${knjiga.kategorija}</p></div>
      <div id="opis"> ${knjiga.opis}</div>
      </div>
      <div class="single-book-add">
      <form name="forma"> 
      <div class="kolicina">Količina: </div>
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
      <div id="cijena" >Cijena: ${knjiga.cijena} KM</div>
      <a  href="Pocetna.html"  onclick="dodajProizvod(${knjiga.id},${knjiga.cijena})"  id="dodaj"><button class="single-book-button">Dodaj u košaricu</button></a>
      </div>
      </div>
      </div>`
    )
    .join("");
  document.getElementById("slider").innerHTML = `
    <div class="slideshow-container">
 
      <div class="mySlides fade">
        <div class="numbertext">1 / 3</div>
        <img src="/images/Mi_protiv_vas.jpg" style="width: 100%;" />
        <div class="text">Caption Text</div>
      </div>

      <div class="mySlides fade">
        <div class="numbertext">2 / 3</div>
        <img src="/images/Casovnicareva_kci.jpg" style="width: 100%;" />
        <div class="text">Caption Two</div>
      </div>

      <div class="mySlides fade">
        <div class="numbertext">3 / 3</div>
        <img src="/images/Ime_ruze.jpg" style="width: 100%;" />
        <div class="text">Caption Three</div>
      </div>

   
      <a class="prev" id="prev" onclick="plusSlides(-1)">&#10094;</a>
      <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    <br />


    <div style="text-align: center;">
      <span class="dot" onclick="currentSlide(1)"></span>
      <span class="dot" onclick="currentSlide(2)"></span>
      <span class="dot" onclick="currentSlide(3)"></span>
    </div>`;
}

function getNovuCijenu(ID, CIJENA) {
  CIJENA *= forma.selektovano[forma.selektovano.selectedIndex].value;
  document.getElementById("cijena").innerHTML = "Cijena: " + CIJENA + " KM";
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

  let suma = 0;

  for (let i = 0; i < knjiga.length; i++) {
    suma += knjiga[i].cijena;
    $("#tabela-kosarica tbody").append(
      `<tr><td>
        <img class="slicica-tabela" src="${knjiga[i].fotografija}"></img>
        </td><td>
        ${knjiga[i].naziv}
        </td><td>
        <form name="formaKosarica"> 
      <select id="kolicinaKosarica${knjiga[i].id}" name="selektovanoKosarica" onChange="promijeniCijenu(${knjiga[i].id})">
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
        </td><td id="nova-cijena${knjiga[i].id}">
        ${knjiga[i].cijena} KM
        </td><td><a type="button" onclick="obrisiKnjigu(${knjiga[i].id})">Ukloni</a></td></tr>`
    );
    $("#kolicinaKosarica" + knjiga[i].id).val(knjiga[i].kolicina);
    $("#tabela-narudzba tbody").append(
      `<tr><td>
        <img class="slicica-tabela" src="${knjiga[i].fotografija}"></img>
        </td><td>
        ${knjiga[i].naziv}
        </td><td>
        ${knjiga[i].kolicina}
        </td><td>
        ${knjiga[i].cijena} KM
        </td></tr>`
    );
  }
  $("#tabela-narudzba tbody").append(
    `<tr><td id="ukupno"></td><td id="ukupno"></td><td id="ukupno"></td><td id="ukupno-kosarica">Ukupno: ${suma} KM</td></tr>`
  );
  document.getElementById("ukupno-kosarica").innerHTML =
    "Ukupno: " + suma + " KM";
}
function promijeniCijenu(id) {
  let cijena = 0;
  let kolicina = $("#kolicinaKosarica" + id).val();
  let suma = 0;

  let knjigaKosarica = localStorage.getItem("kosarica");
  knjigaKosarica = JSON.parse(knjigaKosarica);

  const selectedBook = knjige.filter((knjiga) => {
    if (id === knjiga.id) return knjiga;
  });
  cijena = selectedBook[0].novaCijena * kolicina;
  selectedBook[0].cijena = cijena;
  selectedBook[0].kolicina = kolicina;
  document.getElementById("nova-cijena" + selectedBook[0].id).innerHTML =
    cijena + " KM";

  knjigaKosarica = {
    ...knjigaKosarica,
    [selectedBook[0].id]: selectedBook[0],
  };

  var key;

  for (key in knjigaKosarica) {
    if (knjigaKosarica.hasOwnProperty(key)) suma += knjigaKosarica[key].cijena;
  }
  document.getElementById("ukupno-kosarica").innerHTML =
    "Ukupno: " + suma + " KM";
  localStorage.setItem("kosarica", JSON.stringify(knjigaKosarica));
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
  let knjigaKosarica = localStorage.getItem("kosarica");
  if (knjigaKosarica === null || knjigaKosarica.length === 2) {
    alert("Košarica je prazna");
    window.location.replace("Pocetna.html");
  } else if (podaciForma.valid() == true) {
    alert("Narudžba poslana!");
    localStorage.clear();
    window.location.replace("Pocetna.html");
  } else {
    alert("Molimo Vas da unesete ispravne podatke!");
  }
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

function prikazi() {
  let izbornik = document.getElementById("Izbornik");
  let wrapperContainer = document.getElementById("wrapper-container");
  let wrapperKosarica = document.getElementById("wrapper-kosarica");
  let wrapperNarudzba = document.getElementById("wrapper-narudzba");
  let knjiga = document.getElementById("Knjiga");
  if (izbornik.style.display == "flex") {
    izbornik.style.display = "none";
    let wrapperHeight =
      $("body").height() - ($("#nav").height() + $("#footer").height());
    if (wrapperKosarica != null) {
      wrapperKosarica.style.height = wrapperHeight + "px";
    }
    if (wrapperContainer != null) {
      wrapperContainer.style.height = wrapperHeight + "px";
    }
    if (wrapperNarudzba != null) {
      wrapperNarudzba.style.height = wrapperHeight + "px";
    }
    if (knjiga != null) {
      knjiga.style.height = wrapperHeight + "px";
    }
  } else {
    izbornik.style.display = "flex";

    let wrapperHeight =
      $("body").height() - ($("#nav").height() + $("#footer").height());
    if (wrapperKosarica != null) {
      wrapperKosarica.style.height = wrapperHeight + "px";
    }
    if (wrapperContainer != null) {
      wrapperContainer.style.height = wrapperHeight + "px";
    }
    if (wrapperNarudzba != null) {
      wrapperNarudzba.style.height = wrapperHeight + "px";
    }
    if (knjiga != null) {
      knjiga.style.height = wrapperHeight + "px";
    }
  }
}
$(document).ready(larg);

$(window).resize(larg);

function larg() {
  let wrapperKosarica = document.getElementById("wrapper-kosarica");
  let wrapperNarudzba = document.getElementById("wrapper-narudzba");
  let wrapperContainer = document.getElementById("wrapper-container");
  let knjiga = document.getElementById("Knjiga");
  let wrapperHeight =
    $("body").height() - ($("#nav").height() + $("#footer").height());
  if (wrapperKosarica != null) {
    wrapperKosarica.style.height = wrapperHeight + "px";
  }
  if (wrapperContainer != null) {
    wrapperContainer.style.height = wrapperHeight + "px";
  }
  if (wrapperNarudzba != null) {
    wrapperNarudzba.style.height = wrapperHeight + "px";
  }
  if (knjiga != null) {
    knjiga.style.height = wrapperHeight + "px";
  }
}

function sakrijSlider() {
  let sliderPlace = document.getElementById("slider-place");
  let slider = document.getElementById("slider");
  let fotografija = document.getElementById("fotografija");
  let viseSlika = document.getElementById("vise-slika");

  sliderPlace.style.visibility = "hidden";
  slider.style.visibility = "hidden";
  fotografija.style.position = "relative";
  viseSlika.style.visibility = "visible";
}
var slideIndex = 1;
function prikaziSlider() {
  let sliderPlace = document.getElementById("slider-place");
  let slider = document.getElementById("slider");
  let fotografija = document.getElementById("fotografija");
  let viseSlika = document.getElementById("vise-slika");

  sliderPlace.style.visibility = "visible";
  slider.style.visibility = "visible";
  fotografija.style.position = "static";
  viseSlika.style.visibility = "hidden";

  showSlides(slideIndex);
}

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

viseSlika = () => {
  let fotografija = document.getElementById("fotografija");
  let search = document.getElementById("search-photo");
  fotografija.style.opacity = 0.5;
  search.style.visibility = "visible";
  search.style.opacity = 1;
};
slikaOpacity = () => {
  let fotografija = document.getElementById("fotografija");
  let search = document.getElementById("search-photo");

  fotografija.style.opacity = 1;
  search.style.visibility = "hidden";
};
