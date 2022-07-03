const profileEditButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");
const popupForm = document.querySelector(".popup__form");
const proficonstitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const popupNameInput = document.querySelector(".popup__nameinput");
const popupJobInput = document.querySelector(".popup__jobinput");
const profileAddButton = document.querySelector(".profile__add-button");
const popupTitle = document.querySelector(".popup__title");
const elements = document.querySelector(".elements");
const elementCard = document.querySelector(".elementTemplate").content;
const popupPopupImage = document.querySelector(".popup_popup_imaje");
const popupCloseImage = document.querySelector(".popup__close_image");
const popupCloseMesto = document.querySelector(".popup__close_mesto");
const popupIncreased = document.querySelector(".popup__increased");
const popupCaption = document.querySelector(".popup__caption");
const popupPopupMesto = document.querySelector(".popup_popup_mesto");
const popupNameinputMesto = document.querySelector(".popup__nameinput_mesto");
const popupJobinputMesto = document.querySelector(".popup__jobinput_mesto");
const popupFormMesto = document.querySelector(".popup__form_mesto");

elementsCardsMassif.forEach(function (element) {
  const cardsList = elementCard.cloneNode(true);

  cardsList.querySelector(".element__img").src = element.link;
  cardsList.querySelector(".element__title").textContent = element.name;
  createPartCards(cardsList);
  cardsList
    .querySelector(".element__img")
    .addEventListener("click", function (evt) {
      addPopupOpened(popupPopupImage);
      popupIncreased.src = element.link;
      popupCaption.textContent = element.name;
    });
  elements.prepend(cardsList);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  proficonstitle.textContent = popupNameInput.value;
  profileSubtitle.textContent = popupJobInput.value;
  removePopupOpened(popup);
}

function handleMestoFormSubmit(evt) {
  if (popupJobinputMesto.value == "" || popupNameinputMesto.value === "") {
    alert("не оставляйте поля пустыми!");
  } else {
    evt.preventDefault();
    const cardAdd = elementCard.cloneNode(true);
    cardAdd.querySelector(".element__img").src = popupJobinputMesto.value;
    cardAdd.querySelector(".element__title").textContent =
      popupNameinputMesto.value;
    createPartCards(cardAdd);
    cardAdd
      .querySelector(".element__img")
      .addEventListener("click", function (evt) {
        addPopupOpened(popupPopupImage);
        popupIncreased.src = popupJobinputMesto.value;
        popupCaption.textContent = popupNameinputMesto.value;
      });
    elements.prepend(cardAdd);
    removePopupOpened(popupPopupMesto);
  }
}

function createPartCards(partCards) {
  partCards
    .querySelector(".element__like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__like_active");
    });
  partCards
    .querySelector(".element__basket")
    .addEventListener("click", function (evt) {
      const basketKlick = evt.target;
      const basketDeconste = basketKlick.closest(".element");
      basketDeconste.remove();
    });
}

function removePopupOpened(removePopup) {
  removePopup.classList.remove("popup_opened");
}
function addPopupOpened(addPopup) {
  addPopup.classList.add("popup_opened");
}
function open() {
  popupNameInput.value = proficonstitle.textContent;
  popupJobInput.value = profileSubtitle.textContent;
  addPopupOpened(popup);
}
function openAdd() {
  popupNameinputMesto.value = "";
  popupJobinputMesto.value = "";
  addPopupOpened(popupPopupMesto);
}

function exit() {
  removePopupOpened(popup);
  removePopupOpened(popupPopupImage);
  removePopupOpened(popupPopupMesto);
}

profileEditButton.addEventListener("click", open);
profileAddButton.addEventListener("click", openAdd);
popupClose.addEventListener("click", exit);
popupCloseImage.addEventListener("click", exit);
popupCloseMesto.addEventListener("click", exit);
popupFormMesto.addEventListener("submit", handleMestoFormSubmit);
popupForm.addEventListener("submit", handleProfileFormSubmit);
