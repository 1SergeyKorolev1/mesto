import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll("input");
    this._buttonSubmitText =
      this._popup.querySelector(".popup__submit").textContent;
    this._buttonSubmit = this._popup.querySelector(".popup__submit");
  }

  _getInputValues() {
    this._inputsValues = {};
    //добавляем значения полей в объект this._inputsValues
    this._inputList.forEach((input) => {
      this._inputsValues[input.name] = input.value;
    });
    return this._inputsValues;
  }

  //обработчик сабмита формы
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(
        this._getInputValues(),

        this._buttonSubmit,
        this._buttonSubmitText
      );
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

  open() {
    super.open();
  }
}
