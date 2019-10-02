class F1Storage {
  // type = "localStorage";
  type = "sessionStorage";

  constructor(config) {
    Object.assign(this, config);
  }

  get store() {
    return window[this.type];
  }

  get(name) {
    if (typeof name === "string") {
      return this.store.getItem(name);
    } else if (Array.isArray(name)) {
      const keys = {};
      name.forEach(item => {
        keys[item] = this.get(item);
      });
      return keys;
    } else {
      const keys = {};
      for (let key in name) {
        keys[key] = this.get(key);
      }
      return keys;
    }
  }

  set(name, value) {
    if (typeof name === "string") {
      this.store.setItem(name, this.getPropValSetting(value));
    } else {
      for (let key in name) {
        this.set(key, this.getPropValSetting(name[key]));
      }
    }
  }

  remove(name) {
    // TODO: Add support for passing an array of keys or an object.
    this.store.removeItem(name);
  }

  clear() {
    this.store.clear();
  }

  getAll() {
    const keys = {};
    for (let key in this.store) {
      keys[key] = this.get(key);
    }
    return keys;
  }

  // Doing these for the purposes of making requests that we want to send cookies on.
  // TODO: convert store to cookies
  toCookies() {}

  // TODO: populate store from cookies
  fromCookies() {}

  getPropValSetting(val) {
    return typeof val === "object" ? JSON.stringify(val) : val;
  }
}

export default F1Storage;
