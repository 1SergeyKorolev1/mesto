let profileEditButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let popupClose = document.querySelector(".popup__close");
let formElement = document.querySelector(".popup__submit");
let popupForma = document.querySelectorAll(".popup__forma");

function formSubmitHandler(evt) {
  popupForma[0].value;
  popupForma[1].value;
  let profileTitle = document.querySelector(".profile__title");
  let profileSubtitle = document.querySelector(".profile__subtitle");
  profileTitle.textContent = popupForma[0].value;
  profileSubtitle.textContent = popupForma[1].value;
  popupForma[0].value = "";
  popupForma[1].value = "";
  popup.classList.remove("popup__opened");
}

function open() {
  popup.classList.add("popup__opened");
}

function exit() {
  popup.classList.remove("popup__opened");
}

profileEditButton.addEventListener("click", open);
popupClose.addEventListener("click", exit);
formElement.addEventListener("click", formSubmitHandler);
