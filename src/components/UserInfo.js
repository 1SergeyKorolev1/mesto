export default class UserInfo {
  constructor(nameSelector, jobNameSelector) {
    this._name = document.querySelector(nameSelector);
    this._jobName = document.querySelector(jobNameSelector);
  }

  getUserInfo() {
    const userData = {
      name: this._name.textContent,
      jobName: this._jobName.textContent,
    };
    return userData;
  }

  setUserInfo(name, jobName) {
    this._name.textContent = name;
    this._jobName.textContent = jobName;
  }
}
