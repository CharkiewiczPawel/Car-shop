$endButton=document.getElementById("endButton")
$carBuyIcon=document.getElementById("carBuyIcon")
$brandBuyCar=document.getElementById("brandBuyCar")
$carPrice=document.getElementById("carPrice")
$payment=document.getElementById("payment")



//date from localStorage - pobranie danych z localStorage
const carNameLocalStorage=localStorage.getItem("shoopyCaryChoiceName");
const carPriceLocalStorage=localStorage.getItem("shoopyCaryChoicePrice");
const carPictureLocalStorage=localStorage.getItem("shoopyCaryChoiceUrl");
const carPaymentMethod=localStorage.getItem("shoopyCarPayment");




$carBuyIcon.src=carPictureLocalStorage;
$brandBuyCar.innerText=carNameLocalStorage;
$carPrice.innerText=`Cena: ${carPriceLocalStorage}zł`;
$payment.innerText=`Metoda płatności: ${carPaymentMethod}`



//delete date from localStorage - usunięcie elementów z local storage i zamknięcie strony
$endButton.addEventListener("click",()=>{
    localStorage.removeItem("shoopyCaryChoiceName");
    localStorage.removeItem("shoopyCaryChoicePrice");
    localStorage.removeItem("shoopyCaryChoiceUrl");
    localStorage.removeItem("shoopyCarPayment");
    window.location.href = "index.html";    
})