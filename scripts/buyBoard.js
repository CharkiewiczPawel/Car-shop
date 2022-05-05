$carIcon = document.getElementById("carIcon");
$nameCar = document.getElementById("nameCar");
$carPrice = document.getElementById("carPrie");
$deliveryDate = document.getElementById("deliveryDate");
$nameAndForname = document.getElementById("nameAndForname");

const $tire = document.getElementById("tire");
const $chassis = document.getElementById("chassis");
const $oc = document.getElementById("oc");

const $cash = document.getElementById("cash");
const $leasing = document.getElementById("leasing");
const $warning = document.getElementById("warning");

//button
const $back = document.getElementById("back");
const $buy = document.getElementById("buy");

const carNameLocalStorage = localStorage.getItem("shoopyCaryChoiceName");
const carPriceLocalStorage = localStorage.getItem("shoopyCaryChoicePrice");
const carPictureLocalStorage = localStorage.getItem("shoopyCaryChoiceUrl");

$carIcon.src = carPictureLocalStorage;
$nameCar.innerText = carNameLocalStorage;
let newPriceFoCar = parseInt(carPriceLocalStorage);
$carPrice.innerText = `Cena: ${newPriceFoCar}zł`;

//delivery date- ustawienie daty
const settingData = function () {
  const data = new Date();
  if (data.getDay() !== "0") {
    data.setDate(data.getDate() + 14);
    console.log(`${data.getDate()}-${data.getMonth()}-${data.getFullYear()}`);
    $deliveryDate.innerText = `Data dostawy ${data.getDate()}.${
      data.getMonth() + 1
    }.${data.getFullYear()}`;
  } else if (data.getDay() === "0") {
    data.setDate(data.getDate() + 15);
    console.log(`${data.getDate()}-${data.getMonth()}-${data.getFullYear()}`);
    $deliveryDate.innerText = `Data dostawy ${data.getDate()}.${
      data.getMonth() + 1
    }.${data.getFullYear()}`;
  }
};
//additional options - ustawienie opcji dodatkowych

addEventListener("click", () => {
  $carPrice.innerText = `Cena: ${newPriceFoCar}zł`;
  let add = 0;
  if ($tire.checked) {
    add = add + 2000;
    $carPrice.innerText = `Cena: ${newPriceFoCar + add}zł`;
    localStorage.setItem("shoopyCaryChoicePrice", newPriceFoCar + add);
  }
  if ($chassis.checked) {
    add = add + 500;
    $carPrice.innerText = `Cena: ${newPriceFoCar + add}zł`;
    localStorage.setItem("shoopyCaryChoicePrice", newPriceFoCar + add);
  }
  if ($oc.checked) {
    add = add + 1000;
    $carPrice.innerText = `Cena: ${newPriceFoCar + add}zł`;
    localStorage.setItem("shoopyCaryChoicePrice", newPriceFoCar + add);
  }
  if (!$tire.checked && !$chassis.checked && !$oc.checked) {
    localStorage.setItem("shoopyCaryChoicePrice", newPriceFoCar);
  }
});

//checking a payment method - sprawdzanie czy wybrano formę płatnośi
$buy.addEventListener("click", () => {
  let regNAme = new RegExp(
    "^[A-Z-zóąśłżźćńÓĄŚŁŻŹĆŃ][a-z-zóąśłżźćńÓĄŚŁŻŹĆŃ]{2,20} [A-Z-zóąśłżźćńÓĄŚŁŻŹĆŃ][a-z-zóąśłżźćńÓĄŚŁŻŹĆŃ]{1,25}$"
  );

  if (!regNAme.test($nameAndForname.value)) {
    $warning.innerText = "Uwaga! Błędne dane";
  } else {
    if ($cash.checked == false && $leasing.checked == false) {
      $warning.innerText = "Uwaga! uzupełnij dane";
    } else {
      console.log("wszystko gra");
      window.location.href = "loadingScreen.html";
    }
  }

  if ($cash.checked) {
    localStorage.setItem("shoopyCarPayment", "Gotówka");
  } else if ($leasing.checked) {
    localStorage.setItem("shoopyCarPayment", "Leasing");
  }
});

$back.addEventListener("click", () => {
  window.location.href = "index.html";
});

settingData();
