export default class {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(initialArray) {
    initialArray.forEach((item) => {
      this._renderer(item);
    });
  }

  setItem(element) {
    this._container.prepend(element);
  }
}
