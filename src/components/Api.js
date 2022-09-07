export default class {
  constructor(baseUrl, headers) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  initialDataProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._headers.authorization,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  initialCardsData() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: this._headers.authorization,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  nameAndJobValues(name, nameJob) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._headers.authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        about: nameJob,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  sendAvatarData(link) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._headers.authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: link,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  sendCardData(name, link) {
    //console.log(name, link);
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        authorization: this._headers.authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  putingLikes(idCard) {
    return fetch(`${this._baseUrl}/cards/${idCard}/likes`, {
      method: "PUT",
      headers: {
        authorization: this._headers.authorization,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  deleteLikes(idCard) {
    return fetch(`${this._baseUrl}/cards/${idCard}/likes`, {
      method: "DELETE",
      headers: {
        authorization: this._headers.authorization,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  deleteCard(idCard) {
    return fetch(`${this._baseUrl}/cards/${idCard}`, {
      method: "DELETE",
      headers: {
        authorization: this._headers.authorization,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }
}
