import "./index.css";
import {
  //idUser,
  formAvatar,
  popupJobinputAvatar,
  profileEditAvatar,
  formAddCards,
  formProfile,
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
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";

const userInfo = new UserInfo(".profile__title", ".profile__subtitle");
const avatar = new Avatar(".profile__avatar");
const popupWithImage = new PopupWithImage(".popup_popup_image");

popupWithImage.setEventListeners();

import Api from "../components/Api.js";
const api = new Api("https://mesto.nomoreparties.co/v1/cohort-49", {
  authorization: "3975d1d0-6b22-448d-8c6c-c2e5e9259bc3",
});

let idUser = null;
let dataCard = null;

const promisProfile = api.initialDataProfile().then((data) => {
  avatar.setAvatarInfo(data.avatar);
  userInfo.setUserInfo(data.name, data.about);
  idUser = data._id;
});

const promisCards = api.initialCardsData().then((data) => {
  data.reverse();
  cardsList.renderItems(data);
});

const promis = [promisProfile, promisCards];

Promise.all(promis).catch((err) => {
  console.log(`Ошибка ${err} повторите запросс позже`);
});

const popupSaveNewCard = new PopupWithForm(".popup_popup_mesto", {
  handleFormSubmit: (item, button, text) => {
    renderLoading(text, button);
    api
      .sendCardData(item.firstname, item.lastname)
      .then((data) => {
        renderCard(data);
        popupSaveNewCard.close();
      })
      .catch((err) => {
        console.log(`Ошибка ${err} повторите запросс позже`);
      })
      .finally(() => {
        renderLoading(text, button);
      });
  },
});
popupSaveNewCard.setEventListeners();

const popupSaveTextDataProfile = new PopupWithForm(".popup_popup_profile", {
  handleFormSubmit: (item, button, text) => {
    renderLoading(text, button);
    api
      .nameAndJobValues(item.firstname, item.lastname)
      .then((data) => {
        userInfo.setUserInfo(data.name, data.about);
        popupSaveTextDataProfile.close();
      })
      .catch((err) => {
        console.log(`Ошибка ${err} повторите запросс позже`);
      })
      .finally(() => {
        renderLoading(text, button);
      });
  },
});
popupSaveTextDataProfile.setEventListeners();

const popupSaveAvatar = new PopupWithForm(".popup_popup_avatar", {
  handleFormSubmit: (item, button, text) => {
    renderLoading(text, button);
    api
      .sendAvatarData(item.lastname)
      .then((data) => {
        avatar.setAvatarInfo(data.avatar);
        popupSaveAvatar.close();
      })
      .catch((err) => {
        console.log(`Ошибка ${err} повторите запросс позже`);
      })
      .finally(() => {
        renderLoading(text, button);
      });
  },
});
popupSaveAvatar.setEventListeners();

const popupConfirm = new PopupWithForm(".popup_popup_delete", {
  handleFormSubmit: (item, button, text) => {
    renderLoading(text, button);
    api
      .deleteCard(dataCard.idCard)
      .then((data) => {
        dataCard.card.deliteCard();
        popupConfirm.close();
      })
      .catch((err) => {
        console.log(`Ошибка ${err} повторите запросс позже`);
      })
      .finally(() => {
        renderLoading(text, button);
      });
  },
});
popupConfirm.setEventListeners();

function renderLoading(text, button) {
  if (button.textContent === text) {
    button.textContent = "Сохранение...";
  } else {
    button.textContent = text;
  }
}

// Валидаия форм
const formValidatorProfile = new FormValidator(setings, formProfile);
formValidatorProfile.enableValidation();
const formValidatorMesto = new FormValidator(setings, formAddCards);
formValidatorMesto.enableValidation();
const formValidatorAvatar = new FormValidator(setings, formAvatar);
formValidatorAvatar.enableValidation();

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
    openDeletCard,
    idUser
  );
  const finishCard = card.createNameCard();
  return finishCard;
}

// функция колбэк - используется в классе Card
// - отправляет запросы на поставить(снять) лайк
// вызывает метод likeCard класса Card
function putLike(idCard, elementLike, card) {
  if (elementLike.classList.contains("element__like_active")) {
    return api
      .deleteLikes(idCard)
      .then((data) => {
        //console.log("удаляю лайк");
        card.likeCard(data);
      })
      .catch((err) => {
        console.log(`Ошибка ${err} повторите запросс позже`);
      });
  } else {
    return api
      .putingLikes(idCard)
      .then((data) => {
        //console.log("ставлю лайк");
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
  dataCard = { idCard: idCard, card: card };
  popupConfirm.open();
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
  popupSaveTextDataProfile.open();
}

// функция добавления карточки. Резета при окрытии + само открытие + удаляет ошибки + удаляет стиль ошибки + деактивирует сабмит`
function openAdd() {
  formValidatorMesto.deleteInputErrors();
  formValidatorMesto.deactivateButton();
  popupSaveNewCard.open();
}
// функцция Аватара. Ресет + слушатели при открытии, ошибки, кнопка, плэйсхолдер на единственный инпут
function openPopupAvatar() {
  formValidatorAvatar.deleteInputErrors();
  formValidatorAvatar.deactivateButton();
  const avatarData = avatar.getAvatarInfo();
  popupJobinputAvatar.placeholder = avatarData;
  popupSaveAvatar.open();
}

// листенеры открытия попапов
profileEditAvatar.addEventListener("click", openPopupAvatar);
profileEditButton.addEventListener("click", openPopupProfile);
profileAddButton.addEventListener("click", openAdd);
