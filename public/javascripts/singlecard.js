const singleCard = document.querySelector(".singlecard-container");
const cardImg = document.querySelector(".singlecard-container img");
const cardInfo = document.querySelector(".cardinfo");

singleCard.addEventListener("click", () => {
  singleCard.classList.toggle("back");
  cardImg.classList.toggle("hidden");
  cardInfo.classList.toggle("hidden");
});
