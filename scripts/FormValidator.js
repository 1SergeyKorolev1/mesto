export default class {
  constructor(setings, formSelector) {
    this._formSelector = formSelector;
    this._inputSelector = setings.inputSelector;
    this._submitButtonSelector = setings.submitButtonSelector;
    this._inactiveButtonClass = setings.inactiveButtonClass;
    this._errorClass = setings.errorClass;
    this._formElement = document.querySelector(this._formSelector);
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._submitButton = this._formElement.querySelector(
      this._submitButtonSelector
    );
  }

  enableValidation() {
    this._setEventListeners(this._formElement);
  }

  _setEventListeners(formElement) {
    this._validateForm(formElement);
    this._inputList.forEach((inputElement) => {
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
    if (formElement.checkValidity()) {
      this._submitButton.removeAttribute("disabled", true);
      this._submitButton.classList.remove(this._inactiveButtonClass);
    } else {
      this._submitButton.setAttribute("disabled", true);
      this._submitButton.classList.add(this._inactiveButtonClass);
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
