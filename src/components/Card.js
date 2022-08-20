export default class {
  constructor(nameCard, linkNameCard, cardSelector, handleCardClick) {
    this._name = nameCard;
    this._link = linkNameCard;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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
    return this._card;
  }

  _addEventListenersCard() {
    this._elementImage.addEventListener("click", () =>
      this._handleCardClick(this._name, this._link)
    );
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
