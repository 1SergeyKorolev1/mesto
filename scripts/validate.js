function submitForm(evt) {
  evt.preventDefault();
}

function hendlerInputForm(evt) {
  const curentform = evt.currentTarget;
  validateForm(curentform);
  validateInput(evt.target);
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
  addCustomErrorMessage(input);

  const errorElement = input.parentNode.querySelector(`#${input.id}-error`);

  errorElement.textContent = input.validationMessage;
}

function addCustomErrorMessage(input) {
  input.setCustomValidity("");

  if (input.validity.valueMissing) {
    input.setCustomValidity("Вы пропустили это поле");
  }

  if (input.validity.typeMismatch && input.type === "url") {
    input.setCustomValidity("Введите адрес сайта.");
  }
}

popupForm.addEventListener("submit", submitForm);
popupForm.addEventListener("input", hendlerInputForm);
popupFormMesto.addEventListener("submit", submitForm);
popupFormMesto.addEventListener("input", hendlerInputForm);

validateForm(popupForm);

validateForm(popupFormMesto);
