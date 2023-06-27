const bestsellerHitIcon = document.querySelector(".bestseller-hit-icon");
const comparisonIcon = document.querySelector(".comparison-icon");
const topic = document.querySelector(".topic");

function displayAdaptive() {
  if (window.innerWidth <= 550) {
    bestsellerHitIcon.classList.add("little");
    bestsellerHitIcon.innerText = "ХИТ";
    comparisonIcon.src = "./img/icons/Group.svg";
    topic.classList.add("adaptive");
    topic.innerText = "Популярные категории";
  } else {
    comparisonIcon.src.includes("Group")
      ? (comparisonIcon.src = "./img/icons/comparison_icon.svg")
      : "";

    bestsellerHitIcon.innerText === "ХИТ"
      ? (bestsellerHitIcon.innerText = "hit")
      : "";
    bestsellerHitIcon.classList.remove("little");

    topic.innerText === "Популярные категории"
      ? (topic.innerText = "Католог товаров")
      : "";
    topic.classList.remove("adaptive");
  }
}

//Прототип для метода includes, так как в IE 11+ не поддерживается

String.prototype.includes = function (match) {
  return this.indexOf(match) !== -1;
};

window.addEventListener("DOMContentLoaded", displayAdaptive);
window.addEventListener("resize", displayAdaptive);
