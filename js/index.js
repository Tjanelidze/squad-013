// function for navigation open rotate
function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

// toggle switch

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
  if (toggle.checked) {
    priceamount.innerHTML = "$190.00";
    pricepro.innerHTML = "$390.00";
    pricebus.innerHTML = "$990.00";
    year.classList.add("changecolor");
    console.log("Checked");
  } else {
    priceamount.innerHTML = "$19.00";
    pricepro.innerHTML = "$39.00";
    pricebus.innerHTML = "$99.00";
    month.classList.add("changecolor");
    console.log("Not checked");
  }
});
