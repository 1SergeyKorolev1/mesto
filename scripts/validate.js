const setEventListeners = (formElement) => {
  validateForm(formElement);
  const inputList = Array.from(formElement.querySelectorAll("input"));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      hendlerInputForm(formElement, inputElement);
    });
  });
};

function enableValidation(setings) {
  const formList = Array.from(document.querySelectorAll(setings.formSelector));
  formList.forEach(function (formElement) {
    setEventListeners(formElement);
  });
}

enableValidation({
  formSelector: ".popup__form",
  inputSelector: "input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: ".popup__submit_invalid",
  errorClass: ".popup__error",
});

function hendlerInputForm(formElement, inputElement) {
  validateForm(formElement);
  validateInput(inputElement);
}

function validateForm(form) {
  const submitButton = form.querySelector(".popup__submit");
  if (form.checkValidity()) {
    submitButton.removeAttribute("disabled", true);
    submitButton.classList.remove("popup__submit_invalid");
  } else {
    submitButton.setAttribute("disabled", true);
    submitButton.classList.add("popup__submit_invalid");
  }
}

function validateInput(input) {
  const errorElement = input.parentNode.querySelector(`#${input.id}-error`);

  errorElement.textContent = input.validationMessage;
}
