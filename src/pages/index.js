import "./index.css";
import { elementsCardsMassif } from "../utils/cards.js";
import {
  formAddCards,
  formProfile,
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

import UserInfo from "../components/UserInfo.js";
const userInfo = new UserInfo(".profile__title", ".profile__subtitle");

import PopupWithImage from "../components/PopupWithImage.js";
const popupWithImage = new PopupWithImage(".popup_popup_image");
popupWithImage.setEventListeners();

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
    newNameAndJobValues.close();
    userInfo.setUserInfo(item.firstname, item.lastname);
  },
});
newNameAndJobValues.setEventListeners();

// Валидаия форм
const formValidatorProfile = new FormValidator(setings, formProfile);
formValidatorProfile.enableValidation();
const formValidatorMesto = new FormValidator(setings, formAddCards);
formValidatorMesto.enableValidation();

// Рендер карточек
const cardsList = new Section(
  {
    items: elementsCardsMassif,
    renderer: renderCard,
  },
  ".elements"
);
cardsList.renderItems();

function renderCard(nameCard, linkNameCard) {
  cardsList.setItem(createCard(nameCard, linkNameCard));
}

function createCard(nameCard, linkNameCard) {
  const card = new Card(
    nameCard,
    linkNameCard,
    ".elementTemplate",
    handleCardClick
  );
  const finishCard = card.createNameCard();
  return finishCard;
}

function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}

// функция добавляющая попапу профиля инфу при окрытии + само открытие  + удаляет ошибки
function openPopupProfile() {
  formValidatorProfile.deleteInputErrors();
  formValidatorProfile.deactivateButton();
  const userData = userInfo.getUserInfo();
  popupNameInput.value = userData.name;
  popupJobInput.value = userData.jobName;
  newNameAndJobValues.open();
}

// функция резета попапа добавления карточки при окрытии + само открытие + удаляет ошибки + удаляет стиль ошибки + деактивирует сабмит
function openAdd() {
  formValidatorMesto.deleteInputErrors();
  formValidatorMesto.deactivateButton();
  newCardPopup.open();
}

// листенеры открытия попапов
profileEditButton.addEventListener("click", openPopupProfile);
profileAddButton.addEventListener("click", openAdd);
