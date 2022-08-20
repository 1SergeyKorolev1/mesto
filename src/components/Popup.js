export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
    this.setEventListeners();
  }

  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
    this._popupSelector.removeEventListener("click", (evt) => {
      const popup = evt.currentTarget;
      if (
        evt.target === popup ||
        evt.target === popup.querySelector(".popup__close")
      ) {
        this.close(popup);
      }
    });
  }

  _handleEscClose(evt) {
    const keyEvent = evt.key;
    if (keyEvent === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupSelector.addEventListener("click", (evt) => {
      const popup = evt.currentTarget;
      if (
        evt.target === popup ||
        evt.target === popup.querySelector(".popup__close")
      ) {
        this.close(popup);
      }
    });
  }
}
