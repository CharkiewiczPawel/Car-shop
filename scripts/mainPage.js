const $searchBrand = document.getElementById("searchBrand");
//buttons - pobranie buttonów
const $checkItOut = document.getElementById("checkItOut");
//opinions - opinie
const $randomUser1 = document.getElementById("randomUser1");
const $randomUser2 = document.getElementById("randomUser2");
const $cite1 = document.getElementById("cite1");
const $cite2 = document.getElementById("cite2");

const buickSkylark = {
  price: 0,
  type: "osobowy",
  drive: "przód",
  engine: "benzyna",
  brand: "buick",
  name: "Buick Skylark",
  urlImg: "./asetss/cars/buick1.jpg",
  mileage: "340 000km",
};

const buickRoadmaster = {
  price: 650000,
  type: "osobowy",
  drive: "tył",
  engine: "benzyna",
  brand: "buick",
  name: "Buick Roadmaster",
  urlImg: "./asetss/cars/buick2.jpg",
  mileage: "140 000km",
};

const volvoDumper = {
  price: 350000,
  type: "ciężarowy",
  drive: "przód",
  engine: "diesel",
  brand: "volvo",
  name: "Volvo Dumper",
  urlImg: "./asetss/cars/ciezarówka volvo.jpg",
  mileage: "240 135km",
};

const fiatDucato = {
  price: 50000,
  type: "furgonetka",
  drive: "przód",
  engine: "diesiel",
  brand: "fiat",
  name: "Fiat Ducato",
  urlImg: "./asetss/cars/Fiat Ducato.jpg",
  mileage: "140 000km",
};

const fiat500 = {
  price: 39000,
  type: "osobowy",
  drive: "przód",
  engine: "benzyna",
  brand: "fiat",
  name: "Fiat 500",
  urlImg: "./asetss/cars/Fiat500.jpg",
  mileage: "110 203km",
};
const willysMb = {
  price: 51000,
  type: "osobowy",
  drive: "4x4",
  engine: "benzyna",
  brand: "jeep",
  name: "Willys MB",
  urlImg: "./asetss/cars/jeep.jpg",
  mileage: "56 440km",
};
const fordMustang = {
  price: 121000,
  type: "osobowy",
  drive: "tył",
  engine: "benzyna",
  brand: "ford",
  name: "Ford Mustang",
  urlImg: "./asetss/cars/Mustang.jpg",
  mileage: "104 000km",
};
const peugeot404 = {
  price: 33500,
  type: "osobowy",
  drive: "tył",
  engine: "benzyna",
  brand: "peugeot",
  name: "Peugeot 404",
  urlImg: "./asetss/cars/Peugeot 404.jpg",
  mileage: "130 000km",
};
const peugeot508 = {
  price: 51500,
  type: "osobowy",
  drive: "przód",
  engine: "diesel",
  brand: "peugeot",
  name: "Peugeot 508",
  urlImg: "./asetss/cars/Peugeot 508.jpg",
  mileage: "165 000k",
};
const peugeot308 = {
  price: 36500,
  type: "osobowy",
  drive: "przód",
  engine: "diesel",
  brand: "peugeot",
  name: "Peugeot 308",
  urlImg: "./asetss/cars/Peugeot.jpg",
  mileage: "174 000km",
};
const scaniaR400Streamline = {
  price: 70000,
  type: "ciężarowy",
  drive: "przód",
  engine: "diesel",
  brand: "scania",
  name: "Scania Streamline",
  urlImg: "./asetss/cars/scania.jpg",
  mileage: "1 174 000km",
};
const subaruImpreza = {
  price: 31000,
  type: "osobowy",
  drive: "4x4",
  engine: "benzyna",
  brand: "subaru",
  name: "Subaru Impreza",
  urlImg: "./asetss/cars/subaru.jpg",
  mileage: "274 000km",
};
const toyotaHilux = {
  price: 141000,
  type: "osobowy",
  drive: "4x4",
  engine: "diesel",
  brand: "toyota",
  name: "Toyota Hilux",
  urlImg: "./asetss/cars/Toyota hilux.jpg",
  mileage: "32 000km",
};
const toyotaFjCruiser = {
  price: 64000,
  type: "osobowy",
  drive: "4x4",
  engine: "benzyna",
  brand: "toyota",
  name: "Toyota FJ Cruiser",
  urlImg: "./asetss/cars/Toyota.jpg",
  mileage: "82 000km",
};

const volvoXc60 = {
  price: 74000,
  type: "osobowy",
  drive: "przód",
  engine: "diesel",
  brand: "volvo",
  name: "Volvo XC 60",
  urlImg: "./asetss/cars/volvo xc60.jpg",
  mileage: "82 000km",
};
const jeepWrangler = {
  price: 114000,
  type: "osobowy",
  drive: "4x4",
  engine: "benzyna",
  brand: "jeep",
  name: "Jeep Wrangler",
  urlImg: "./asetss/cars/wrangler.jpg",
  mileage: "87 000km",
};
//Arr - Tablice
const arrTypeCars = [
  buickSkylark,
  buickRoadmaster,
  volvoDumper,
  fiatDucato,
  fiat500,
  willysMb,
  fordMustang,
  peugeot404,
  peugeot508,
  peugeot308,
  scaniaR400Streamline,
  subaruImpreza,
  toyotaHilux,
  toyotaFjCruiser,
  volvoXc60,
  jeepWrangler,
];

//generating cars - generowanie samochodów i danych do nich
const insertCar = function () {
  for (let i = 0; i < arrTypeCars.length; i++) {
    let image = document.createElement("img");
    image.setAttribute("src", arrTypeCars[i].urlImg);
    let carName = document.createElement("h3");
    carName.innerText = arrTypeCars[i].name;
    let carData = document.createElement("p");
    carData.innerText = `cena: ${arrTypeCars[i].price}, silnik:${arrTypeCars[i].engine}, napęd:${arrTypeCars[i].drive}, przebieg: ${arrTypeCars[i].mileage} `;
    const newSection = document.createElement("section");
    newSection.id = `car${i}`;
    newSection.classList.add(arrTypeCars[i].brand);

    let createCar = function (number) {
      document.getElementById("allCars").appendChild(newSection);
      document.getElementById(`car${number}`).appendChild(image);
      document.getElementById(`car${number}`).appendChild(carName);
      document.getElementById(`car${number}`).appendChild(carData);
    };
    createCar(i);
  }
};

//search engines - obsługa wyszukiwarki
$checkItOut.addEventListener("click", () => {
  const allCarsInSection = [...document.querySelectorAll("section")];
  allCarsInSection.forEach((e) => (e.style.display = "none"));
  const search = $searchBrand.value.toLocaleLowerCase();

  if (search === "" || search === "wszystko") {
    allCarsInSection.forEach((e) => (e.style.display = "flex"));
  } else {
    const foundCars = [...document.querySelectorAll(`.${search}`)];
    foundCars.forEach((e) => (e.style.display = "flex"));
  }
});

//car selection - Obsługa wyboru samochodu
const choiceCar = function () {
  for (let i = 0; i < arrTypeCars.length; i++) {
    document.getElementById(`car${i}`).addEventListener("click", () => {
      localStorage.setItem("shoopyCaryChoiceName", arrTypeCars[i].name);
      localStorage.setItem("shoopyCaryChoicePrice", arrTypeCars[i].price);
      localStorage.setItem("shoopyCaryChoiceUrl", arrTypeCars[i].urlImg);
      console.log(arrTypeCars[i]);
      window.location.href = "buyBoard.html";
    });
  }
};

//drawing avatars - losowanie avatarów w opiniach
async function randomUser() {
  const response1 = await fetch("https://randomuser.me/api/").then((res) =>
    res.json()
  );
  const randomPerson1 = response1.results[0];
  $randomUser1.src = randomPerson1.picture.large;

  const response2 = await fetch("https://randomuser.me/api/").then((res) =>
    res.json()
  );
  const randomPerson2 = response2.results[0];
  $randomUser2.src = randomPerson2.picture.large;
  console.log(randomPerson2);
}

//drawing opinions - losowanie opini
const opinionArr = [
  "Bardzo porządna firma, działają naprawdę sprawnie 5/5",
  "Szybko, sprawnie i bezproblemowo! Zapewniają pełnie satysfakcji",
  "Kupno samochodu przez internet to duża niepewność!! Jak się okazało bezpodstawnie, samochód był w doskonałym stanie!!:D",
  "Świetna firma, niestety mają mało samochodów na sprzedaż",
  "Zdecydowanie mają za mało marek niemieckich, po za tym super",
  "Trafiła się promocja, opony terenowe gratis, teraz mogę bez obawy taplać się samochodem w błocie ;P",
  "Zakup u nich do doskonały pomysł, obsługa bardzo miła i kompetentna",
];
const renderOpinion = function () {
  let opinion1 = 0;
  let opinion2 = 0;
  do {
    opinion1 = Math.floor(Math.random() * opinionArr.length);
    opinion2 = Math.floor(Math.random() * opinionArr.length);
  } while (opinion1 == opinion2);
  console.log(`I: ${opinion1} II:${opinion2}`);

  $cite1.innerHTML = opinionArr[opinion1];
  $cite2.innerHTML = opinionArr[opinion2];
};

//Wywołanie funkcji
insertCar();
choiceCar();
randomUser();
renderOpinion();
