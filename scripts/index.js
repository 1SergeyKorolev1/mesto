let profileEditButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let popupClose = document.querySelector(".popup__close");
let formElement = document.querySelector(".popup__form");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");
let popupNameInput = document.querySelector(".popup__nameinput");
let popupJobInput = document.querySelector(".popup__jobinput");
const profileAddButton = document.querySelector(".profile__add-button");
const popupTitle = document.querySelector(".popup__title");
const popupSubbmit = document.querySelector(".popup__submit");
const elements = document.querySelector(".elements");
const elementCard = document.querySelector(".elementTemplate").content;
const popupImaje = document.querySelector(".popupImaje");
const popupImajeClose = document.querySelector(".popupImaje__close");
const popupImajeIncreased = document.querySelector(".popupImaje__increased");
const popupImajeCaption = document.querySelector(".popupImaje__caption");

const elementMassif = [
  {
    name: "Китай - SMP скейт парк",
    link: "https://spotmap.ru/uploads/image/image/4078/Convic_Shanghai.jpg",
  },
  {
    name: "Испания - МАКБА",
    link: "https://barcelonatm.ru/wp-content/uploads/2017/02/Muzej-sovremennogo-iskusstva-v-Barselone.jpg",
  },
  {
    name: "Калифорния, Эль Торо - ступеньки. Лейк-Форест — город в округе Ориндж, Калифорния",
    link: "https://spotmap.ru/uploads/image/image/18675/maxresdefault__1_.jpg",
  },
  {
    name: "Одесса - парк Шевченко.",
    link: "https://live.staticflickr.com/7801/39952324473_e4a2b5e351_b.jpg",
  },
  {
    name: "Великобритания - Англия - Stoke Plaza, Stoke-On-Trent",
    link: "https://www.webbaviation.co.uk/aerial/_data/i/galleries/Staffordshire/Stoke-on-Trent/skatepark_db55345-me.jpg",
  },
  {
    name: "Япония. Amazing Square Skate Park - Этот парк работает круглосуточно",
    link: "https://samokatplus.ru/upload/medialibrary/079/0792ac9f40e20a201277d282fff0e4cc.jpg",
  },
];

elementMassif.forEach(function (element) {
  const cardsList = elementCard.cloneNode(true);

  cardsList.querySelector(".element__img").src = element.link;
  cardsList.querySelector(".element__title").textContent = element.name;
  cardsList
    .querySelector(".element__like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__like_active");
    });
  cardsList
    .querySelector(".element__basket")
    .addEventListener("click", function (evt) {
      const basketKlick = evt.target;
      const basketDelete = basketKlick.closest(".element");
      basketDelete.remove();
    });
  cardsList
    .querySelector(".element__img")
    .addEventListener("click", function (evt) {
      popupImaje.classList.add("popup_opened");
      popupImajeIncreased.src = element.link;
      popupImajeCaption.textContent = element.name;
    });
  elements.append(cardsList);
});

function formSubmitHandler(evt) {
  evt.preventDefault();
  if (popupTitle.textContent === "Редактировать профиль") {
    profileTitle.textContent = popupNameInput.value;
    profileSubtitle.textContent = popupJobInput.value;
    popup.classList.remove("popup_opened");
  } else {
    const cardAdd = elementCard.cloneNode(true);
    cardAdd.querySelector(".element__img").src = popupJobInput.value;
    cardAdd.querySelector(".element__title").textContent = popupNameInput.value;
    cardAdd
      .querySelector(".element__like")
      .addEventListener("click", function (evt) {
        evt.target.classList.toggle("element__like_active");
      });
    cardAdd
      .querySelector(".element__basket")
      .addEventListener("click", function (evt) {
        const basketKlick = evt.target;
        const basketDelete = basketKlick.closest(".element");
        basketDelete.remove();
      });
    cardAdd
      .querySelector(".element__img")
      .addEventListener("click", function (evt) {
        popupImaje.classList.add("popup_opened");
        popupImajeIncreased.src = popupJobInput.value;
        popupImajeCaption.textContent = popupNameInput.value;
      });
    elements.append(cardAdd);
    popup.classList.remove("popup_opened");
  }
}

function open() {
  popupTitle.textContent = "Редактировать профиль";
  popupNameInput.value = profileTitle.textContent;
  popupJobInput.value = profileSubtitle.textContent;
  popupSubbmit.textContent = "Сохранить";
  popup.classList.add("popup_opened");
}
function openAdd() {
  popupTitle.textContent = "Новое место";
  popupNameInput.value = "";
  popupJobInput.value = "";
  popupSubbmit.textContent = "Создать";
  popup.classList.add("popup_opened");
}

function exit() {
  popup.classList.remove("popup_opened");
  popupImaje.classList.remove("popup_opened");
}

profileEditButton.addEventListener("click", open);
profileAddButton.addEventListener("click", openAdd);
popupClose.addEventListener("click", exit);
popupImajeClose.addEventListener("click", exit);
formElement.addEventListener("submit", formSubmitHandler);
