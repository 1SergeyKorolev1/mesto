import Api from "../components/Api.js";
const api = new Api("https://mesto.nomoreparties.co/v1/cohort-49", {
  authorization: "3975d1d0-6b22-448d-8c6c-c2e5e9259bc3",
});

const promisProfile = api.initialDataProfile().then((data) => {
  avatar.setAvatarInfo(data.avatar);
  userInfo.setUserInfo(data.name, data.about);
});

const promisCards = api.initialCardsData().then((data) => {
  cardsList.renderItems(data);
});

const promis = [promisProfile, promisCards];

Promise.all(promis).catch((err) => {
  console.log(`Ошибка ${err} повторите запросс позже`);
});

import "./index.css";
import {
  popupJobinputAvatar,
  profileEditAvatar,
  formAddCards,
  formProfile,
  formAvatar,
  profileAddButton,
  popupNameInput,
  popupJobInput,
  profileEditButton,
  setings,
} from "../utils/const.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";

import Avatar from "../components/Avatar.js";
const avatar = new Avatar(".profile__avatar");

import UserInfo from "../components/UserInfo.js";
const userInfo = new UserInfo(".profile__title", ".profile__subtitle");

import PopupWithImage from "../components/PopupWithImage.js";
const popupWithImage = new PopupWithImage(".popup_popup_image");
popupWithImage.setEventListeners();

import PopupWithForm from "../components/PopupWithForm.js";

const newCardPopup = new PopupWithForm(".popup_popup_mesto", {
  handleFormSubmit: (item, idCard, card, popup) => {
    renderLoading(true, popup);
    api
      .sendCardData(item.firstname, item.lastname)
      .then((data) => {
        renderCard(data);
      })
      .catch((err) => {
        console.log(`Ошибка ${err} повторите запросс позже`);
      })
      .finally(() => {
        renderLoading(false, popup);
      });
    newCardPopup.close();
  },
});
newCardPopup.setEventListeners();

const newNameAndJobValues = new PopupWithForm(".popup_popup_profile", {
  handleFormSubmit: (item, idCard, card, popup) => {
    renderLoading(true, popup);
    newNameAndJobValues.close();
    api
      .nameAndJobValues(item.firstname, item.lastname)
      .then((data) => {
        userInfo.setUserInfo(data.name, data.about);
      })
      .catch((err) => {
        console.log(`Ошибка ${err} повторите запросс позже`);
      })
      .finally(() => {
        renderLoading(false, popup);
      });
  },
});
newNameAndJobValues.setEventListeners();

const newAvatar = new PopupWithForm(".popup_popup_avatar", {
  handleFormSubmit: (item, idCard, card, popup) => {
    renderLoading(true, popup);
    newAvatar.close();
    api
      .sendAvatarData(item.lastname)
      .then((data) => {
        avatar.setAvatarInfo(data.avatar);
      })
      .catch((err) => {
        console.log(`Ошибка ${err} повторите запросс позже`);
      })
      .finally(() => {
        renderLoading(false, popup);
      });
  },
});
newAvatar.setEventListeners();

const deleteCard = new PopupWithForm(".popup_popup_delete", {
  handleFormSubmit: (item, idCard, card, popup) => {
    renderLoading(true, popup);
    deleteCard.close();
    api
      .deleteCard(idCard)
      .then((data) => {
        //console.log("удаляю карточку");
        card.deliteCard();
      })
      .catch((err) => {
        console.log(`Ошибка ${err} повторите запросс позже`);
      })
      .finally(() => {
        renderLoading(false, popup);
      });
  },
});
deleteCard.setEventListeners();

function renderLoading(isLoading, popup) {
  const submitButton = popup._form.querySelector(".popup__submit");
  if (isLoading) {
    submitButton.textContent = "Сохранение...";
  } else if (
    !isLoading &&
    popup._form.classList.contains("popup__form_mesto")
  ) {
    submitButton.textContent = "Создать";
  } else if (
    !isLoading &&
    popup._form.classList.contains("popup__form_delete")
  ) {
    submitButton.textContent = "Да";
  } else {
    submitButton.textContent = "Сохранить";
  }
}

// Валидаия форм
const formValidatorProfile = new FormValidator(setings, formProfile);
formValidatorProfile.enableValidation();
const formValidatorMesto = new FormValidator(setings, formAddCards);
formValidatorMesto.enableValidation();
const FormValidatorAvatar = new FormValidator(setings, formAvatar);
FormValidatorAvatar.enableValidation();

// передает элементы массива на рендер - после
// вставляет их в нужное место в темплейт контейнере
const cardsList = new Section(
  {
    renderer: renderCard,
  },
  ".elements"
);

// Рендер карточек
function renderCard(data) {
  cardsList.setItem(createCard(data));
}

// получаем готовую карточку
function createCard(data) {
  const card = new Card(
    ".elementTemplate",
    handleCardClick,
    data,
    putLike,
    openDeletCard
  );
  const finishCard = card.createNameCard();
  return finishCard;
}

// функция колбэк - используется в классе Card
// - отправляет запросы на поставить(снять) лайк
// вызывает метод likeCard класса Card
function putLike(idCard, elementLike, card) {
  elementLike.classList.toggle("element__like_active");
  if (elementLike.classList.contains("element__like_active")) {
    return api
      .putingLikes(idCard)
      .then((data) => {
        //console.log("ставлю лайк");
        card.likeCard(data);
      })
      .catch((err) => {
        console.log(`Ошибка ${err} повторите запросс позже`);
      });
  } else {
    return api
      .deleteLikes(idCard)
      .then((data) => {
        //console.log("удаляю лайк");
        card.likeCard(data);
      })
      .catch((err) => {
        console.log(`Ошибка ${err} повторите запросс позже`);
      });
  }
}

// функция колбэк - используется в классе Card
// - отправляет запросы на удаление карточки
// открывает попап удаления + его слушатели
function openDeletCard(idCard, card) {
  //console.log(idCard);
  deleteCard.open(idCard, card);
}

// функция колбэк - используется в классе Card
function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}

// функция инфы профиля. Ресет при окрытии + само открытие  + удаляет ошибки + текст на инпуты
function openPopupProfile() {
  formValidatorProfile.deleteInputErrors();
  formValidatorProfile.deactivateButton();
  const userData = userInfo.getUserInfo();
  popupNameInput.value = userData.name;
  popupJobInput.value = userData.jobName;
  newNameAndJobValues.open();
}

// функция добавления карточки. Резета при окрытии + само открытие + удаляет ошибки + удаляет стиль ошибки + деактивирует сабмит`
function openAdd() {
  formValidatorMesto.deleteInputErrors();
  formValidatorMesto.deactivateButton();
  newCardPopup.open();
}
// функцция Аватара. Ресет + слушатели при открытии, ошибки, кнопка, плэйсхолдер на единственный инпут
function openPopupAvatar() {
  FormValidatorAvatar.deleteInputErrors();
  FormValidatorAvatar.deactivateButton();
  const avatarData = avatar.getAvatarInfo();
  popupJobinputAvatar.placeholder = avatarData;
  newAvatar.open();
}

// листенеры открытия попапов
profileEditAvatar.addEventListener("click", openPopupAvatar);
profileEditButton.addEventListener("click", openPopupProfile);
profileAddButton.addEventListener("click", openAdd);
