const bestsellerHitIcon = document.querySelector(".bestseller-hit-icon");
const comparasionIcon = document.querySelector(".comparasion-icon");

const displayAdaptive = () => {
  if (window.innerWidth <= 550) {
    bestsellerHitIcon.classList.add("little");
    bestsellerHitIcon.innerText = "ХИТ";
    comparasionIcon.src = "./img/icons/Group.svg";
  } else {
    comparasionIcon.src.includes("Group")
      ? (comparasionIcon.src = "./img/icons/comparison_icon.svg")
      : "";

    bestsellerHitIcon.innerText === "ХИТ"
      ? (bestsellerHitIcon.innerText = "hit")
      : "";
    bestsellerHitIcon.classList.remove("little");
  }
};

window.addEventListener("DOMContentLoaded", displayAdaptive);
window.addEventListener("resize", displayAdaptive);
