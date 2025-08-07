const flipCard = document.getElementById("flip-card");
const toRegister = document.getElementById("toRegister");
const toLogin = document.getElementById("toLogin");

toRegister.addEventListener("click", () => {
  flipCard.classList.add("flipped");
});

toLogin.addEventListener("click", () => {
  flipCard.classList.remove("flipped");
});
