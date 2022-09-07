export default class {
  constructor(setings, form) {
    this._inputSelector = setings.inputSelector;
    this._submitButtonSelector = setings.submitButtonSelector;
    this._inactiveButtonClass = setings.inactiveButtonClass;
    this._inputErrorClass = setings.inputErrorClass;
    this._errorClass = setings.errorClass;
    this._formElement = form;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._submitButton = this._formElement.querySelector(
      this._submitButtonSelector
    );
    this._errorElements = this._formElement.querySelectorAll(this._errorClass);
  }

  enableValidation() {
    this._setEventListeners();
  }

  _setEventListeners() {
    this._validateForm();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._hendlerInputForm(inputElement);
      });
    });
  }

  _hendlerInputForm(inputElement) {
    this._validateForm();
    this._validateInput(inputElement);
  }

  _validateForm() {
    if (this._formElement.checkValidity()) {
      this._submitButton.removeAttribute("disabled", true);
      this._submitButton.classList.remove(this._inactiveButtonClass);
    } else {
      this._submitButton.setAttribute("disabled", true);
      this._submitButton.classList.add(this._inactiveButtonClass);
    }
  }

  _validateInput(input) {
    const errorElement = this._formElement.querySelector(`#${input.id}-error`);
    if (input.checkValidity()) {
      input.classList.remove(this._inputErrorClass);
    } else {
      input.classList.add(this._inputErrorClass);
    }
    errorElement.textContent = input.validationMessage;
  }

  deleteInputErrors() {
    this._errorElements.forEach(function (error) {
      error.textContent = "";
    });
    this._inputList.forEach((input) => {
      input.classList.remove(this._inputErrorClass);
    });
  }

  deactivateButton() {
    this._submitButton.setAttribute("disabled", true);
    this._submitButton.classList.add("popup__submit_invalid");
  }
}
