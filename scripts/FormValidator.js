export default class {
  constructor(setings) {
    this._formSelector = setings.formSelector;
    this._inputSelector = setings.inputSelector;
    this._submitButtonSelector = setings.submitButtonSelector;
    this._inactiveButtonClass = setings.inactiveButtonClass;
    this._errorClass = setings.errorClass;
  }

  enableValidation() {
    const formList = Array.from(document.querySelectorAll(this._formSelector));
    formList.forEach((formElement) => {
      this._setEventListeners(formElement);
    });
  }

  _setEventListeners(formElement) {
    this._validateForm(formElement);
    const inputList = Array.from(
      formElement.querySelectorAll(this._inputSelector)
    );
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._hendlerInputForm(formElement, inputElement);
      });
    });
  }

  _hendlerInputForm(formElement, inputElement) {
    this._validateForm(formElement);
    this._validateInput(inputElement);
  }

  _validateForm(formElement) {
    const submitButton = formElement.querySelector(this._submitButtonSelector);
    if (formElement.checkValidity()) {
      submitButton.removeAttribute("disabled", true);
      submitButton.classList.remove(this._inactiveButtonClass);
    } else {
      submitButton.setAttribute("disabled", true);
      submitButton.classList.add(this._inactiveButtonClass);
    }
  }

  _validateInput(input) {
    const errorElement = input.parentNode.querySelector(`#${input.id}-error`);
    if (input.checkValidity()) {
      input.classList.remove(this._errorClass);
    } else {
      input.classList.add(this._errorClass);
    }
    errorElement.textContent = input.validationMessage;
  }
}
