const profileEditAvatar = document.querySelector(".profile__edit-avatar");
const profileEditButton = document.querySelector(".profile__edit-button");
const popupProfileEdit = document.querySelector(".popup_popup_profile");
const popupCloseProfile = document.querySelector(".popup__close_profile");
const popupFormProfile = document.querySelector(".popup__form_profile");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const popupNameInput = document.querySelector(".popup__nameinput");
const popupJobInput = document.querySelector(".popup__jobinput");
const profileAddButton = document.querySelector(".profile__add-button");
const popupTitle = document.querySelector(".popup__title");
const elementsContainer = document.querySelector(".elements");
const elementCard = document.querySelector(".elementTemplate");
const popupPopupImage = document.querySelector(".popup_popup_image");
const popupCloseImage = document.querySelector(".popup__close_image");
const popupCloseMesto = document.querySelector(".popup__close_mesto");
const popupIncreased = document.querySelector(".popup__increased");
const popupCaption = document.querySelector(".popup__caption");
const popupPopupMesto = document.querySelector(".popup_popup_mesto");
const popupNameinputMesto = document.querySelector(".popup__nameinput_mesto");
const popupJobinputMesto = document.querySelector(".popup__jobinput_mesto");
const popupJobinputAvatar = document.querySelector(".popup__jobinput_avatar");
const popupFormMesto = document.querySelector(".popup__form_mesto");
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
};
