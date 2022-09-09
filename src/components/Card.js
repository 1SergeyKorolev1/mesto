export default class {
  constructor(
    cardSelector,
    handleCardClick,
    data,
    putLike,
    openDeletCard,
    idUser
  ) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    this._elementImage = this._cardElement.querySelector(".element__img");
    this._counter = this._cardElement.querySelector(".element__counter");
    this._counterLikes = data.likes.length;
    this._cardId = data._id;
    this._putLike = putLike;
    this._elementLike = this._cardElement.querySelector(".element__like");
    this._likeMassiv = data.likes;
    this._elementBasket = this._cardElement.querySelector(".element__basket");
    this._data = data;
    this._openDeletCard = openDeletCard;
    this._idUser = idUser;
  }

  createNameCard() {
    //console.log(this._idUser);
    this._likeMassiv.forEach((item) => {
      if (item._id === this._idUser) {
        this._elementLike.classList.toggle("element__like_active");
      }
    });

    if (this._data.owner._id === this._idUser) {
      this._elementBasket.classList.remove("element__bascet_disabled");
    } else {
      this._elementBasket.classList.add("element__bascet_disabled");
    }

    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._cardElement.querySelector(".element__title").textContent = this._name;
    this._addEventListenersCard();
    this._counter.textContent = this._counterLikes;
    return this._cardElement;
  }

  _addEventListenersCard() {
    this._elementImage.addEventListener("click", () =>
      this._handleCardClick(this._name, this._link)
    );
    this._elementLike.addEventListener(
      "click",
      this._putLike.bind(this, this._cardId, this._elementLike, this)
    );
    this._elementBasket.addEventListener(
      "click",
      this._openDeletCard.bind(this, this._cardId, this)
    );
  }

  likeCard(data) {
    this._elementLike.classList.toggle("element__like_active");
    this._counter.textContent = data.likes.length;
  }

  deliteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }
}
