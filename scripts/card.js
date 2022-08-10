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
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    this._elementImage = this._cardElement.querySelector(".element__img");
  }

  createNameCard() {
    this._card = this._cardElement;
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._card.querySelector(".element__title").textContent = this._name;
    this._addEventListenersCard();
    this._elementImage.addEventListener("click", (evt) => {
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
      .addEventListener("click", this.likeCard);
    this._card
      .querySelector(".element__basket")
      .addEventListener("click", this.deliteCard.bind(this));
  }
  likeCard(evt) {
    evt.target.classList.toggle("element__like_active");
  }
  deliteCard() {
    this._card.remove();
  }
}
