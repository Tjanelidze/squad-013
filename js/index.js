// function for navigation open rotate
function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

// toggle switch
const togglein = document.querySelector(".toggle-inner");
const indic = document.querySelector(".indicator");
const toggle = document.querySelector(".toggle-state");
const month = document.getElementById("month");
const year = document.getElementById("year");
const permonth = document.querySelectorAll(".permonth");
const permonthpro = document.getElementById("permonthpro");
// prices
const priceamount = document.getElementById("price");
const pricepro = document.getElementById("pricepro");
const pricebus = document.getElementById("pricebus");
console.log(permonth);
toggle.addEventListener("change", (event) => {
  year.classList.remove("changecolor");
  togglein.classList.remove("active");
  indic.classList.remove("visible");
  if (toggle.checked) {
    priceamount.innerHTML = "&#36;190.00";
    pricepro.innerHTML = "&#36;390.00";
    pricebus.innerHTML = "&#36;990.00";

    permonthpro.innerHTML = "per year";
    year.classList.add("changecolor");
    month.classList.add("opacitycolor");
    togglein.classList.add("active");
    indic.classList.add("visible");
    permonth.forEach((element) => {
      element.innerHTML = "per year";
    });
  } else {
    priceamount.innerHTML = " &#36;19.00";
    pricepro.innerHTML = " &#36; 39.00";
    pricebus.innerHTML = "&#36; 99.00";

    permonthpro.innerHTML = "Per month";
    month.classList.remove("opacitycolor");
    permonth.forEach((element) => {
      element.innerHTML = "per month";
    });
  }
});
