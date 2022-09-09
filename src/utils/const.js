const profileEditAvatar = document.querySelector(".profile__edit-avatar");
const profileEditButton = document.querySelector(".profile__edit-button");
const popupNameInput = document.querySelector(".popup__nameinput");
const popupJobInput = document.querySelector(".popup__jobinput");
const profileAddButton = document.querySelector(".profile__add-button");
const popupJobinputAvatar = document.querySelector(".popup__jobinput_avatar");

const formAddCards = document.forms["form-add-card"];
const formProfile = document.forms["form-edit-profile"];
const formAvatar = document.forms["form-edit-avatar"];

const setings = {
  inputSelector: "input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_invalid",
  inputErrorClass: "view-input_invalidate",
  errorClass: ".popup__error",
};

export {
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
};
