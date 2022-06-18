let profileEditButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let popupClose = document.querySelector(".popup__close");
let formElement = document.querySelector(".popup__form");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");
let popupNameInput = document.querySelector(".popup__nameinput");
let popupJobInput = document.querySelector(".popup__jobinput");

function formSubmitHandler(evt) {
  evt.preventDefault();
  popupNameInput.value;
  popupJobInput.value;
  profileTitle.textContent = popupNameInput.value;
  profileSubtitle.textContent = popupJobInput.value;
  popup.classList.remove("popup_opened");
}

function open() {
  popupNameInput.value = profileTitle.textContent;
  popupJobInput.value = profileSubtitle.textContent;
  popup.classList.add("popup_opened");
}

function exit() {
  popup.classList.remove("popup_opened");
}

profileEditButton.addEventListener("click", open);
popupClose.addEventListener("click", exit);
formElement.addEventListener("submit", formSubmitHandler);
