

const fourCard = document.querySelectorAll(".singlecard-container");
const cardImg = document.querySelectorAll(".singlecard-container img");
const cardInfo = document.querySelectorAll(".cardinfo");
const cardsToReveal = document.querySelectorAll(".cardtoreveal");

fourCard.forEach((singleCard, index) => {
  singleCard.addEventListener("click", () => {
    if (!singleCard.classList.contains("cardtoreveal")) {
      singleCard.classList.toggle("back");
      cardImg[index].classList.toggle("hidden");
      cardInfo[index].classList.toggle("hidden");
    }
  });
});

cardsToReveal.forEach(card => {
  card.querySelector("img").classList.add("hidden");
  card.addEventListener("click", () => {
    if (card.classList.contains("cardtoreveal")) {
      card.classList.remove("cardtoreveal");
      card.querySelector("img").classList.remove("hidden");
    }
  });
});
