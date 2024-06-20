"use strict";
export function openWasap() {
  window.open(
    " https://wa.me/5491132850921?text=Hola!%20Quisiera%20informaci%C3%B3n%20sobre%20los%20cursos%20de%20ingles.",
    "_blank"
  );
}
//*CAMBRIDGE Prices
let cambCoursePrice = "$" + 12500;
let cambCoursePriceFull = "$" + 51000;
let cambCoursePriceUSD = 50 + " USD";
let cambCoursePriceUSDFull = 130 + " USD";

//*CONVERSATION Prices
let conversationPrice = "$" + 6000;
let conversationPriceFull = "$" + 23000;
let conversationPriceUSD = 1000 + " USD";
let conversationPriceUSDFull = 100 + " USD";

const button = document.getElementById("individualsWasapBtn");
if (button) {
  button.addEventListener("click", () => openWasap());
}
