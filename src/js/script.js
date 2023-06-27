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

//Функция для нахождения окончания, в данном случае для отзывов и товаров

// const getWordRus = (num, wordArr) => {
//   if (num.endsWith("1") && !num.endsWith("11")) {
//     return `${num} ${wordArr[0]}`;
//   }
//   if (
//     (num.endsWith("2") || num.endsWith("3") || num.endsWith("4")) &&
//     !(num.endsWith("12") || num.endsWith("13") || num.endsWith("14"))
//   ) {
//     return `${num} ${wordArr[1]}`;
//   } else {
//     return `${num} ${wordArr[2]}`;
//   }
// };

// console.log(getWordRus("1134", ["товар", "товара", "товаров"]));
// console.log(getWordRus("0", ["отзыв", "отзыва", "отзывов"]));
