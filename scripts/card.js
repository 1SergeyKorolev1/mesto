export default class {
  constructor(
    nameCard,
    linkNameCard,
    cardSelector,
    addPopupOpened,
    popupPopupImage,
    popupIncreased,
    popupCaption
  ) {
    this._name = nameCard;
    this._link = linkNameCard;
    this._cardSelector = cardSelector;
    this._addPopupOpened = addPopupOpened;
    this._popupPopupImage = popupPopupImage;
    this._popupIncreased = popupIncreased;
    this._popupCaption = popupCaption;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.cloneNode(true);
    return cardElement;
  }

  createNameCard() {
    this._card = this._getTemplate();
    this._card.querySelector(".element__img").src = this._link;
    this._card.querySelector(".element__img").alt = this._name;
    this._card.querySelector(".element__title").textContent = this._name;
    this._addEventListenersCard();
    this._card
      .querySelector(".element__img")
      .addEventListener("click", (evt) => {
        this._addPopupOpened(this._popupPopupImage);
        this._popupIncreased.src = this._link;
        this._popupIncreased.alt = this._name;
        this._popupCaption.textContent = this._name;
      });
    return this._card;
  }

  _addEventListenersCard() {
    this._card
      .querySelector(".element__like")
      .addEventListener("click", function (evt) {
        evt.target.classList.toggle("element__like_active");
      });
    this._card
      .querySelector(".element__basket")
      .addEventListener("click", function (evt) {
        const basketKlick = evt.target;
        const basketDeconste = basketKlick.closest(".element");
        basketDeconste.remove();
      });
  }
}
