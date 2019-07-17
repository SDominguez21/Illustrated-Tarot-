const fiveCard = document.querySelectorAll(".singlecard-container");
const cardImg = document.querySelectorAll(".singlecard-container img");
const cardInfo = document.querySelectorAll(".cardinfo");
const cardsToReveal = document.querySelectorAll(".cardtoreveal");

fiveCard.forEach((firstrow, index) => {
  firstrow.addEventListener("click", () => {
    if (!firstrow.classList.contains("cardtoreveal")) {
      firstrow.classList.toggle("back");
      cardImg[index].classList.toggle("hidden");
      cardInfo[index].classList.toggle("hidden");
    }
  });
});

console.log(cardsToReveal);

cardsToReveal.forEach((card, index) => {
  card.querySelector("img").classList.add("hidden");
  if (index === 1) {
    card.classList.remove("cardtoreveal");
    card.querySelector("img").classList.remove("hidden");
  }
  card.addEventListener("click", () => {
    if (card.classList.contains("cardtoreveal")) {
      card.classList.remove("cardtoreveal");
      card.querySelector("img").classList.remove("hidden");
    }
  });
});
