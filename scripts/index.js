const profileEditButton = document.querySelector(".profile__edit-button");
const popupProfileEdit = document.querySelector(".popup_popup_profile");
const popupClose = document.querySelector(".popup__close");
const popupForm = document.querySelector(".popup__form");
const proficonstitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const popupNameInput = document.querySelector(".popup__nameinput");
const popupJobInput = document.querySelector(".popup__jobinput");
const profileAddButton = document.querySelector(".profile__add-button");
const popupTitle = document.querySelector(".popup__title");
const elementsContainer = document.querySelector(".elements");
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
const popupOpened = document.querySelector(".popup__opened");

elementsCardsMassif.forEach(function (element) {
  renderCard(element.name, element.link);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  proficonstitle.textContent = popupNameInput.value;
  profileSubtitle.textContent = popupJobInput.value;
  removePopupOpened(popupProfileEdit);
}

function handleMestoFormSubmit(evt) {
  evt.preventDefault();
  renderCard(popupNameinputMesto.value, popupJobinputMesto.value);
  removePopupOpened(popupPopupMesto);
}

function renderCard(nameCard, linkNameCard) {
  elementsContainer.prepend(addNameCard(nameCard, linkNameCard));
}

function addNameCard(nameCard, linkNameCard) {
  const cardsList = elementCard.cloneNode(true);
  cardsList.querySelector(".element__img").src = linkNameCard;
  cardsList.querySelector(".element__img").alt = nameCard;
  cardsList.querySelector(".element__title").textContent = nameCard;
  addEventListenersCard(cardsList);
  cardsList
    .querySelector(".element__img")
    .addEventListener("click", function (evt) {
      addPopupOpened(popupPopupImage);
      popupIncreased.src = linkNameCard;
      popupIncreased.alt = nameCard;
      popupCaption.textContent = nameCard;
    });
  return cardsList;
}

function addEventListenersCard(partCards) {
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
  closeViaOverlayOrEscape(addPopup);
}
function openPopupProfile() {
  deliteError(popupNameInput);
  popupNameInput.value = proficonstitle.textContent;
  popupJobInput.value = profileSubtitle.textContent;
  addPopupOpened(popupProfileEdit);
}
function openAdd() {
  deliteError(popupNameinputMesto);
  popupNameinputMesto.value = "";
  popupJobinputMesto.value = "";
  addPopupOpened(popupPopupMesto);
}

function deliteError(error) {
  const errorElement = error.parentNode.querySelectorAll(".popup__error");
  errorElement[0].textContent = "";
  errorElement[1].textContent = "";
}

function exitPopup() {
  removePopupOpened(popupProfileEdit);
}
function exitPopupImaje() {
  removePopupOpened(popupPopupImage);
}
function exitPopupMesto() {
  removePopupOpened(popupPopupMesto);
}
profileEditButton.addEventListener("click", openPopupProfile);
profileAddButton.addEventListener("click", openAdd);

popupClose.addEventListener("click", exitPopup);
popupCloseImage.addEventListener("click", exitPopupImaje);
popupCloseMesto.addEventListener("click", exitPopupMesto);

popupFormMesto.addEventListener("submit", handleMestoFormSubmit);
popupForm.addEventListener("submit", handleProfileFormSubmit);

function closeViaOverlayOrEscape(close) {
  close.addEventListener("click", function (evt) {
    if (evt.target === evt.currentTarget) {
      removePopupOpened(close);
    }
  });
  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      removePopupOpened(close);
    }
  });
}
