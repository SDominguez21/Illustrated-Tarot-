const fiveCard = document.querySelectorAll(".singlecard-container");
const cardImg = document.querySelectorAll(".singlecard-container img");
const cardInfo = document.querySelectorAll(".cardinfo");
const cardsToReveal = document.querySelectorAll(".cardtoreveal");
const cardSpan = document.querySelectorAll(".cardtoreveal span");
console.log(cardSpan);
fiveCard.forEach((firstrow, index) => {
  firstrow.addEventListener("click", () => {
    if (!firstrow.classList.contains("cardtoreveal")) {
      firstrow.classList.toggle("back");
      cardImg[index].classList.toggle("hidden");
      cardInfo[index].classList.toggle("hidden");
    }
  });
});

// console.log(cardsToReveal);

cardsToReveal.forEach((card, index) => {
  card.querySelector("img").classList.add("hidden");
  if (index === 0) {
    cardSpan[index].innerText = "5";
  } else if (index === 1) {
    card.classList.remove("cardtoreveal");
    card.querySelector("img").classList.remove("hidden");
  } else if (index === 2) {
    cardSpan[index].innerText = "3";
  } else if (index === 3) {
    cardSpan[index].innerText = "2";
  } else if (index === 4) {
    cardSpan[index].innerText = "4";
  }
  card.addEventListener("click", () => {
    if (card.classList.contains("cardtoreveal")) {
      card.classList.remove("cardtoreveal");
      card.querySelector("img").classList.remove("hidden");
    }
  });
});
