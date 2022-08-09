import { elementsCardsMassif } from "./cards.js";
import {
  profileAddButton,
  popupProfileEdit,
  popupCloseProfile,
  popupFormProfile,
  profileTitle,
  profileSubtitle,
  popupNameInput,
  popupJobInput,
  profileEditButton,
  popupTitle,
  elementsContainer,
  elementCard,
  popupPopupImage,
  popupCloseImage,
  popupCloseMesto,
  popupIncreased,
  popupCaption,
  popupPopupMesto,
  popupNameinputMesto,
  popupJobinputMesto,
  popupFormMesto,
  setings,
} from "./const.js";
import Card from "./card.js";
import FormValidator from "./FormValidator.js";

elementsCardsMassif.forEach((element) => {
  renderCard(element.name, element.link);
});

// Рендер карточки
function renderCard(nameCard, linkNameCard) {
  const card = new Card(
    nameCard,
    linkNameCard,
    ".elementTemplate",
    openPopup,
    popupPopupImage,
    popupIncreased,
    popupCaption
  );
  const finishCard = card.createNameCard();
  elementsContainer.prepend(finishCard);
}

// сабмит попапа профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupNameInput.value;
  profileSubtitle.textContent = popupJobInput.value;
  closePopup(popupProfileEdit);
}

// сабмит попапа добавления карточки
function handleMestoFormSubmit(evt) {
  evt.preventDefault();
  renderCard(popupNameinputMesto.value, popupJobinputMesto.value);
  closePopup(popupPopupMesto);
}

// деактивация сабмита после добавления карточки
function deactivateButtonMesto() {
  const submitActiv = popupFormMesto.querySelector(".popup__submit");
  submitActiv.setAttribute("disabled", true);
  submitActiv.classList.add("popup__submit_invalid");
}

// функия закрытия попапов
function closePopup(removePopup) {
  removePopup.classList.remove("popup_opened");
  removePopupCloseListeners(removePopup);
}

// функцция открытия попапов
function openPopup(addPopup) {
  addPopup.classList.add("popup_opened");
  addPopupCloseListeners(addPopup);
}

// функция добавляющая попапу профиля инфу при окрытии + само открытие  + удаляет ошибки
function openPopupProfile() {
  const form = document.forms["form-edit-profile"];
  deleteInputErrors(form);
  popupNameInput.value = profileTitle.textContent;
  popupJobInput.value = profileSubtitle.textContent;
  openPopup(popupProfileEdit);
}

// Валидаия форм
const formValidatorProfile = new FormValidator(setings, ".popup__form_profile");
formValidatorProfile.enableValidation();
const formValidatorMesto = new FormValidator(setings, ".popup__form_mesto");
formValidatorMesto.enableValidation();

// функция резета попапа добавления карточки при окрытии + само открытие + удаляет ошибки + удаляет стиль ошибки + деактивирует сабмит
function openAdd() {
  const form = document.forms["form-add-card"];
  deleteInputErrors(form);
  form.reset();
  deactivateButtonMesto();
  openPopup(popupPopupMesto);
}

// функция удаляет ошибки + удаляет стиль ошибки
function deleteInputErrors(formElement) {
  const errorElements = formElement.querySelectorAll(".popup__error");
  const input = formElement.querySelectorAll("input");
  errorElements.forEach(function (error) {
    error.textContent = "";
  });
  input.forEach(function (input) {
    input.classList.remove("view-input_invalidate");
  });
}

// листенеры открытия попапов
profileEditButton.addEventListener("click", openPopupProfile);
profileAddButton.addEventListener("click", openAdd);

// листенеры сабмитов попапов
popupFormMesto.addEventListener("submit", handleMestoFormSubmit);
popupFormProfile.addEventListener("submit", handleProfileFormSubmit);

// функция с листенерами закрытия на Esc по нажатию на клавишу и при клике вне попапа
function addPopupCloseListeners(popup) {
  document.addEventListener("keydown", closePopupOnEsc);
  popup.addEventListener("click", addCloseClickEvent);
}

// функия закрытия попапа при клике вне
function addCloseClickEvent(evt) {
  const popup = evt.currentTarget;
  if (
    evt.target === popup ||
    evt.target === popup.querySelector(".popup__close")
  ) {
    closePopup(popup);
  }
}

// функия закрытия попапа при нажатии на Esc
function closePopupOnEsc(evt) {
  const keyEvent = evt.key;
  if (keyEvent === "Escape") {
    const popup = document.querySelector(".popup_opened");
    closePopup(popup);
  }
}

// функция удаления слушатилей
function removePopupCloseListeners(popup) {
  popup.removeEventListener("click", addCloseClickEvent);
  document.removeEventListener("keydown", closePopupOnEsc);
}
