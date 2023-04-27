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
// prices
const priceamount = document.getElementById("price");
const pricepro = document.getElementById("pricepro");
const pricebus = document.getElementById("pricebus");

toggle.addEventListener("change", (event) => {
  year.classList.remove("changecolor");
  month.classList.remove("changecolor");
  togglein.classList.remove("active");
  indic.classList.remove("visible");
  if (toggle.checked) {
    priceamount.innerHTML = "$190.00";
    pricepro.innerHTML = "$390.00";
    pricebus.innerHTML = "$990.00";
    year.classList.add("changecolor");
    togglein.classList.add("active");
    indic.classList.add("visible");
    console.log("Checked");
  } else {
    priceamount.innerHTML = "$19.00";
    pricepro.innerHTML = "$39.00";
    pricebus.innerHTML = "$99.00";
    month.classList.add("changecolor");
    console.log("Not checked");
  }
});
