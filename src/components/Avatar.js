export default class Avatar {
  constructor(imgSelector) {
    this._img = document.querySelector(imgSelector);
  }

  getAvatarInfo() {
    const avatarData = this._img.src;
    return avatarData;
  }

  setAvatarInfo(imgLink) {
    this._img.src = imgLink;
  }
}
