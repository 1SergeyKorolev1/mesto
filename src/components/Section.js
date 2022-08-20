export default class {
  constructor({ items, renderer }, containerSelector) {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._initialArray.forEach((item) => {
      this._renderer(item.name, item.link);
    });
  }

  setItem(element) {
    this._container.prepend(element);
  }
}
