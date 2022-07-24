const setEventListeners = (formElement, setings) => {
  validateForm(formElement);
  const inputList = Array.from(
    formElement.querySelectorAll(setings.inputSelector)
  );
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      hendlerInputForm(formElement, inputElement);
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
  if (input.checkValidity()) {
    input.style.borderBottom = "1px solid #0000002f";
  } else {
    input.style.borderBottom = "1px solid red";
  }
  errorElement.textContent = input.validationMessage;
}
