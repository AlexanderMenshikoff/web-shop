import {
  advantagesDataArray,
  productsDataArray,
  bestsellersDataArray,
} from "./data.js";

let bestsellerHitIcon = "";
let comparisonIcon = "";

const topic = document.querySelector(".topic");
const companyAdvantagesContainer = document.querySelector(
  ".company-advantages__container"
);
const productsContainer = document.querySelector(".products-container");
const bestsellersContainer = document.querySelector(".bestsellers-container");

function displayAdaptive() {
  if (window.innerWidth <= 550) {
    bestsellerHitIcon.classList.add("adaptive");
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
    bestsellerHitIcon.classList.remove("adaptive");

    topic.innerText === "Популярные категории"
      ? (topic.innerText = "Каталог товаров")
      : "";
    topic.classList.remove("adaptive");
  }
}

//Функция для нахождения окончания, в данном случае для отзывов и товаров

const getWordRus = (num, wordArr) => {
  if (num.endsWith("1") && !num.endsWith("11")) {
    return `${num} ${wordArr[0]}`;
  }
  if (
    (num.endsWith("2") || num.endsWith("3") || num.endsWith("4")) &&
    !(num.endsWith("12") || num.endsWith("13") || num.endsWith("14"))
  ) {
    return `${num} ${wordArr[1]}`;
  } else {
    return `${num} ${wordArr[2]}`;
  }
};

//Прототип для метода includes, так как в IE 11+ не поддерживается

String.prototype.includes = function (match) {
  return this.indexOf(match) !== -1;
};

function displayAdvantage() {
  advantagesDataArray.map((el) => {
    companyAdvantagesContainer.innerHTML += `
    <div class="company-advantage__container">
    <img
      class="company-advantage__img"
      src=${el.img}
      alt=""
    />
    <div class="company-advantage__text-container">
      <div class="company-advantage__main-text">${el.mainText}</div>
      <div class="company-advantage__sub-text">
        ${el.subText}
      </div>
    </div>
  </div>
    `;
  });
}

function displayProducts() {
  productsDataArray.map((el) => {
    productsContainer.insertAdjacentHTML(
      "beforeend",
      `
    <div class="product-container">
            <div class="left-product-adaptive-container">
              <img
                class="product-img"
                src=${el.img}
                alt=""
              />
              <div class="product-title">${el.productTitle}</div>
            </div>
            <div class="product-count">${getWordRus(
              el.productCountNumber.toString(),
              ["товар", "товара", "товаров"]
            )}</div>
            <div class="right-product-adaptive-container">
              <div class="product-count-number">${el.productCountNumber}</div>
              <img class="product-arrow" src=${el.productArrowImg} alt="" />
            </div>
          </div>
          ${
            el.id === productsDataArray.length
              ? ""
              : '<div class="demarcation-line"></div>'
          }
          `
    );
  });
}

function displayBestsellers() {
  bestsellersDataArray.map((el) => {
    bestsellersContainer.innerHTML += `
    <div class="bestseller-container">
    <img
      class="bestseller-search-icon"
      src=${el.bestsellerSearchIcon}
      alt=""
    />
    <div class="bestseller-hit-icon">${el.bestsellerHitIconText}</div>
    <img
      class="bestseller-youtube-icon"
      src=${el.bestsellerYoutubeIcon}
      alt=""
    />
    <div class="bestseller-img">
      <img src=${el.bestsellerImg} alt="" />
      <div class="image-expansion">
        <img
          class="expansion-icon"
          src=${el.bestsellerExpansionIcon}
          alt=""
        />
      </div>
    </div>
    <div class="bestseller-title">
      ${el.bestsellerTitle}
    </div>
    <div class="bestseller-rating-container">
      <img
        class="bestseller-stars-rating"
        src=${el.bestsellerStarsRatingImg}
        alt=""
      />
      <div class="bestseller-reviews">${getWordRus(
        el.bestsellerReviews.toString(),
        ["отзыв", "отзыва", "отзывов"]
      )}</div>
    </div>
    <div class="bestseller-price-container">
      <div class="bestseller-actual-price">${el.bestsellerActualPrice} ₽</div>
      <div class="bestseller-old-price">${el.bestsellerOldPrice} ${
      el.bestsellerOldPrice ? "₽" : ""
    }</div>
    </div>
    <div class="bestseller-is-available">
      <img
        class="product-available-icon"
        src=${el.bestsellerProductAvailableIcon}
        alt=""
      />
      ${el.bestsellerIsAvailableText}
    </div>
    <div class="bestseller-bottom-container">
      <button class="bestseller-add-to-cart">${
        el.bestsellerAddToCartBtn
      }</button>
      <div class="bestseller-icons-container">
        <img
          class="comparison-icon"
          src=${el.bestsellerComparisonIcon}
          alt=""
        />
        <img
          class="favorite-icon"
          src=${el.bestsellerFavoriteIcon}
          alt=""
        />
      </div>
    </div>
    <div class="demarcation-line"></div>
    <div class="product-one-click-buy">${el.bestsellerOneClickBuy}</div>
  </div>
    `;
    bestsellerHitIcon = document.querySelector(".bestseller-hit-icon");
    comparisonIcon = document.querySelector(".comparison-icon");
  });
}

window.addEventListener("DOMContentLoaded", displayAdaptive);
window.addEventListener("resize", displayAdaptive);
displayAdvantage();
displayProducts();
displayBestsellers();
