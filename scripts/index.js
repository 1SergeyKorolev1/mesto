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
const elementCard = document.querySelector(".elementTemplate").content;
const popupPopupImage = document.querySelector(".popup_popup_image");
const popupCloseImage = document.querySelector(".popup__close_image");
const popupCloseMesto = document.querySelector(".popup__close_mesto");
const popupIncreased = document.querySelector(".popup__increased");
const popupCaption = document.querySelector(".popup__caption");
const popupPopupMesto = document.querySelector(".popup_popup_mesto");
const popupNameinputMesto = document.querySelector(".popup__nameinput_mesto");
const popupJobinputMesto = document.querySelector(".popup__jobinput_mesto");
const popupFormMesto = document.querySelector(".popup__form_mesto");

elementsCardsMassif.forEach(function (element) {
  renderCard(element.name, element.link);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupNameInput.value;
  profileSubtitle.textContent = popupJobInput.value;
  removePopupOpened(popupProfileEdit);
}

function handleMestoFormSubmit(evt) {
  evt.preventDefault();
  renderCard(popupNameinputMesto.value, popupJobinputMesto.value);
  removePopupOpened(popupPopupMesto);
  deactivateButtonMesto();
}

function deactivateButtonMesto() {
  const submitActiv = popupFormMesto.querySelector(".popup__submit");
  submitActiv.setAttribute("disabled", true);
  submitActiv.classList.add("popup__submit_invalid");
}

function renderCard(nameCard, linkNameCard) {
  elementsContainer.prepend(createNameCard(nameCard, linkNameCard));
}

function createNameCard(nameCard, linkNameCard) {
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
  const form = document.forms.form1;
  deliteInput(form);
  popupNameInput.value = profileTitle.textContent;
  popupJobInput.value = profileSubtitle.textContent;
  addPopupOpened(popupProfileEdit);
}
function openAdd() {
  const form = document.forms.form2;
  deliteInput(form);
  form.reset();
  addPopupOpened(popupPopupMesto);
}

function deliteInput(formElement) {
  const errorElements = formElement.querySelectorAll(".popup__error");
  errorElements.forEach(function (error) {
    if (formElement === document.forms.form1) {
      error.textContent = "";
    } else {
      error.textContent = "Заполните это поле.";
    }
  });
}

profileEditButton.addEventListener("click", openPopupProfile);
profileAddButton.addEventListener("click", openAdd);

popupFormMesto.addEventListener("submit", handleMestoFormSubmit);
popupFormProfile.addEventListener("submit", handleProfileFormSubmit);

function closeViaOverlayOrEscape(formElement) {
  const closeButton = formElement.querySelector(".popup__close");
  function addClickEvent(evt) {
    if (evt.target === evt.currentTarget) {
      removePopupOpened(formElement);
      RemoveClickAndKeydownEvent(formElement);
    }
  }
  function addKeydownEvent(evt) {
    const escapeEvent = evt.key;
    if (escapeEvent === "Escape") {
      removePopupOpened(formElement);
      RemoveClickAndKeydownEvent(formElement);
    }
  }
  function exitPopup() {
    removePopupOpened(formElement);
    RemoveClickAndKeydownEvent(formElement);
  }
  function RemoveClickAndKeydownEvent(formElement) {
    formElement.removeEventListener("click", addClickEvent);
    document.removeEventListener("keydown", addKeydownEvent);
    closeButton.addEventListener("click", exitPopup);
  }
  document.addEventListener("keydown", addKeydownEvent);
  formElement.addEventListener("click", addClickEvent);
  closeButton.addEventListener("click", exitPopup);
}
