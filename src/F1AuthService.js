export default class F1AuthSevice {
  token = "";

  constructor(props) {
    Object.assign(this, props);
  }

  get authenticated() {
    if (this.token.length > 0) {
      return this.isValidToken(this.token);
    }
    return false;
  }

  login() {
    let password = prompt(
      `Please enter your password. (hint: ${this.adminPassword})`,
      this.adminPassword
    );
    if (password === this.adminPassword) {
      this.token = password
        .split("")
        .reverse()
        .join("");
    } else {
      this.token = "";
    }
    return this.authenticated;
  }

  logout() {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure you want to log out?")) {
      this.token = "";
    }
    return this.authenticated;
  }

  // TODO: add support for checking against the backend.
  isValidToken(token) {
    return (
      token ===
      this.adminPassword
        .split("")
        .reverse()
        .join("")
    );
  }
}
