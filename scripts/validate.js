const setEventListeners = (formElement, setings) => {
  validateForm(formElement, setings);
  const inputList = Array.from(
    formElement.querySelectorAll(setings.inputSelector)
  );
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      hendlerInputForm(formElement, inputElement, setings);
    });
  });
};

function enableValidation(setings) {
  const formList = Array.from(document.querySelectorAll(setings.formSelector));
  formList.forEach(function (formElement) {
    setEventListeners(formElement, setings);
  });
}

enableValidation({
  formSelector: ".popup__form",
  inputSelector: "input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_invalid",
  errorClass: "view-input_invalidate",
});

function hendlerInputForm(formElement, inputElement, setings) {
  validateForm(formElement, setings);
  validateInput(inputElement, setings);
}

function validateForm(formElement, setings) {
  const submitButton = formElement.querySelector(setings.submitButtonSelector);
  if (formElement.checkValidity()) {
    submitButton.removeAttribute("disabled", true);
    submitButton.classList.remove(setings.inactiveButtonClass);
  } else {
    submitButton.setAttribute("disabled", true);
    submitButton.classList.add(setings.inactiveButtonClass);
  }
}

function validateInput(input, setings) {
  const errorElement = input.parentNode.querySelector(`#${input.id}-error`);
  if (input.checkValidity()) {
    input.classList.remove(setings.errorClass);
  } else {
    input.classList.add(setings.errorClass);
  }
  errorElement.textContent = input.validationMessage;
}
