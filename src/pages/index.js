import "./index.css";
import { elementsCardsMassif } from "../utils/cards.js";
import {
  profileAddButton,
  popupNameInput,
  popupJobInput,
  profileEditButton,
  popupFormMesto,
  setings,
} from "../utils/const.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";

import UserInfo from "../components/UserInfo.js";
const userInfo = new UserInfo(".profile__title", ".profile__subtitle");

import PopupWithImage from "../components/PopupWithImage.js";
const popupWithImage = new PopupWithImage(".popup_popup_image");

import PopupWithForm from "../components/PopupWithForm.js";
const newCardPopup = new PopupWithForm(".popup_popup_mesto", {
  handleFormSubmit: (item) => {
    renderCard(item.firstname, item.lastname);
    newCardPopup.close();
  },
});
newCardPopup.setEventListeners();

const newNameAndJobValues = new PopupWithForm(".popup_popup_profile", {
  handleFormSubmit: (item) => {
    popupProfile.close();
    userInfo.setUserInfo(item.firstname, item.lastname);
  },
});
newNameAndJobValues.setEventListeners();

const popup = new Popup(".popup_popup_mesto");
const popupProfile = new Popup(".popup_popup_profile");

///////////////////// Рендер карточек ///////////////////////////////////////
const cardsList = new Section(
  {
    items: elementsCardsMassif,
    renderer: renderCard,
  },
  ".elements"
);
cardsList.renderItems();

function renderCard(nameCard, linkNameCard) {
  const card = new Card(
    nameCard,
    linkNameCard,
    ".elementTemplate",
    handleCardClick
  );
  const finishCard = card.createNameCard();
  cardsList.setItem(finishCard);
}

function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}

// функция добавляющая попапу профиля инфу при окрытии + само открытие  + удаляет ошибки
function openPopupProfile() {
  const form = document.forms["form-edit-profile"];
  deleteInputErrors(form);
  const userData = userInfo.getUserInfo();
  popupNameInput.value = userData.name;
  popupJobInput.value = userData.jobName;
  popupProfile.open();
}

// функция резета попапа добавления карточки при окрытии + само открытие + удаляет ошибки + удаляет стиль ошибки + деактивирует сабмит
function openAdd() {
  const form = document.forms["form-add-card"];
  deleteInputErrors(form);
  deactivateButtonMesto();
  popup.open();
}

// листенеры открытия попапов
profileEditButton.addEventListener("click", openPopupProfile);
profileAddButton.addEventListener("click", openAdd);

// Валидаия форм
const formValidatorProfile = new FormValidator(setings, ".popup__form_profile");
formValidatorProfile.enableValidation();
const formValidatorMesto = new FormValidator(setings, ".popup__form_mesto");
formValidatorMesto.enableValidation();

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

// деактивация сабмита после добавления карточки
function deactivateButtonMesto() {
  const submitActiv = popupFormMesto.querySelector(".popup__submit");
  submitActiv.setAttribute("disabled", true);
  submitActiv.classList.add("popup__submit_invalid");
}
