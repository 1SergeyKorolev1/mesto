(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e,this._headers=n}var n,o;return n=t,(o=[{key:"initialDataProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._headers.authorization}}).then((function(e){if(e.ok)return e.json()}))}},{key:"initialCardsData",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._headers.authorization}}).then((function(e){if(e.ok)return e.json()}))}},{key:"nameAndJobValues",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._headers.authorization,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){if(e.ok)return e.json()}))}},{key:"sendAvatarData",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._headers.authorization,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){if(e.ok)return e.json()}))}},{key:"sendCardData",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._headers.authorization,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then((function(e){if(e.ok)return e.json()}))}},{key:"putingLikes",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:{authorization:this._headers.authorization}}).then((function(e){if(e.ok)return e.json()}))}},{key:"deleteLikes",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:{authorization:this._headers.authorization}}).then((function(e){if(e.ok)return e.json()}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._headers.authorization}}).then((function(e){if(e.ok)return e.json()}))}}])&&e(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}(),n=document.querySelector(".profile__edit-avatar"),o=document.querySelector(".profile__edit-button"),r=(document.querySelector(".popup_popup_profile"),document.querySelector(".popup__close_profile"),document.querySelector(".popup__form_profile"),document.querySelector(".profile__title"),document.querySelector(".profile__subtitle"),document.querySelector(".popup__nameinput")),i=document.querySelector(".popup__jobinput"),a=document.querySelector(".profile__add-button"),u=(document.querySelector(".popup__title"),document.querySelector(".elements"),document.querySelector(".elementTemplate"),document.querySelector(".popup_popup_image"),document.querySelector(".popup__close_image"),document.querySelector(".popup__close_mesto"),document.querySelector(".popup__increased"),document.querySelector(".popup__caption"),document.querySelector(".popup_popup_mesto"),document.querySelector(".popup__nameinput_mesto"),document.querySelector(".popup__jobinput_mesto"),document.querySelector(".popup__jobinput_avatar")),c=(document.querySelector(".popup__form_mesto"),document.forms["form-add-card"]),s=document.forms["form-edit-profile"],l=document.forms["form-edit-avatar"],p={inputSelector:"input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_invalid",inputErrorClass:"view-input_invalidate",errorClass:".popup__error"};function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var h=function(){function e(t,n,o,r,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=o.name,this._link=o.link,this._cardSelector=t,this._handleCardClick=n,this._cardElement=document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0),this._elementImage=this._cardElement.querySelector(".element__img"),this._counter=this._cardElement.querySelector(".element__counter"),this._counterLikes=o.likes.length,this._cardId=o._id,this._putLike=r,this._elementLike=this._cardElement.querySelector(".element__like"),this._likeMassiv=o.likes,this._elementBasket=this._cardElement.querySelector(".element__basket"),this._data=o,this._openDeletCard=i}var t,n;return t=e,(n=[{key:"createNameCard",value:function(){var e=this;return this._likeMassiv.forEach((function(t){"7d8820eb264de0b92db322c9"===t._id&&e._elementLike.classList.toggle("element__like_active")})),"7d8820eb264de0b92db322c9"===this._data.owner._id?this._elementBasket.classList.remove("element__bascet_disabled"):this._elementBasket.classList.add("element__bascet_disabled"),this._elementImage.src=this._link,this._elementImage.alt=this._name,this._cardElement.querySelector(".element__title").textContent=this._name,this._addEventListenersCard(),this._counter.textContent=this._counterLikes,this._cardElement}},{key:"_addEventListenersCard",value:function(){var e=this;this._elementImage.addEventListener("click",(function(){return e._handleCardClick(e._name,e._link)})),this._elementLike.addEventListener("click",this._putLike.bind(this,this._cardId,this._elementLike,this)),this._elementBasket.addEventListener("click",this._openDeletCard.bind(this,this._cardId,this))}},{key:"likeCard",value:function(e){this._counter.textContent=e.likes.length}},{key:"deliteCard",value:function(){this._cardElement.remove(),this._cardElement=null}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var d=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._submitButton=this._formElement.querySelector(this._submitButtonSelector),this._errorElements=this._formElement.querySelectorAll(this._errorClass)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._validateForm(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._hendlerInputForm(t)}))}))}},{key:"_hendlerInputForm",value:function(e){this._validateForm(),this._validateInput(e)}},{key:"_validateForm",value:function(){this._formElement.checkValidity()?(this._submitButton.removeAttribute("disabled",!0),this._submitButton.classList.remove(this._inactiveButtonClass)):(this._submitButton.setAttribute("disabled",!0),this._submitButton.classList.add(this._inactiveButtonClass))}},{key:"_validateInput",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.checkValidity()?e.classList.remove(this._inputErrorClass):e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage}},{key:"deleteInputErrors",value:function(){var e=this;this._errorElements.forEach((function(e){e.textContent=""})),this._inputList.forEach((function(t){t.classList.remove(e._inputErrorClass)}))}},{key:"deactivateButton",value:function(){this._submitButton.setAttribute("disabled",!0),this._submitButton.classList.add("popup__submit_invalid")}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var y=function(){function e(t,n){var o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"setItem",value:function(e){this._container.prepend(e)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var b=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._img=document.querySelector(t)}var t,n;return t=e,(n=[{key:"getAvatarInfo",value:function(){return this._img.src}},{key:"setAvatarInfo",value:function(e){this._img.src=e}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var E=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(t),this._jobName=document.querySelector(n)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,jobName:this._jobName.textContent}}},{key:"setUserInfo",value:function(e,t){this._name.textContent=e,this._jobName.textContent=t}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var S=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){var n=t.currentTarget;t.target!==n&&t.target!==n.querySelector(".popup__close")||e.close(n)}))}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function C(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=L(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},j.apply(this,arguments)}function L(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function q(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(o);if(r){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".popup__increased"),t._caption=t._popup.querySelector(".popup__caption"),t}return t=a,(n=[{key:"open",value:function(e,t){this._image.src=t,this._image.alt=e,this._caption.textContent=e,j(P(a.prototype),"open",this).call(this)}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(S);function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function T(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=A(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},x.apply(this,arguments)}function A(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function z(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(o);if(r){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return z(this,e)});function a(e,t){var n,o=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleFormSubmit=o,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll("input"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputsValues={},this._inputList.forEach((function(t){e._inputsValues[t.name]=t.value})),this._inputsValues}},{key:"setEventListeners",value:function(){var e=this;x(D(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues(),e._cardId,e._cardElement,e)}))}},{key:"close",value:function(){x(D(a.prototype),"close",this).call(this),this._form.reset()}},{key:"open",value:function(e,t){x(D(a.prototype),"open",this).call(this),this._cardId=e,this._cardElement=t}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(S),V=new t("https://mesto.nomoreparties.co/v1/cohort-49",{authorization:"3975d1d0-6b22-448d-8c6c-c2e5e9259bc3"}),F=[V.initialDataProfile().then((function(e){N.setAvatarInfo(e.avatar),J.setUserInfo(e.name,e.about)})),V.initialCardsData().then((function(e){$.renderItems(e)}))];Promise.all(F).catch((function(e){console.log("Ошибка ".concat(e," повторите запросс позже"))}));var N=new b(".profile__avatar"),J=new E(".profile__title",".profile__subtitle"),M=new I(".popup_popup_image");M.setEventListeners();var H=new U(".popup_popup_mesto",{handleFormSubmit:function(e,t,n,o){W(!0,o),V.sendCardData(e.firstname,e.lastname).then((function(e){ee(e)})).catch((function(e){console.log("Ошибка ".concat(e," повторите запросс позже"))})).finally((function(){W(!1,o)})),H.close()}});H.setEventListeners();var G=new U(".popup_popup_profile",{handleFormSubmit:function(e,t,n,o){W(!0,o),G.close(),V.nameAndJobValues(e.firstname,e.lastname).then((function(e){J.setUserInfo(e.name,e.about)})).catch((function(e){console.log("Ошибка ".concat(e," повторите запросс позже"))})).finally((function(){W(!1,o)}))}});G.setEventListeners();var K=new U(".popup_popup_avatar",{handleFormSubmit:function(e,t,n,o){W(!0,o),K.close(),V.sendAvatarData(e.lastname).then((function(e){N.setAvatarInfo(e.avatar)})).catch((function(e){console.log("Ошибка ".concat(e," повторите запросс позже"))})).finally((function(){W(!1,o)}))}});K.setEventListeners();var Q=new U(".popup_popup_delete",{handleFormSubmit:function(e,t,n,o){W(!0,o),Q.close(),V.deleteCard(t).then((function(e){n.deliteCard()})).catch((function(e){console.log("Ошибка ".concat(e," повторите запросс позже"))})).finally((function(){W(!1,o)}))}});function W(e,t){var n=t._form.querySelector(".popup__submit");e?n.textContent="Сохранение...":!e&&t._form.classList.contains("popup__form_mesto")?n.textContent="Создать":!e&&t._form.classList.contains("popup__form_delete")?n.textContent="Да":n.textContent="Сохранить"}Q.setEventListeners();var X=new d(p,s);X.enableValidation();var Y=new d(p,c);Y.enableValidation();var Z=new d(p,l);Z.enableValidation();var $=new y({renderer:ee},".elements");function ee(e){$.setItem(function(e){return new h(".elementTemplate",oe,e,te,ne).createNameCard()}(e))}function te(e,t,n){return t.classList.toggle("element__like_active"),t.classList.contains("element__like_active")?V.putingLikes(e).then((function(e){n.likeCard(e)})).catch((function(e){console.log("Ошибка ".concat(e," повторите запросс позже"))})):V.deleteLikes(e).then((function(e){n.likeCard(e)})).catch((function(e){console.log("Ошибка ".concat(e," повторите запросс позже"))}))}function ne(e,t){Q.open(e,t)}function oe(e,t){M.open(e,t)}n.addEventListener("click",(function(){Z.deleteInputErrors(),Z.deactivateButton();var e=N.getAvatarInfo();u.placeholder=e,K.open()})),o.addEventListener("click",(function(){X.deleteInputErrors(),X.deactivateButton();var e=J.getUserInfo();r.value=e.name,i.value=e.jobName,G.open()})),a.addEventListener("click",(function(){Y.deleteInputErrors(),Y.deactivateButton(),H.open()}))})();