export default class UserInfo {
  constructor({ userName, userJob }) {
    this._userName = userName;
    this._userJob = userJob;
  }

  // Genera objeto con información actual del usuario
  getUserInfo() {
    this._info = {
      name: this._userName.textContent,
      job: this._userJob.textContent,
    };

    return this._info;
  }

  setUserInfo(name, job) {
    this._userName.textContent = name;
    this._userJob.textContent = job;
  }
}
